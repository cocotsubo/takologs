-- Per-user journal: experiences, ingestions, tolerance windows.

create table if not exists experiences (
  id text primary key,
  user_id text not null,
  title text not null default 'Nouvelle expérience',
  experience_date timestamptz not null default now(),
  notes text not null default '',
  created_at timestamptz not null default now()
);
create index if not exists experiences_user_id_idx on experiences (user_id);
create index if not exists experiences_user_date_idx on experiences (user_id, experience_date desc);

create table if not exists ingestions (
  id text primary key,
  user_id text not null,
  experience_id text not null references experiences(id) on delete cascade,
  substance_name text not null,
  slug text,
  route text not null default 'Orale',
  dose double precision,
  dose_unit text not null default 'mg',
  color text,
  ingestion_time timestamptz not null default now(),
  notes text not null default '',
  created_at timestamptz not null default now()
);
create index if not exists ingestions_experience_id_idx on ingestions (experience_id);
create index if not exists ingestions_user_id_idx on ingestions (user_id);

create table if not exists tolerance_windows (
  id text primary key,
  user_id text not null,
  substance_name text not null,
  last_taken_date date not null default current_date,
  reset_days int not null default 14,
  unique (user_id, substance_name)
);
create index if not exists tolerance_windows_user_id_idx on tolerance_windows (user_id);
