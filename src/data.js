// ✏️ Edit everything here. No backend needed.

export const graduate = {
  name: "Lorine Namisi",
  firstName: "Lorine",
  degree: "Bachelor of Education (Science)",
  university: "Tharaka University",
  location: "Tharaka Nithi County, Kenya",
};

export const event = {
  // Kenya time (EAT, UTC+3). Change the time here if it changes.
  dateISO: "2026-11-25T10:00:00+03:00",
  displayDate: "Wednesday, 25th November 2026",
  displayTime: "10:00 AM",
  venue: "Tharaka University Main Campus",
  mapQuery: "Tharaka University, Tharaka Nithi, Kenya",
};

export const contact = {
  whatsapp: "254706919481", // 0706919481 in international format
  display: "0706 919 481",
};

// Gift boxes: each one opens with a congratulations splash and the number.
export const gifts = [
  { id: 1, title: "Gift of Love", emoji: "💜", number: "0706919481", colors: "from-fuchsia-400 to-pink-500" },
  { id: 2, title: "Gift of Blessing", emoji: "🙏", number: "0706919481", colors: "from-violet-400 to-fuchsia-500" },
  { id: 3, title: "Gift of Joy", emoji: "🎉", number: "0706919481", colors: "from-pink-400 to-rose-500" },
];

export const welcomeMessage =
  "Welcome to our celebration! Thank you for joining us as Lorine marks one of the proudest days of her life. Your love, prayers and support carried her here, and we are so glad you are part of this moment.";

export const aboutText =
  "Lorine's journey in education and science has been one of dedication, late nights and quiet determination. Today she graduates ready to inspire the next generation of learners. To family, friends, lecturers and classmates: thank you for every prayer, every word of encouragement and every sacrifice.";

export const programme = [
  { time: "8:00 AM", title: "Guest arrival & seating", note: "Please arrive early to find a good seat." },
  { time: "10:00 AM", title: "Graduation ceremony begins", note: "Procession, speeches and conferment of degrees." },
  { time: "12:30 PM", title: "Photo session", note: "Photos with the graduate, family and friends." },
];

export const timeline = [
  { year: "2022", title: "First year", note: "Stepped into Tharaka University with big dreams." },
  { year: "2023", title: "Finding her rhythm", note: "Science and teaching methods came alive." },
  { year: "2025", title: "Teaching practice", note: "Real classrooms, real learners, real impact." },
  { year: "2026", title: "Graduation", note: "Bachelor of Education (Science), complete." },
];

// Put these files in: public/images/
export const heroImage = "/images/hero.jpg";
export const galleryImages = [
  "/images/img1.JPG",
  "/images/img2.JPG",
  "/images/img1.JPG",
  "/images/img2.JPG",
  "/images/img1.JPG",
  "/images/img2.JPG",
];

// Tap a wish on the Wishes page to send it on WhatsApp. Replace with your own.
export const wishes = [
  { from: "Mum & Dad", text: "We are beyond proud of you, Lorine. God has been faithful!" },
  { from: "Your siblings", text: "From books to the stage. You made it, and you inspire us." },
  { from: "Classmates", text: "Teacher Lorine! The future classrooms are lucky to have you." },
  { from: "Friends", text: "Congratulations, you did it! Time to celebrate!" },
];

// "0706919481" -> "254706919481"
export const toIntl = (n) => "254" + n.replace(/\D/g, "").replace(/^0/, "");
