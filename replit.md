# Experience Vending LLC - Photo Booth Booking Website

## Overview
A responsive, upscale booking website for Experience Vending LLC, a luxury photo booth rental company based in Fort Worth, Texas. Features a vintage-inspired aesthetic with ivory backgrounds and navy accents.

## Current State
- Fully functional booking system with PostgreSQL database
- Three service packages (The Essential, The Classic, The Gala)
- Real-time booking calendar showing availability
- Contact page with inquiry form
- Customer reviews section on homepage

## Project Architecture

### Frontend (client/)
- React with TypeScript
- Vite for bundling
- TailwindCSS for styling
- Wouter for routing
- React Query for data fetching
- Framer Motion for animations
- react-day-picker for calendar

### Backend (server/)
- Express.js
- PostgreSQL with Drizzle ORM
- Zod for validation

### Key Files
- `client/src/pages/` - Main page components (Home, Packages, Book, Experience, Contact)
- `client/src/components/` - Reusable components (Navigation, Footer, Reviews, etc.)
- `server/routes.ts` - API endpoints for bookings and inquiries
- `server/storage.ts` - Database operations
- `shared/schema.ts` - Database schema and types

## Contact Information
- Emails: jared@experiencevending.com, kylee@experiencevending.com
- Phones: (940) 327-7045, (817) 897-0460
- Location: Fort Worth, Texas

## Recent Changes
- Updated packages to show "Unlimited Print & Digital Photos" and "Customizable Photo Options"
- Added vinyl wrap customization note to packages
- Replaced stock images with custom photo booth imagery
- Added Google Reviews section to homepage
- Updated color scheme from gold to navy blue

## Future Enhancements (Pending API Credentials)

### Email Notifications
Currently using console.log simulation. To enable real emails:
1. Obtain Resend API key from https://resend.com
2. Add as secret: RESEND_API_KEY
3. Update server/routes.ts to use Resend SDK

### SMS Notifications
To send SMS to (940) 327-7045 and (817) 897-0460 on new bookings:
1. Obtain Twilio credentials (Account SID, Auth Token, Phone Number)
2. Add as secrets: TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER
3. Update server/routes.ts to use Twilio SDK

## User Preferences
- Vintage, elegant aesthetic
- Navy blue (#1a365d) as primary accent color
- Playfair Display serif font for headings
- No props/backdrop features in packages
- Photo booth-specific imagery only (no general photography)
