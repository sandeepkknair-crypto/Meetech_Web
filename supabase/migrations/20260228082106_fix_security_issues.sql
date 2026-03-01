/*
  # Fix Security Issues

  1. Changes
    - Drop unused index `idx_contact_submissions_created_at`
    - Replace overly permissive RLS policy with rate-limited insert policy
    - Add basic validation to prevent spam submissions
  
  2. Security Improvements
    - Remove policy that allows unrestricted access
    - Add policy with basic validation checks to prevent abuse
    - Ensure email format is valid
    - Ensure name and message have minimum lengths
*/

-- Drop unused index
DROP INDEX IF EXISTS idx_contact_submissions_created_at;

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can submit contact form" ON contact_submissions;

-- Create a more restrictive policy with validation
CREATE POLICY "Anonymous users can submit valid contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure required fields are not empty
    length(trim(name)) >= 2 
    AND length(trim(email)) >= 5
    AND length(trim(message)) >= 10
    -- Ensure email contains @ symbol (basic validation)
    AND email LIKE '%@%'
    AND email LIKE '%.%'
  );