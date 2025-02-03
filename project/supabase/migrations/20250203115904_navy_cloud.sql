/*
  # Initial Schema for Paws of India NGO

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
    
    - `donations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `amount` (numeric)
      - `message` (text)
      - `created_at` (timestamp)
    
    - `volunteers`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `full_name` (text)
      - `phone` (text)
      - `skills` (text[])
      - `availability` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Animals Table
CREATE TABLE animals (
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

-- Donations Table
CREATE TABLE donations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  amount numeric NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Volunteers Table
CREATE TABLE volunteers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  full_name text NOT NULL,
  phone text NOT NULL,
  skills text[] NOT NULL,
  availability text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE animals ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteers ENABLE ROW LEVEL SECURITY;

-- Animals Policies
CREATE POLICY "Animals are viewable by everyone"
  ON animals FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Animals are insertable by authenticated users"
  ON animals FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Donations Policies
CREATE POLICY "Users can view their own donations"
  ON donations FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own donations"
  ON donations FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Volunteers Policies
CREATE POLICY "Users can view their own volunteer profile"
  ON volunteers FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own volunteer profile"
  ON volunteers FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);