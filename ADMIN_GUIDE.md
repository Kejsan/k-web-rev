# Admin Section Setup Guide

This guide provides instructions on how to configure your environment to access the admin section of your website.

## 1. Environment Variables

The admin authentication relies on a set of environment variables. You must create a `.env.local` file in the root of your project and add the following variables:

-   `GITHUB_ID`: Your GitHub OAuth application's client ID.
-   `GITHUB_SECRET`: Your GitHub OAuth application's client secret.
-   `NEXTAUTH_URL`: The full URL of your website (e.g., `http://localhost:3000` for local development or `https://your-domain.com` for production).
-   `NEXTAUTH_SECRET`: A secret key used to encrypt session cookies. You can generate a random string for this value. A simple way is to run `openssl rand -base64 32` in your terminal.
-   `ADMIN_EMAILS`: A comma-separated list of GitHub email addresses that are allowed to access the admin section. Make sure there are no trailing commas.

### Example `.env.local` file:

```
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_string
ADMIN_EMAILS=your.email@example.com,another.admin@example.com
```

## 2. GitHub Email Visibility

For the login to work, your email address must be public on your GitHub profile. The authentication system needs to read your email address to verify if you are an authorized admin.

### How to make your email public on GitHub:

1.  Go to your GitHub **Settings**.
2.  In the "Access" section of the sidebar, click on **Profile**.
3.  Under "Public profile", find the "Public email" dropdown.
4.  Select the email address you want to make public. This email must be one of the emails listed in your `ADMIN_EMAILS` environment variable.

## 3. Troubleshooting

### Still can't log in?

If you've followed all the steps and still can't log in, double-check the following:

-   **Restart your application:** After creating or modifying the `.env.local` file, you must restart your development server for the changes to take effect.
-   **Correct email:** Ensure the email address you made public on GitHub is the exact same one (case-insensitivity is now handled, but it's good practice to be exact) you added to the `ADMIN_EMAILS` list.
-   **No typos:** Check for any typos in the environment variable names in your `.env.local` file.
-   **GitHub OAuth App:** Make sure your GitHub OAuth application is configured correctly with the right callback URL (`<your_nextauth_url>/api/auth/callback/github`).

By following this guide, you should be able to resolve any login issues with the admin section.
