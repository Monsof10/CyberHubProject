-- Create the user_progress table
create table public.user_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  progress jsonb not null default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.user_progress enable row level security;

-- Create policy to allow users to read only their own progress
create policy "Users can read their own progress"
  on public.user_progress
  for select
  using (auth.uid() = user_id);

-- Create policy to allow users to insert their own progress
create policy "Users can insert their own progress"
  on public.user_progress
  for insert
  with check (auth.uid() = user_id);

-- Create policy to allow users to update their own progress
create policy "Users can update their own progress"
  on public.user_progress
  for update
  using (auth.uid() = user_id);

-- Create an index on user_id for faster lookups
create index user_progress_user_id_idx on public.user_progress(user_id);

-- Function to automatically update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

-- Trigger to call the updated_at function
create trigger handle_updated_at
  before update
  on public.user_progress
  for each row
  execute function public.handle_updated_at();

-- Create courses table
create table public.courses (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.courses enable row level security;

create policy "Allow select on courses"
  on public.courses
  for select
  using (true);

create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

create trigger handle_updated_at_courses
  before update
  on public.courses
  for each row
  execute function public.handle_updated_at();

-- Create enrollments table
create table public.enrollments (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  course_id uuid references public.courses(id) not null,
  status text default 'active' not null,
  enrolled_at timestamp with time zone default timezone('utc'::text, now()) not null,
  completed_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.enrollments enable row level security;

create policy "Users can manage their enrollments"
  on public.enrollments
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create trigger handle_updated_at_enrollments
  before update
  on public.enrollments
  for each row
  execute function public.handle_updated_at();

-- Create course_progress table
create table public.course_progress (
  id uuid default uuid_generate_v4() primary key,
  enrollment_id uuid references public.enrollments(id) not null,
  module text not null,
  status text,
  quiz_scores jsonb default '{}'::jsonb,
  last_accessed timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.course_progress enable row level security;

create policy "Users can manage their course progress"
  on public.course_progress
  for all
  using (exists (
    select 1 from public.enrollments e
    where e.id = course_progress.enrollment_id
    and e.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.enrollments e
    where e.id = course_progress.enrollment_id
    and e.user_id = auth.uid()
  ));

create trigger handle_updated_at_course_progress
  before update
  on public.course_progress
  for each row
  execute function public.handle_updated_at();
