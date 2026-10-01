import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!url || !key) {
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars missing — contact form will not submit.');
}

export const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
