# Setup

## Supabase SQL — run this in SQL Editor

```sql
drop table if exists topics;

create table topics (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text,
  has_content boolean default false,
  body text,
  imported_html text,
  extra_blocks_json text,
  published boolean default false,
  created_at timestamptz default now()
);

alter table topics enable row level security;

create policy "Public read published"
on topics for select
using (published = true);

create policy "Authenticated full access"
on topics for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');
```

## To add columns later WITHOUT losing data (use this instead of drop table):
```sql
alter table topics add column if not exists imported_html text;
alter table topics add column if not exists extra_blocks_json text;
```

## supabase-config.js
```js
const SUPABASE_URL = "https://xxxxxxxx.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-public-key";
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
```
