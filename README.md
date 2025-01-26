## 4Hotels - Hotel Management App

### Project Overview
This project aims to design and implement a fully functional **Hotel Management App** using Angular and Firebase. The app allows users to book rooms, manage reservations, and handle customer feedback. Firebase is used for authentication and as the database.

---

### Functional Requirements

#### 1. Authentication
- User authentication implemented using **Firebase Authentication**.
- Features include:
  - Login
  - Registration
  - Forgot Password
  - Logout
- Role-based access control for:
  - Admin
  - Staff
  - Guest

#### 2. Room Booking System
- Display a list of available rooms with details such as:
  - Type
  - Price
  - Capacity
  - Amenities
- Features include:
  - Filtering and searching for rooms based on type, price, or capacity.
  - Room booking functionality.
  - Viewing booking details.

#### 3. Admin Panel
Admins can:
- Perform CRUD operations on room details using Firebase Firestore.
- Manage bookings and customer details.
- View reports and booking statistics.

#### 4. Customer Feedback
- Users can leave feedback or reviews for their stay.
- Display customer feedback for specific rooms in a public section.

#### 5. Payment Integration (Optional for Extra Credit)
- Dummy payment flow for booking confirmation using:
  - A third-party API
  - Simulated payment method

#### 6. Responsive Design
- The application is responsive and optimized for both desktop and mobile devices.

---

### Technical Requirements

#### Frontend
- **Angular 18** or later is used for the frontend.
- The application structure includes:
  - **Standalone components**
  - No lazy loading

#### Backend
- **Firebase** is used for:
  - Authentication
  - Firestore database

---

### Project Setup

#### Prerequisites
- Install [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- Install Angular CLI:
  ```bash
  npm install -g @angular/cli
  ```

#### Clone the Repository
```bash
git clone https://github.com/MalindiFrank/4hotels.git
cd 4hotels
```

#### Install Dependencies
```bash
npm install
```

#### Set Up Firebase
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Firebase Authentication and Firestore Database.
3. Add your Firebase configuration to the Angular project:
   - Replace the placeholder in `environment.ts`:
     ```typescript
     export const environment = {
       firebase: {
         apiKey: "<YOUR_API_KEY>",
         authDomain: "<YOUR_AUTH_DOMAIN>",
         projectId: "<YOUR_PROJECT_ID>",
         storageBucket: "<YOUR_STORAGE_BUCKET>",
         messagingSenderId: "<YOUR_MESSAGING_SENDER_ID>",
         appId: "<YOUR_APP_ID>"
       },
       production: false
     };
     ```

#### Run the Application
```bash
ng serve
```
- The application will be available at `http://localhost:4200/`.

---

### Features
#### User Roles
- **Admin:** Full access to all features, including room management and viewing reports.
- **Staff:** Limited access to managing bookings and customer details.
- **Guest:** Access to booking rooms and viewing feedback.

#### Room Booking
- Interactive room listing with filters for price, type, and capacity.
- Seamless booking process with a confirmation screen.

#### Customer Feedback
- Easy-to-use feedback form.
- Public display of reviews for specific rooms.

#### Admin Dashboard
- Intuitive dashboard for managing rooms, bookings, and customer data.
- Real-time reports and booking statistics.

#### Responsive Design
- Optimized UI/UX for both desktop and mobile devices.

---

### Folder Structure
```
src/
|-- app/
    |-- auth/            // Firebase auth utility services
    |-- components/      // Angular standalone components
    |-- db/              // Firebase database utility services
    |-- models/          // TypeScript models (interface)
    |-- pages/           // Angular page components 
    |-- shared/          // Shared utility modules and functions
|-- environments/        // Environment configurations
```

---

### Future Enhancements
- Implement advanced filtering options (e.g., by date).
- Add multi-language support.
- Enhance payment integration with real-world APIs.

---

### License
This project is licensed under the MIT License.

---
