# Hotel J P Farm - API Contracts & Integration Plan

## Overview
This document outlines the API contracts and integration strategy for connecting the frontend booking system with MongoDB backend.

## Current Mock Data Location
- **File**: `/app/frontend/src/data/mock.js`
- **Data**: Hotel information, rooms, amenities, gallery, reviews, booking platforms

## Database Schema (MongoDB)

### Collections

#### 1. `bookings` Collection
```javascript
{
  _id: ObjectId,
  roomId: String (reference to rooms collection),
  roomName: String,
  guestName: String,
  guestEmail: String,
  guestPhone: String,
  checkInDate: Date,
  checkOutDate: Date,
  numberOfGuests: Number,
  totalPrice: Number,
  specialRequests: String (optional),
  bookingStatus: String (default: "pending"), // pending, confirmed, cancelled
  createdAt: Date,
  updatedAt: Date
}
```

#### 2. `rooms` Collection
```javascript
{
  _id: ObjectId,
  id: String (unique identifier),
  name: String,
  type: String,
  price: Number,
  maxGuests: Number,
  amenities: Array<String>,
  image: String (URL),
  available: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

#### 3. `reviews` Collection (optional - for admin to manage)
```javascript
{
  _id: ObjectId,
  name: String,
  rating: Number (1-5),
  comment: String,
  date: Date,
  approved: Boolean,
  createdAt: Date
}
```

## API Endpoints

### 1. Get All Rooms
**Endpoint**: `GET /api/rooms`
**Description**: Fetch all available rooms
**Response**:
```json
[
  {
    "id": "1",
    "name": "Deluxe Room",
    "type": "Double Bed",
    "price": 1774,
    "maxGuests": 2,
    "amenities": ["Free Wi-Fi", "AC", "TV", "Room Service"],
    "image": "url",
    "available": true
  }
]
```

### 2. Check Room Availability
**Endpoint**: `POST /api/rooms/check-availability`
**Description**: Check if a room is available for given dates
**Request Body**:
```json
{
  "roomId": "1",
  "checkInDate": "2024-01-20",
  "checkOutDate": "2024-01-23"
}
```
**Response**:
```json
{
  "available": true,
  "message": "Room is available for selected dates"
}
```

### 3. Create Booking
**Endpoint**: `POST /api/bookings`
**Description**: Create a new booking request
**Request Body**:
```json
{
  "roomId": "1",
  "roomName": "Deluxe Room",
  "guestName": "John Doe",
  "guestEmail": "john@example.com",
  "guestPhone": "+91 98765 43210",
  "checkInDate": "2024-01-20",
  "checkOutDate": "2024-01-23",
  "numberOfGuests": 2,
  "totalPrice": 5322,
  "specialRequests": "Early check-in if possible"
}
```
**Response**:
```json
{
  "success": true,
  "bookingId": "507f1f77bcf86cd799439011",
  "message": "Booking request submitted successfully. We'll contact you shortly.",
  "booking": {
    "id": "507f1f77bcf86cd799439011",
    "guestName": "John Doe",
    "checkInDate": "2024-01-20",
    "checkOutDate": "2024-01-23",
    "totalPrice": 5322,
    "status": "pending"
  }
}
```

### 4. Get Booking by ID
**Endpoint**: `GET /api/bookings/:id`
**Description**: Retrieve booking details
**Response**:
```json
{
  "id": "507f1f77bcf86cd799439011",
  "roomName": "Deluxe Room",
  "guestName": "John Doe",
  "guestEmail": "john@example.com",
  "guestPhone": "+91 98765 43210",
  "checkInDate": "2024-01-20",
  "checkOutDate": "2024-01-23",
  "numberOfGuests": 2,
  "totalPrice": 5322,
  "status": "pending",
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### 5. Get All Bookings (Admin)
**Endpoint**: `GET /api/bookings`
**Description**: Fetch all bookings (for admin dashboard)
**Query Parameters**: 
- `status`: filter by status (pending, confirmed, cancelled)
- `date`: filter by date
**Response**:
```json
{
  "bookings": [...],
  "total": 50
}
```

### 6. Update Booking Status (Admin)
**Endpoint**: `PATCH /api/bookings/:id/status`
**Description**: Update booking status
**Request Body**:
```json
{
  "status": "confirmed" // or "cancelled"
}
```

### 7. Get Reviews
**Endpoint**: `GET /api/reviews`
**Description**: Fetch approved reviews
**Response**:
```json
[
  {
    "id": "1",
    "name": "Rajesh Kumar",
    "rating": 5,
    "comment": "Excellent stay!",
    "date": "2024-01-15"
  }
]
```

## Frontend Integration Changes

### Files to Update:

1. **`/app/frontend/src/components/BookingForm.jsx`**
   - Replace mock submission with actual API call to `POST /api/bookings`
   - Add proper error handling
   - Show real booking confirmation with booking ID

2. **`/app/frontend/src/components/Rooms.jsx`**
   - Fetch rooms from `GET /api/rooms` instead of mock data
   - Add availability check before booking

3. **`/app/frontend/src/data/mock.js`**
   - Keep as fallback data during development
   - Remove after successful backend integration

## Implementation Steps

### Phase 1: Backend Setup
1. Create MongoDB models for `bookings`, `rooms`, `reviews`
2. Implement API endpoints in FastAPI
3. Add validation using Pydantic models
4. Add error handling and logging

### Phase 2: Data Migration
1. Seed initial room data from mock.js to MongoDB
2. Seed initial reviews data

### Phase 3: Frontend Integration
1. Create API service file (`/app/frontend/src/services/api.js`)
2. Update BookingForm component to use real API
3. Update Rooms component to fetch from API
4. Add loading states and error handling
5. Add success/error toasts

### Phase 4: Testing
1. Test booking flow end-to-end
2. Test date conflict scenarios
3. Test form validation
4. Test mobile responsiveness

## Environment Variables Needed

### Backend (.env)
```
MONGO_URL=<already configured>
DB_NAME=hotel_jpfarm
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=<already configured>
```

## Error Handling

### Common Error Scenarios:
1. Room not available for selected dates → Show available alternatives
2. Invalid email/phone format → Show validation error
3. Database connection error → Show user-friendly message
4. Booking conflict → Prevent double booking

## Security Considerations
1. Input validation on both frontend and backend
2. Rate limiting on booking endpoints
3. Email verification for booking confirmation
4. Phone number format validation

## Future Enhancements
1. Email notifications for booking confirmations
2. SMS notifications
3. Payment gateway integration
4. Admin dashboard for managing bookings
5. Calendar view for room availability
6. Customer reviews submission
