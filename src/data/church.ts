// Update 10-26-26: Church details kept in one place so the Home, About,
// Contact pages and the Footer always show the same information.

export const church = {
  name: "Bible Baptist Church - Paris",
  fullName: "Bible Baptist Church - Paris Mission",
  street: "13 Rue des Fontaines du Temple",
  city: "75003 Paris",
  country: "France",

  // Update 10-26-26: direct Google Maps link (the old one went through a Facebook redirect)
  mapUrl: "https://maps.app.goo.gl/d7on3jS7jQLSFYaH6",
  mapEmbedUrl:
    "https://www.google.com/maps?q=13+Rue+des+Fontaines+du+Temple,+75003+Paris&output=embed",

  facebookUrl: "https://www.facebook.com/profile.php?id=61553990219196",

  // Update 10-26-26: put the church email address here, e.g. "contact@example.com".
  // The old link opened a Gmail draft in the owner's inbox, which visitors cannot use.
  // While this is empty, email links are hidden and visitors are pointed to Facebook.
  email: "",
};

// Update 10-26-26: service times used on Home, About, Contact and the Footer
export const services = [
  {
    icon: "book",
    en: "Sunday School",
    fr: "École du dimanche",
    timeEn: "Sundays · 1:00 PM",
    timeFr: "Dimanche · 13h00",
    noteEn: "Bible study before the worship service.",
    noteFr: "Étude de la Bible avant le culte.",
  },
  {
    icon: "cross",
    en: "Sunday Service",
    fr: "Culte du dimanche",
    timeEn: "Sundays · 2:00 PM",
    timeFr: "Dimanche · 14h00",
    noteEn: "Worship, prayer and preaching from God's Word.",
    noteFr: "Louange, prière et prédication de la Parole de Dieu.",
  },
  {
    icon: "video",
    en: "Friday Bible Study",
    fr: "Étude biblique du vendredi",
    timeEn: "Fridays · 9:00 PM · Online",
    timeFr: "Vendredi · 21h00 · En ligne",
    noteEn: "Join us online from wherever you are.",
    noteFr: "Rejoignez-nous en ligne, où que vous soyez.",
  },
];
