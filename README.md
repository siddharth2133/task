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

Redux Store

The app uses Redux Toolkit to manage the authentication state. The store.js file configures the store with the API slice (apiSlice) and the authentication reducer (authSlice). The authentication state is used to manage user tokens, which are set upon successful registration or login.

Frontend
Redux Toolkit (for state management)
Next.js (for routing and server-side rendering)
Material UI (for modern UI components)

Backend
ReqRes (mock API for registration and login)

Pages and Routes
/login: Login page for user authentication.
/register: Registration page for new users.
/dashboard: Private page showing user data fetched from an API (requires authentication).

The app ensures only authenticated users can access the /dashboard page using a PrivateRoute component. If the user is not logged in, they are redirected to the login page.



