// Update 10-26-26: Announcements shown on the /announcements page.
// Add a new entry at the top of the list to post an announcement. Example:
//
//   {
//     date: "2026-11-01",
//     titleEn: "Thanksgiving Service",
//     titleFr: "Culte d'action de grâce",
//     bodyEn: "Join us for a special service after Sunday worship.",
//     bodyFr: "Rejoignez-nous pour un culte spécial après le culte du dimanche.",
//   },
//
// While the list is empty, the page tells visitors to follow the church on Facebook.

export type Announcement = {
  date: string; // YYYY-MM-DD
  titleEn: string;
  titleFr: string;
  bodyEn: string;
  bodyFr: string;
};

export const announcements: Announcement[] = [];
