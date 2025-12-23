export const hotelData = {
  name: "Hotel J P Farm",
  type: "Resort Hotel",
  rating: 4.1,
  reviewCount: 543,
  address: "Near, Infront of Gwalior Road Police Chowki, Polytechnic, Jhansi, Uttar Pradesh 284003",
  plusCode: "FHF6+FC Jhansi, Uttar Pradesh",
  phone: "075259 34333",
  phoneFormatted: "+917525934333", // Formatted for tel: links
  whatsapp: "917525934333", // Without + for WhatsApp
  checkIn: "12:00 PM",
  checkOut: "12:00 PM",
  images: {
    resort: "https://customer-assets.emergentagent.com/job_jpfarmhotel/artifacts/giefvdoy_resort.webp",
    room: "https://customer-assets.emergentagent.com/job_jpfarmhotel/artifacts/6sko7oyj_room.webp"
  }
};

export const rooms = [
  {
    id: "1",
    name: "Deluxe Room",
    type: "Double Bed",
    price: 1774,
    maxGuests: 2,
    amenities: ["Free Wi-Fi", "AC", "TV", "Room Service"],
    image: hotelData.images.room,
    available: true
  },
  {
    id: "2",
    name: "Executive Suite",
    type: "King Bed + Sitting Area",
    price: 2500,
    maxGuests: 3,
    amenities: ["Free Wi-Fi", "AC", "TV", "Mini Bar", "Room Service"],
    image: hotelData.images.room,
    available: true
  },
  {
    id: "3",
    name: "Family Room",
    type: "Two Double Beds",
    price: 3200,
    maxGuests: 4,
    amenities: ["Free Wi-Fi", "AC", "TV", "Kitchen", "Room Service"],
    image: hotelData.images.room,
    available: true
  }
];

export const amenities = [
  { name: "Free Wi-Fi", icon: "Wifi" },
  { name: "Free Parking", icon: "ParkingCircle" },
  { name: "Swimming Pool", icon: "Waves" },
  { name: "Restaurant", icon: "UtensilsCrossed" },
  { name: "Room Service", icon: "BellRing" },
  { name: "Laundry Service", icon: "Shirt" },
  { name: "Fitness Centre", icon: "Dumbbell" },
  { name: "Kitchen", icon: "ChefHat" }
];

export const galleryCategories = [
  {
    name: "Rooms",
    images: [
      hotelData.images.room,
      "https://customer-assets.emergentagent.com/job_jpfarmhotel/artifacts/46eavj2s_nnn.jfif",
      "https://customer-assets.emergentagent.com/job_jpfarmhotel/artifacts/j6bwdjqg_hhh.jfif"
    ]
  },
  {
    name: "Exterior",
    images: [
      hotelData.images.resort,
      "https://customer-assets.emergentagent.com/job_jpfarmhotel/artifacts/fgdwkjf8_hh.jfif"
    ]
  },
  {
    name: "Amenities",
    images: [hotelData.images.resort, hotelData.images.room]
  },
  {
    name: "Food & Drinks",
    images: [
      "https://customer-assets.emergentagent.com/job_jpfarmhotel/artifacts/46eavj2s_nnn.jfif",
      "https://customer-assets.emergentagent.com/job_jpfarmhotel/artifacts/j6bwdjqg_hhh.jfif"
    ]
  }
];

export const reviews = [
  {
    id: "1",
    name: "Rajesh Kumar",
    rating: 5,
    date: "2024-01-15",
    comment: "Excellent stay! Beautiful resort with amazing hospitality. Perfect for family vacation."
  },
  {
    id: "2",
    name: "Priya Sharma",
    rating: 4,
    date: "2024-01-10",
    comment: "Great location and very peaceful environment. Rooms are spacious and clean."
  },
  {
    id: "3",
    name: "Amit Verma",
    rating: 4,
    date: "2024-01-05",
    comment: "Had our wedding here. Staff was very cooperative and food was delicious!"
  }
];

export const bookingPlatforms = [
  { name: "MakeMyTrip", available: true },
  { name: "Goibibo", available: true },
  { name: "Cleartrip", available: true }
];