var admin = require("firebase-admin");
var serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hotels-e71cd-default-rtdb.europe-west1.firebasedatabase.app"
});

// References to Firebase services
const db = admin.database();
// const bucket = admin.storage().bucket();
const bucket = admin.storage().bucket("hotels-e71cd.appspot.com"); // Replace with your actual bucket name


// Mock Data
const mockData = {
  users: [
    { email: "guest1@example.com", role: "guest", phone: 1234567890,name: "John Doe", bookings: [], feedbacks: [] },
    { email: "guest2@example.com", role: "guest", phone: 1234567890,name: "Jane Smith", bookings: [], feedbacks: [] },
    { email: "guest3@example.com", role: "guest", phone: 1234567890,name: "Tom Brown", bookings: [], feedbacks: [] },
    { email: "guest4@example.com", role: "guest", phone: 1234567890,name: "Emily White", bookings: [], feedbacks: [] },
    { email: "admin1@example.com", role: "admin", phone: 1234567890,name: "Alice Scott", bookings: [], feedbacks: [] },
    { email: "admin2@example.com", role: "admin", phone: 1234567890,name: "David Miller", bookings: [], feedbacks: [] },
    { email: "staff1@example.com", role: "staff", phone: 1234567890,name: "James Davis", bookings: [], feedbacks: [] },
    { email: "staff2@example.com", role: "staff", phone: 1234567890,name: "Chloe Martinez", bookings: [], feedbacks: [] },
  ],
  rooms: [
    { type: "Single", price: 100, capacity: 1, amenities: ["Wi-Fi", "TV", "AC"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Double", price: 150, capacity: 2, amenities: ["Wi-Fi", "TV", "AC", "Mini-fridge"], available: false, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Suite", price: 300, capacity: 3, amenities: ["Wi-Fi", "TV", "AC", "Kitchen"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Single", price: 120, capacity: 1, amenities: ["Wi-Fi", "TV"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Double", price: 180, capacity: 2, amenities: ["Wi-Fi", "TV", "AC", "Mini-fridge"], available: false, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Single", price: 110, capacity: 1, amenities: ["Wi-Fi", "TV", "AC"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Suite", price: 350, capacity: 4, amenities: ["Wi-Fi", "TV", "AC", "Kitchen", "Balcony"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Single", price: 130, capacity: 1, amenities: ["Wi-Fi", "TV"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Double", price: 160, capacity: 2, amenities: ["Wi-Fi", "TV", "AC", "Mini-fridge"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
    { type: "Suite", price: 300, capacity: 3, amenities: ["Wi-Fi", "TV", "AC", "Kitchen"], available: true, imageUrls: { main: "https://via.placeholder.com/150", gallery: [] }, description: "Royal Suite. Deluxe Standard, 2 king beds and 2 twin beds. 6 adults, or 4 adults and 2 children" },
  ],
  bookings: [
    { userId: "", roomId: "", checkInDate: "2025-02-01", checkOutDate: "2025-02-05", status: "confirmed", totalPrice: 5500, },
    { userId: "", roomId: "", checkInDate: "2025-03-01", checkOutDate: "2025-03-07", status: "confirmed", totalPrice: 5500, },
    { userId: "", roomId: "", checkInDate: "2025-04-01", checkOutDate: "2025-04-05", status: "confirmed", totalPrice: 5500, },
    { userId: "", roomId: "", checkInDate: "2025-05-01", checkOutDate: "2025-05-05", status: "confirmed", totalPrice: 5500, },
    { userId: "", roomId: "", checkInDate: "2025-06-01", checkOutDate: "2025-06-07", status: "confirmed", totalPrice: 5500, },
  ],
  feedback: [
    { userId: "", roomId: "", rating: 4, comment: "Great room, but the Wi-Fi could be better.", date: "2025-02-05", timestamp: "2025-03-10" },
    { userId: "", roomId: "", rating: 5, comment: "Amazing stay! The kitchen was very useful.", date: "2025-04-05", timestamp: "2025-03-10" },
    { userId: "", roomId: "", rating: 3, comment: "Good stay, but noisy neighbors.", date: "2025-06-10", timestamp: "2025-03-10" },
    { userId: "", roomId: "", rating: 5, comment: "Perfect! Would stay again.", date: "2025-07-01", timestamp: "2025-03-10" },
    { userId: "", roomId: "", rating: 4, comment: "Very comfortable, but the room could use more lighting.", date: "2025-05-10", timestamp: "2025-03-10" },
  ],
};

// Function to upload data
const uploadMockData = async () => {
  const uploadMockData = async () => {
    try {
      const userIdMap = {};
      const roomIdMap = {};

      // Upload users
      const usersRef = db.ref("users");
      for (const user of mockData.users) {
        const userRef = await usersRef.push(user);
        userIdMap[user.email] = userRef.key; // Map email to Firebase-generated user ID
      }

      // Upload rooms
      const roomsRef = db.ref("rooms");
      for (const room of mockData.rooms) {
        const roomKey = `${room.type}${room.price}`; // Unique key based on type and price
        const roomRef = await roomsRef.push(room);
        roomIdMap[roomKey] = roomRef.key; // Map room key to Firebase-generated room ID
      }

      // Upload bookings
      const bookingsRef = db.ref("bookings");
      for (const booking of mockData.bookings) {
        booking.userId = userIdMap[booking.userId] || userIdMap["guest1@example.com"]; // Replace empty userId with valid one
        booking.roomId = roomIdMap[booking.roomId] || roomIdMap["Single100"]; // Replace empty roomId with valid one
        await bookingsRef.push(booking);
      }

      // Upload feedback
      const feedbackRef = db.ref("feedback");
      for (const feedback of mockData.feedback) {
        feedback.userId = userIdMap[feedback.userId] || userIdMap["guest1@example.com"];
        feedback.roomId = roomIdMap[feedback.roomId] || roomIdMap["Single100"];
        await feedbackRef.push(feedback);
      }

      console.log("Mock data uploaded successfully!");
    } catch (error) {
      console.error("Error uploading mock data:", error);
    }
  };

  uploadMockData();

}
uploadMockData();
