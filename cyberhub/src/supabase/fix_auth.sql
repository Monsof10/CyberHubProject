-- Start with a clean slate
commit;
begin;

-- First, grant necessary permissions
grant usage on schema public to postgres, anon, authenticated, service_role;
grant all privileges on public.user_progress to postgres, service_role;
grant select, insert, update on public.user_progress to authenticated;

-- Ensure RLS is enabled but allow service_role to bypass
alter table public.user_progress enable row level security;
alter table public.user_progress force row level security;

-- Drop existing policies to avoid conflicts
drop policy if exists "Users can read their own progress" on public.user_progress;
drop policy if exists "Users can insert their own progress" on public.user_progress;
drop policy if exists "Users can update their own progress" on public.user_progress;
drop policy if exists "Service role has full access" on public.user_progress;

-- Create new policies
create policy "Service role has full access"
  on public.user_progress
  as permissive
  for all
  to service_role
  using (true)
  with check (true);

create policy "Users can read their own progress"
  on public.user_progress
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can insert their own progress"
  on public.user_progress
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update their own progress"
  on public.user_progress
  for update
  to authenticated
  using (auth.uid() = user_id);

-- Create or replace the trigger function
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_progress (user_id)
  values (new.id);
  return new;
end;
$$;

-- Drop and recreate the trigger
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();

commit;
