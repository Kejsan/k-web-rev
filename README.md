# Kejsan website revamp

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/kejsans-projects/v0-kejsan-website-revamp)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/7WqKfgHhmVq)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/kejsans-projects/v0-kejsan-website-revamp](https://vercel.com/kejsans-projects/v0-kejsan-website-revamp)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/7WqKfgHhmVq](https://v0.app/chat/projects/7WqKfgHhmVq)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Authentication setup

This project uses [NextAuth](https://next-auth.js.org/) with GitHub OAuth for the admin section. Configure the following environment variables:

- `GITHUB_ID` and `GITHUB_SECRET` – credentials for your GitHub OAuth app.
- `NEXTAUTH_URL` – the base URL of your deployment.
- `NEXTAUTH_SECRET` – random string used to sign session tokens.
- `ADMIN_EMAILS` – comma separated list of GitHub email addresses allowed to access `/admin` and related API routes.

The admin dashboard lives at `/admin` and provides links to manage posts, experiences, apps, work samples, and the site footer.
