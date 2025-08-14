# Email Service Integration Setup Guide

This guide will help you set up your preferred email service provider for the newsletter signup functionality.

## Supported Providers

### 1. Mailchimp (Recommended for beginners)

**Setup Steps:**
1. Go to [Mailchimp](https://mailchimp.com) and create an account
2. Create an audience (mailing list)
3. Get your API key: Account → Extras → API keys
4. Get your Audience ID: Audience → Settings → Audience name and defaults

**Environment Variables:**
\`\`\`env
MAILCHIMP_API_KEY=your_api_key-us1
MAILCHIMP_AUDIENCE_ID=your_audience_id
\`\`\`

**Features:**
- Free up to 2,000 contacts
- Great templates and automation
- Detailed analytics
- Easy to use interface

### 2. ConvertKit (Best for creators)

**Setup Steps:**
1. Sign up at [ConvertKit](https://convertkit.com)
2. Create a form for your newsletter
3. Get your API key: Account Settings → API
4. Get your Form ID from the form settings

**Environment Variables:**
\`\`\`env
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_form_id
\`\`\`

**Features:**
- Creator-focused features
- Advanced automation
- Landing pages included
- Great for course creators

### 3. EmailOctopus (Most affordable)

**Setup Steps:**
1. Create account at [EmailOctopus](https://emailoctopus.com)
2. Create a list
3. Get API key from Settings → API
4. Get List ID from your list settings

**Environment Variables:**
\`\`\`env
EMAILOCTOPUS_API_KEY=your_api_key
EMAILOCTOPUS_LIST_ID=your_list_id
\`\`\`

**Features:**
- Very affordable pricing
- Built on Amazon SES
- Simple and clean interface
- Good deliverability

### 4. Buttondown (Best for newsletters)

**Setup Steps:**
1. Sign up at [Buttondown](https://buttondown.email)
2. Get your API key from Settings → Programming

**Environment Variables:**
\`\`\`env
BUTTONDOWN_API_KEY=your_api_key
\`\`\`

**Features:**
- Markdown-based newsletters
- Great for technical content
- Simple pricing
- RSS integration

## Configuration

1. **Choose your provider** in `lib/email-services.ts`:
\`\`\`typescript
export const emailServiceConfig: EmailServiceConfig = {
  provider: 'mailchimp', // Change this to your chosen provider
  // ... other config
}
\`\`\`

2. **Add environment variables** to `.env.local`

3. **Test the integration** by submitting the newsletter form

## Custom Integration

If you're using a different service or have a custom endpoint:

\`\`\`typescript
export const emailServiceConfig: EmailServiceConfig = {
  provider: 'custom',
  customEndpoint: 'https://your-api.com/subscribe'
}
\`\`\`

Your endpoint should accept POST requests with:
\`\`\`json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "source": "website-blog"
}
\`\`\`

## Analytics Tracking

The integration includes Google Analytics event tracking for successful subscriptions:

\`\`\`javascript
gtag('event', 'newsletter_signup', {
  event_category: 'engagement',
  event_label: 'blog_newsletter',
  value: 1
})
\`\`\`

## Error Handling

The system handles common scenarios:
- Invalid email addresses
- Duplicate subscriptions
- Network errors
- API rate limits
- Service downtime

## Testing

Test your integration by:
1. Subscribing with a test email
2. Checking your email service dashboard
3. Verifying confirmation emails are sent
4. Testing error scenarios (invalid emails, etc.)

## Security Notes

- API keys are stored as environment variables
- Never commit API keys to version control
- Use different API keys for development and production
- Regularly rotate your API keys
- Monitor API usage and set up alerts

## Support

Each email service provider has detailed documentation:
- [Mailchimp API Docs](https://mailchimp.com/developer/)
- [ConvertKit API Docs](https://developers.convertkit.com/)
- [EmailOctopus API Docs](https://emailoctopus.com/api-documentation)
- [Buttondown API Docs](https://docs.buttondown.email/api-reference)
