/*
  # Initial Schema Setup

  1. New Tables
    - `animals`
      - `id` (uuid, primary key)
      - `name` (text)
      - `species` (text)
      - `age` (integer)
      - `health_status` (text)
      - `rescue_date` (date)
      - `description` (text)
      - `image_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `animals` table
    - Add policies for public viewing and authenticated user insertion
    
  3. Sample Data
    - Add initial sample animals
*/

-- Create animals table
CREATE TABLE IF NOT EXISTS animals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  species text NOT NULL,
  age integer,
  health_status text NOT NULL,
  rescue_date date NOT NULL,
  description text,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE animals ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Animals are viewable by everyone"
  ON animals FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Animals are insertable by authenticated users"
  ON animals FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insert sample data
INSERT INTO animals (name, species, age, health_status, rescue_date, description, image_url)
VALUES 
  (
    'Rocky',
    'Dog',
    2,
    'Healthy',
    '2024-01-15',
    'A loving and energetic street dog looking for a forever home.',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80'
  ),
  (
    'Luna',
    'Cat',
    1,
    'Vaccinated',
    '2024-02-01',
    'A gentle cat with beautiful eyes, perfect for a quiet home.',
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80'
  ),
  (
    'Max',
    'Dog',
    3,
    'Recovered',
    '2024-01-20',
    'A brave survivor who loves to play and cuddle.',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80'
  ),
  (
    'Bella',
    'Cat',
    2,
    'Healthy',
    '2024-01-25',
    'A playful cat who loves attention and window watching.',
    'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80'
  ),
  (
    'Charlie',
    'Dog',
    4,
    'Vaccinated',
    '2024-01-10',
    'A gentle giant with a heart of gold.',
    'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80'
  );