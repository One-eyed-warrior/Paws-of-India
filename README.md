# Paws for India

A non-profit platform dedicated to rescuing, rehabilitating, and rehoming abandoned animals across India. The website provides an easy way for users to learn about rescue efforts, donate, and volunteer. 

## Features

### Frontend (React + Tailwind CSS)
- Modern, responsive design with Tailwind CSS
- Hero section highlighting the organization's mission
- Impact stats showcasing the number of rescues, adoptions, and volunteers
- Navigation bar with links to:
  - **Our Animals**
  - **Donate**
  - **Volunteer**
- Footer section with:
  - **Contact information**
  - **Quick links** (About Us, Success Stories, FAQ)
  - **Newsletter subscription**

### Backend (Supabase)
- Database schema with tables for:
  - **Animals** – Rescue details, profiles, and adoption status
  - **Donations** – Tracks contributions
  - **Volunteers** – Manages applications
- Row Level Security (RLS) policies for data protection
- User authentication integration for secure access

## Tech Stack
- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Supabase (PostgreSQL, Authentication, Row Level Security)
- 
## Screenshots

### Homepage
![Screenshot 2025-02-03 174729](https://github.com/user-attachments/assets/9d6ccde2-5c94-4177-a2a9-75c5772d571d)


### Footer & Impact Stats
![Screenshot 2025-02-03 174750](https://github.com/user-attachments/assets/4f692d42-512c-439e-8f97-8de9d9a7991c)


## 🛠 Installation & Setup

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher)
- Git
- Supabase account

### Step 1: Clone the Repository
    ```bash
    # Clone the repository
    git clone https://github.com/One-eyed-warrior/Paws-for-India.git

    # Navigate to project directory
    cd Paws-for-India


### Step 2: Environment Setup
    ```bash
    # Copy example environment file
    cp .env.example .env.local

    # Open .env.local and add your environment variables
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    VITE_API_URL=your_api_url
### Step 3: Install Dependencies
    ```bash
    # Install project dependencies
    npm install

    # If you prefer using yarn
    yarn install
### Step 4: Database Setup

 1.Create a new project in Supabase
 2.Run the database migrations

     ```bash
     npm run migrate

### Step 5: Start Development Server  
      ```bash
      # Start the development server  
      npm run dev  
      # The server will start on http://localhost:5173
### Step 6: Build for Production
      ```bash
      # Create production build
      npm run build

      # Preview production build 
      npm run preview 
 



