-- ═══════════════════════════════════════════════════════════
-- KAIRA — Migración 001: tabla waitlist
-- Standalone. Se ejecuta en la misma Supabase que Henkogen
-- (o en su propio proyecto Supabase si más adelante se separa).
-- ═══════════════════════════════════════════════════════════

do $$ begin
  create type kaira_pain_point as enum ('agenda','dinero','bienestar','todo');
exception when duplicate_object then null; end $$;

create table if not exists public.kaira_waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null unique,
  pain_point kaira_pain_point,
  source text default 'landing',
  ip_address text,
  user_agent text,
  consent boolean default true,
  consent_at timestamptz default now(),
  invited_at timestamptz,
  activated_at timestamptz
);

create index if not exists kaira_waitlist_created_at_idx on public.kaira_waitlist(created_at desc);
create index if not exists kaira_waitlist_pain_idx on public.kaira_waitlist(pain_point);

alter table public.kaira_waitlist enable row level security;

comment on table public.kaira_waitlist is
  'Waitlist de la app Kaira (asistente personal B2C). Insert desde landing pública, SELECT solo server-side con service_role.';
