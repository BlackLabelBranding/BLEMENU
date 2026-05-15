create table if not exists public.blemenu_form_submissions (
  id bigint generated always as identity primary key,
  venue_name text not null,
  menu_section text not null,
  contact_name text not null,
  contact_email text not null,
  contact_phone text,
  submission_source text,
  item_name text not null,
  item_description text not null,
  dietary_notes text,
  handoff_notes text,
  created_at timestamptz not null default now()
);

alter table public.blemenu_form_submissions enable row level security;

create policy "Public can insert BLEMENU form submissions"
on public.blemenu_form_submissions
for insert
to anon, authenticated
with check (true);

create view public.blemenu_form_submission_public
with (security_invoker = true) as
select
  id,
  venue_name,
  menu_section,
  item_name,
  created_at
from public.blemenu_form_submissions;

grant usage on schema public to anon, authenticated;
grant insert on public.blemenu_form_submissions to anon, authenticated;
grant usage, select on sequence public.blemenu_form_submissions_id_seq to anon, authenticated;
grant select on public.blemenu_form_submission_public to anon, authenticated;

comment on table public.blemenu_form_submissions is 'BLEMENU intake form submissions from the GitHub-hosted static site.';
comment on view public.blemenu_form_submission_public is 'Public-safe feed for BLEMENU submission status without contact details or internal notes.';
