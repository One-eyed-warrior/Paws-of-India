/*
  # Create animals table and add sample data

  1. New Tables
    - Ensures animals table exists with proper structure
    - Adds initial sample data for demonstration

  2. Security
    - Enables RLS on animals table
    - Adds policies for public viewing and authenticated insertions
*/

-- Create animals table if it doesn't exist
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
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT FROM pg_policies WHERE tablename = 'animals' AND policyname = 'Animals are viewable by everyone'
  ) THEN
    CREATE POLICY "Animals are viewable by everyone"
      ON animals FOR SELECT
      TO public
      USING (true);
  END IF;

  IF NOT EXISTS (
    SELECT FROM pg_policies WHERE tablename = 'animals' AND policyname = 'Animals are insertable by authenticated users'
  ) THEN
    CREATE POLICY "Animals are insertable by authenticated users"
      ON animals FOR INSERT
      TO authenticated
      WITH CHECK (true);
  END IF;
END $$;

-- Insert sample data if table is empty
DO $$ 
BEGIN
  IF NOT EXISTS (SELECT 1 FROM animals LIMIT 1) THEN
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
      );
  END IF;
END $$;