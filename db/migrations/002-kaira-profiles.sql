-- ═══════════════════════════════════════════════════════════
-- KAIRA — Migración 002: perfiles de usuario
-- Cada usuario que hace login tiene un perfil con sus preferencias,
-- hijos, objetivos e integraciones autorizadas.
-- ═══════════════════════════════════════════════════════════

create table if not exists public.kaira_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  -- Identidad básica
  name text,
  email text,
  avatar_url text,

  -- Onboarding
  onboarding_completed boolean default false,
  onboarding_completed_at timestamptz,

  -- Familia
  children jsonb default '[]',      -- [{ name, age, school, notes }]
  partner_name text,

  -- Objetivos personales (top-level)
  personal_goals jsonb default '[]', -- [{ title, target_date, why }]

  -- Preferencias
  daily_brief_time time default '08:00',
  timezone text default 'Europe/Madrid',
  lang text default 'es',

  -- Integraciones (estado, tokens en tabla separada más seguro)
  gmail_connected boolean default false,
  gmail_connected_at timestamptz,
  gcal_connected boolean default false,
  gcal_connected_at timestamptz,
  fintonic_connected boolean default false,
  belvo_connected boolean default false,
  fenixx_connected boolean default false,

  -- Plan
  plan text default 'free',          -- 'free' | 'plus'
  plan_started_at timestamptz
);

alter table public.kaira_profiles enable row level security;

-- Cada user ve solo su propio perfil
drop policy if exists "profiles_own_select" on public.kaira_profiles;
create policy "profiles_own_select" on public.kaira_profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_own_update" on public.kaira_profiles;
create policy "profiles_own_update" on public.kaira_profiles
  for update using (auth.uid() = id);

drop policy if exists "profiles_own_insert" on public.kaira_profiles;
create policy "profiles_own_insert" on public.kaira_profiles
  for insert with check (auth.uid() = id);

-- Función trigger: al crear un auth.user, crear su perfil vacío
create or replace function public.handle_new_kaira_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.kaira_profiles (id, email, name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_kaira on auth.users;
create trigger on_auth_user_created_kaira
  after insert on auth.users
  for each row execute function public.handle_new_kaira_user();

comment on table public.kaira_profiles is
  'Perfil de cada usuario de Kaira. Se crea automáticamente al signup via trigger. RLS: cada usuario solo ve su propio perfil.';
