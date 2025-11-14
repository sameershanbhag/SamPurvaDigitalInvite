# MongoDB RSVP Setup

## Environment Variables

The `.env` file contains your MongoDB credentials:

```env
MONGODB_URI=mongodb+srv://sameershanbhag1995_db_user:J9v3qNluIRiwEgsg@cluster0.hqmuvtn.mongodb.net/?appName=Cluster0
DATABASE_NAME=wedding_invitation
PORT=5000
```

**⚠️ Important:** The `.env` file is already added to `.gitignore` to keep your credentials secure.

## How It Works

### Backend (Server)
1. **Database Connection** (`server/db.ts`): Connects to MongoDB Atlas using the credentials in `.env`
2. **API Routes** (`server/routes.ts`): 
   - `POST /api/rsvp` - Submits a new RSVP
   - `GET /api/rsvps` - Retrieves all RSVPs (for admin viewing)

### Frontend (Client)
1. **RSVP Form** (`client/src/components/RsvpForm.tsx`): 
   - Collects guest information
   - Sends data to the `/api/rsvp` endpoint
   - Shows success/error messages

2. **Admin Page** (`client/src/pages/AdminRsvps.tsx`):
   - View all RSVP submissions
   - See attendance statistics
   - Read guest messages

## MongoDB Collection Structure

The `rsvps` collection will store documents with this structure:

```typescript
{
  _id: ObjectId,
  guestName: string,
  phone?: string,
  attending: boolean,
  numberOfGuests: number,
  message?: string,
  createdAt: Date
}
```

## Running the Application

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

## Viewing RSVPs

To view submitted RSVPs, navigate to `/admin-rsvps` (you may want to add authentication to this route in production).

## Security Notes

- Never commit the `.env` file to version control
- Consider adding authentication to the admin RSVP viewing page
- In production, add rate limiting to prevent spam submissions
