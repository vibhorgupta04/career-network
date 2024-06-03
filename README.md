---
title: Job Portal Application
---

# Job Portal Application

This project is a Next.js application for a job portal, providing users with a platform to browse job listings, view job descriptions, register as users, and utilize search and filter functionalities. The application features a responsive and modern UI.

## Features

1. *Job Listing*: Browse through various job postings available on the platform.
2. *Job Description*: View detailed descriptions for each job listing.
3. *Companies Listing*: Explore a list of companies that have job openings.
4. *Search and Filters for Jobs*: Search for jobs using keywords and filter results based on criteria such as location, job type, and company.
5. *User Registration*: Register as a user to apply for jobs and manage your profile.
6. *Responsive and Modern UI*: Enjoy a user-friendly interface that works seamlessly across devices.

## Screenshots

### Home Page
![Home Page](https://github.com/vibhorgupta04/career-network/assets/84231156/5b304dbe-03de-493b-a425-22bb624b3294)

### Job Listing
![Job Listing](https://github.com/vibhorgupta04/career-network/assets/84231156/d84b5b6f-38d9-4c79-8de4-f72bab270a08)

### Job Description
![Job Description](https://github.com/vibhorgupta04/career-network/assets/84231156/23c42d9f-ccbf-4dd4-b268-71364ba23b2e)

### Company Listing
![Company Listing](https://github.com/vibhorgupta04/career-network/assets/84231156/28337a02-2793-4058-b17a-86f8177fe7f4)

### Saved Jobs
![Saved Jobs](https://github.com/vibhorgupta04/career-network/assets/84231156/7a99e662-8bda-4fd6-a917-d2ce345926a9)

### Register Page
![Register Page](https://github.com/vibhorgupta04/career-network/assets/84231156/59ef58fa-5ef8-4dfe-9e79-91b822cdd511)

## Technologies Used

- *Next.js*: React framework for server-side rendering and static site generation.
- *TypeScript*: Superset of JavaScript for type safety and better development experience.
- *Context API*: State management solution for React applications.
- *Firebase*: Backend-as-a-Service (BaaS) for authentication, database, and hosting.
- *Tailwind CSS*: Utility-first CSS framework for rapid UI development.

## Folder Structure

The project is organized into the following directories:

- **src/api**: Contains API related logic and functions.
- **src/app**: Main application setup and configuration.
- **src/components/layout**: Layout components used across different pages.
- **src/components/sections**: Specific sections or blocks of the UI.
- **src/context**: Context API setup for state management.
- **src/firebase**: Firebase configuration and initialization.
- **src/styles**: Global and component-specific styles.

## Getting Started

To get started with the project, follow these steps:

1. *Clone the repository*:
    ```sh
    git clone https://github.com/vibhorgupta04/career-network.git
    cd career-network
    ```

2. *Install dependencies*:
    ```sh
    npm install
    ```

3. *Set up Firebase*:
    - Create a Firebase project.
    - Set up authentication and Firestore database.
    - Add your Firebase configuration to src/firebase/firebase.ts.

4. *Run the development server*:
    ```sh
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

The project is deployed on Vercel and can be accessed at: [Career Network](https://career-network-sigma.vercel.app/)

Follow these steps to deploy your own version:

...

## Scripts

- **dev**: Runs the application in development mode.
- **build**: Builds the application for production.
- **start**: Starts the production server.
