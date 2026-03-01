/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text, required) - Contact person's name
      - `email` (text, required) - Contact person's email address
      - `phone` (text, optional) - Contact person's phone number
      - `service_interest` (text, optional) - Service they're interested in
      - `message` (text, required) - Their message or inquiry
      - `created_at` (timestamptz) - Timestamp of submission
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous users to insert their own submissions
    - Add policy for authenticated admins to view all submissions
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service_interest text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);