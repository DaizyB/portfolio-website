/*
# Create consultations table (single-tenant, no auth)

## Summary
Stores booking requests submitted through the "Book Free Consultation" form
on the interior design website. No sign-in screen exists, so this is a
single-tenant public-write table: any visitor may submit a consultation
request, and only site administrators (via the Supabase dashboard) read
them. The anon-key frontend inserts rows directly.

1. New Tables
- `consultations`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — full name of the person requesting the consultation
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email address
  - `project_type` (text, not null) — e.g. Residential, Commercial, Office, Luxury Home
  - `budget` (text, not null) — selected budget range
  - `location` (text, not null) — project location / city
  - `message` (text, nullable) — optional details about the project
  - `preferred_date` (date, nullable) — preferred consultation date
  - `preferred_time` (time, nullable) — preferred consultation time of day
  - `created_at` (timestamptz, default now()) — when the request was submitted

2. Security
- RLS enabled on `consultations`.
- INSERT is open to anon + authenticated so visitors can submit without an
  account (intentionally public write — the form has no sign-in).
- SELECT/UPDATE/DELETE are restricted to authenticated users only, so only
  dashboard admins can read or manage submitted requests. The anon frontend
  never needs to read back submitted rows.
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  project_type text NOT NULL,
  budget text NOT NULL,
  location text NOT NULL,
  message text,
  preferred_date date,
  preferred_time time,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Public insert (no sign-in on the site)
DROP POLICY IF EXISTS "anon_insert_consultations" ON consultations;
CREATE POLICY "anon_insert_consultations" ON consultations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Read/update/delete restricted to authenticated (admin) users only
DROP POLICY IF EXISTS "auth_select_consultations" ON consultations;
CREATE POLICY "auth_select_consultations" ON consultations FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_consultations" ON consultations;
CREATE POLICY "auth_update_consultations" ON consultations FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_consultations" ON consultations;
CREATE POLICY "auth_delete_consultations" ON consultations FOR DELETE
  TO authenticated USING (true);
