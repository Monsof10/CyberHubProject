-- Grant permissions to service role
grant usage on schema public to service_role;
grant all privileges on public.user_progress to service_role;

-- Allow service role to bypass RLS
alter table public.user_progress force row level security;

-- Create policy to allow service role full access
create policy "Service role has full access"
  on public.user_progress
  as permissive
  for all
  to service_role
  using (true)
  with check (true);

-- Function to automatically create user_progress record for new users
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

-- Trigger to create user_progress record when a new user is created
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
