This is a modest project, that is still in development, to simulate a full stack project. The application is primarily to search for stats of a fortnite player, but will be added other routes to display other techniques and capabilities of React/Next.js

Front-End Aspects: React, React-Bootstrap, Next.js, CSS, Jotai
Back-End Aspects: API Handling, Database Interaction (MongoDB), JWT
Middleware Aspects: Custom middleware, error handling, Bcrypt

## React/Next.js Utilization & Correlating Techniques
- Page based routing: Adopted Next.js' page based routing, each page typically is responsible for it's own rendering
- Reusable components such as stats which is a child component that is called within the player component to reduce redundancy
- State management: Implementing useState for local states and Jotai for global state.
- Side effects: Implementing useEffect across different routes, such as the shop route to fetch from a Fortnite API
- Pagination: Implemented in the shop route via React-Bootstrap
- Form Handling: Utilized React-Hook-Form for managing the users entries
- Fetch: Used to retrieve data from APIs and converting it to json to display information
- Dynamically Rendering Navbar: Contains a conditional to render specific content in regard to isAuthenticated atom
- JWT: Creating a JWT token for the user when they log in through auth.js which will be required for API requests
- Password Hashing: Using Bcrypt to hash a password to be stored in the database. Also used to hash the password during login for comparison
- Database Interaction: The mongo.js file contains logic to interact with the database and defines functions to add and find a user
- Custom Middleware: authenticated.js checks the validity of a JWT token


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
