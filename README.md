# My website

This is the code for my personal website. You can see it live at www.kalypsohoman.com. 

## General Setup
If you want to run it locally, download the repo and install dependencies with `npm install`. Then start up the server using:

```bash
npm run dev -- --open
```

## Setting Up Email Functionality

To configure the email functionality, please follow these steps:

1. **Copy the Environment File:**
   - Make a copy of the `.env.example` file.
   - Rename the copied file to `.env`.

2. **Obtain an App Password from Google:**
   - Download an app password from your Google account.

3. **Update the `.env` File:**
   - Open the `.env` file.
   - Insert your email address and the app password into the respective fields.

Your `.env` file should look something like this:

```plaintext
EMAIL_ADDRESS=your-email@example.com
EMAIL_PASSWORD=your-app-password
```

## Stack

This project was built in svelte. I used vercel to deploy it. Nodemailer is used for emailing the comment forms.
