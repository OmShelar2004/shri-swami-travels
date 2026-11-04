// Translations for multilingual support
export type Language = "en" | "hi" | "mr";

export interface Translations {
  common: {
    explorePackage: string;
    continueJourney: string;
    chooseDestination: string;
    previousDestination: string;
    nextDestination: string;
    packageCategories: string;
    all: string;
    viewDetails: string;
    enquire: string;
    resetFilter: string;
    showingPackages: (count: number, category?: string) => string;
  };
  topStrip: { message: string; callLabel: string };
  nav: {
    tours: string;
    destinations: string;
    fleet: string;
    about: string;
    contact: string;
    enquireNow: string;
    quickAssistance: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
    exploreBtn: string;
    contactBtn: string;
    callBtn: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    exploreLink: string;
    items: {
      tours: { title: string; desc: string };
      fleet: { title: string; desc: string };
      pilgrimage: { title: string; desc: string };
      sightseeing: { title: string; desc: string };
    };
  };
  destinations: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    viewTour: string;
    detailsOnRequest: string;
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      fleet: { title: string; desc: string };
      family: { title: string; desc: string };
      drivers: { title: string; desc: string };
      pricing: { title: string; desc: string };
    };
  };
  howBookingWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
      step4: { title: string; desc: string };
    };
  };
  contactCta: {
    badge: string;
    title: string;
    subtitle: string;
    callBtn: string;
    contactBtn: string;
    whatsappBtn: string;
  };
  enquiryForm: {
    title: string;
    subtitle: string;
    lookingFor: string;
    tourPkg: string;
    vehicleRental: string;
    generalTrip: string;
    selectPkg: string;
    choosePkgPlaceholder: string;
    selectVehicle: string;
    chooseVehiclePlaceholder: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    travelDate: string;
    travelDatePlaceholder: string;
    travellers: string;
    travellersPlaceholder: string;
    pickupNotes: string;
    pickupNotesPlaceholder: string;
    submitBtn: string;
    whatsappBtn: string;
    privacyNote: string;
    successTitle: string;
    successMsg: string;
    callTeam: string;
    submitAnother: string;
    submitAgain: string;
  };
  footer: {
    aboutText: string;
    explore: string;
    policies: string;
    contactTeam: string;
    directBooking: string;
    viewContact: string;
    copyright: string;
    tourPackages: string;
    destinations: string;
    vehicleFleet: string;
    aboutUs: string;
    faq: string;
    terms: string;
    privacy: string;
    cancellation: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    copy: string;
  };
  about: {
    eyebrow: string;
    title: string;
    copy: string;
    story: string;
    services: string;
    directCoordination: string;
    directCoordinationLabel: string;
    pillars: { title: string; desc: string }[];
  };
  whoWeAre: string;
  whyTravel: string;
  contactBannerTitle: string;
  contactBannerCopy: string;
}

// Base English translations
const en: Translations = {
  common: {
    explorePackage: "Explore package",
    continueJourney: "Continue the journey",
    chooseDestination: "Choose destination",
    previousDestination: "Previous destination",
    nextDestination: "Next destination",
    packageCategories: "Package categories",
    all: "All",
    viewDetails: "View details",
    enquire: "Enquire",
    resetFilter: "Reset filter",
    showingPackages: (count, category) => `Showing ${count} package${count === 1 ? "" : "s"}${category ? ` for “${category}”` : ""}`,
  },
  topStrip: { message: "Shri Swami Travels • Domestic Tours, Pilgrimages, Sightseeing & Vehicle Rentals", callLabel: "Call:" },
  nav: { tours: "Tours", destinations: "Destinations", fleet: "Fleet", about: "About", contact: "Contact", enquireNow: "Enquire Now", quickAssistance: "Quick Assistance" },
  hero: { eyebrow: "Shri Swami Travels", title: "Comfortable, Memorable Journeys Across India", highlight: "Shri Swami Travels", subtitle: "Domestic tour packages, revered pilgrimages, daily sightseeing, and sanitized vehicle rentals planned with care, comfort, and direct personal coordination.", exploreBtn: "Explore Packages", contactBtn: "Contact Us", callBtn: "Call Now" },
  services: {
    eyebrow: "What We Offer",
    title: "Our Travel Services",
    subtitle: "Comprehensive travel solutions tailored for families, religious devotee groups, and holidaymakers.",
    exploreLink: "Explore →",
    items: {
      tours: { title: "Tour Packages", desc: "Handpicked holidays to India’s popular hill stations, valleys, and coastlines." },
      fleet: { title: "Vehicle Rentals", desc: "Well‑maintained Innova Crysta, Tempo Travellers, and luxury coaches for all groups." },
      pilgrimage: { title: "Pilgrimage Tours", desc: "Ashtavinayak circuit, Tirupati Balaji, and other sacred journeys." },
      sightseeing: { title: "Daily Sightseeing", desc: "Mumbai & surrounding attractions for quick getaways." },
    },
  },
  destinations: {
    eyebrow: "Destinations",
    title: "Explore Our Hand‑Picked Spots",
    subtitle: "From the Himalayas to the Konkan coast, curated for comfort and wonder.",
    viewAll: "View All Destinations",
    viewTour: "View Tour",
    detailsOnRequest: "Details on request",
  },
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Your Trusted Travel Partner",
    subtitle: "Experience, safety, and personalized service set us apart.",
    items: {
      fleet: { title: "Certified Fleet", desc: "Regularly sanitised, insured, and driver‑trained vehicles." },
      family: { title: "Family Friendly", desc: "Comfortable pacing, child seats, and senior care." },
      drivers: { title: "Experienced Drivers", desc: "Local knowledge, multilingual, and courteous." },
      pricing: { title: "Transparent Pricing", desc: "No hidden fees, clear quotations, inclusive of taxes." },
    },
  },
  howBookingWorks: {
    eyebrow: "How Booking Works",
    title: "Simple 4‑Step Process",
    subtitle: "Choose, customise, receive quote, confirm.",
    steps: {
      step1: { title: "Choose Destination", desc: "Select a package or vehicle." },
      step2: { title: "Submit Requirements", desc: "Tell us dates, group size, special needs." },
      step3: { title: "Receive Quotation", desc: "Clear, itemised cost breakdown." },
      step4: { title: "Confirm Booking", desc: "Pay a small deposit and lock your travel dates." },
    },
  },
  contactCta: {
    badge: "Ready to Travel?",
    title: "Plan Your Journey with Us",
    subtitle: "Get a free, no‑obligation quote today.",
    callBtn: "Call Now",
    contactBtn: "Contact Us",
    whatsappBtn: "WhatsApp",
  },
  enquiryForm: {
    title: "Enquiry Form",
    subtitle: "Tell us about your travel plans.",
    lookingFor: "I am looking for",
    tourPkg: "Tour Package",
    vehicleRental: "Vehicle Rental",
    generalTrip: "General Trip",
    selectPkg: "Select Package",
    choosePkgPlaceholder: "Choose a package…",
    selectVehicle: "Select Vehicle",
    chooseVehiclePlaceholder: "Choose a vehicle…",
    fullName: "Full Name",
    fullNamePlaceholder: "Your name",
    phone: "Phone Number",
    phonePlaceholder: "+91‑XXXXXXXXXX",
    travelDate: "Travel Date",
    travelDatePlaceholder: "Select date",
    travellers: "Number of Travellers",
    travellersPlaceholder: "e.g., 4",
    pickupNotes: "Pickup Notes",
    pickupNotesPlaceholder: "Location, special requests, etc.",
    submitBtn: "Submit Enquiry",
    whatsappBtn: "WhatsApp Us",
    privacyNote: "We respect your privacy and will not share your data.",
    successTitle: "Enquiry Sent",
    successMsg: "Our team will contact you within 24 hours.",
    callTeam: "Call Our Team",
    submitAnother: "Submit Another Enquiry",
    submitAgain: "Submit Another Enquiry",


  },
  footer: {
    aboutText: "Explore India with trusted experts.",
    explore: "Explore",
    policies: "Policies",
    contactTeam: "Contact Team",
    directBooking: "Direct Booking",
    viewContact: "View Contact",
    copyright: "© 2024 Shri Swami Travels. All rights reserved.",
    tourPackages: "Tour Packages",
    destinations: "Destinations",
    vehicleFleet: "Vehicle Fleet",
    aboutUs: "About Us",
    faq: "FAQ",
    terms: "Terms",
    privacy: "Privacy",
    cancellation: "Cancellation",
  },
  booking: {
    eyebrow: "Travel Enquiry & Booking",
    title: "Plan Your Next Trip With Us",
    copy: "Tell us where you would like to go. Our travel team will confirm the best route, vehicle availability, and personalized quotation.",
  },
  about: {
    eyebrow: "About Shri Swami Travels",
    title: "Thoughtful Journeys, Trusted Travel",
    copy: "Serving families, religious groups, and holidaymakers across Maharashtra with personalized domestic tour packages and reliable vehicle rentals.",
    story: "At Shri Swami Travels, we believe every good journey begins before you even leave home. From your very first phone call, our priority is providing clear answers, dependable vehicles, and thoughtful recommendations suited to your group.",
    services: "Based in Maharashtra, we specialize in Domestic Tour Packages (Mahabaleshwar, Goa, Manali, Kashmir, Kerala), revered Pilgrimage Tours (such as the complete Ashtvinayak Darshan circuit and Tirupati Balaji), convenient Daily Sightseeing in and around Mumbai, and Bus & Tempo Traveller Rentals for weddings, school outings, and corporate retreats.",
    directCoordinationLabel: "Direct Personal Coordination:",
    directCoordination: "We take pride in personal service. You speak directly with our experienced travel coordinators who ensure your pickup timing, hotel halts, and route choices are meticulously verified.",
    pillars: [
      { title: "Reliability & Safety First", desc: "Well‑maintained vehicles, experienced professional drivers, and thorough trip coordination for total peace of mind." },
      { title: "Family & Senior Pacing", desc: "We understand multi‑generation families. Our itineraries avoid rushed schedules and ensure comfortable rest stops." },
      { title: "Diverse Fleet Options", desc: "From private Innova Crysta for 4‑6 guests to 49‑seater tourist buses for large corporate or pilgrim groups." },
      { title: "Tailored Travel Guidance", desc: "Transparent quotations with no hidden surprises. We help you choose the best route and dates for your journey." },
    ],
  },
  whoWeAre: "Who We Are",
  whyTravel: "Why Travel With Us?",
  contactBannerTitle: "Have Questions About Planning a Trip?",
  contactBannerCopy: "Call our team directly for suggestions and personalized advice.",
};

// Hindi translations (override needed fields)
const hi: Translations = {
  ...en,
  common: {
    explorePackage: "पैकेज देखें",
    continueJourney: "यात्रा जारी रखें",
    chooseDestination: "गंतव्य चुनें",
    previousDestination: "पिछला गंतव्य",
    nextDestination: "अगला गंतव्य",
    packageCategories: "पैकेज श्रेणियाँ",
    all: "सभी",
    viewDetails: "विवरण देखें",
    enquire: "पूछताछ करें",
    resetFilter: "फ़िल्टर हटाएँ",
    showingPackages: (count, category) => `${count} पैकेज दिखाए जा रहे हैं${category ? `: ${category}` : ""}`,
  },
  topStrip: { message: "श्री स्वामी ट्रैवल्स • घरेलू टूर, तीर्थस्थल यात्राएँ, साइटसीइंग & व्हेहिकल रेंटल्स", callLabel: "कॉल:" },
  nav: { tours: "टूर्स", destinations: "गंतव्य", fleet: "वाहनों का बेड़ा", about: "हमारे बारे में", contact: "संपर्क करें", enquireNow: "अभी पूछताछ करें", quickAssistance: "त्वरित सहायता" },
  hero: { eyebrow: "श्री स्वामी ट्रैवल्स", title: "भारत में आरामदायक, यादगार यात्राएँ", highlight: "श्री स्वामी ट्रैवल्स", subtitle: "घरेलू टूर पैकेज, पवित्र तीर्थयात्रा, दैनिक साइटसीइंग, और स्वच्छ वाहन किराया, देखभाल और व्यक्तिगत समन्वय के साथ।", exploreBtn: "पैकेज देखें", contactBtn: "संपर्क करें", callBtn: "कॉल करें" },
  booking: { eyebrow: "यात्रा पूछताछ और बुकिंग", title: "हमारे साथ अपनी अगली यात्रा की योजना बनाएँ", copy: "बताइए आप कहाँ जाना चाहते हैं। हमारी टीम सबसे अच्छा मार्ग, वाहन की उपलब्धता और व्यक्तिगत कोटेशन की पुष्टि करेगी।" },
  footer: { aboutText: "विश्वसनीय यात्रा विशेषज्ञों के साथ भारत घूमें।", explore: "देखें", policies: "नीतियाँ", contactTeam: "टीम से संपर्क करें", directBooking: "सीधी बुकिंग", viewContact: "संपर्क विवरण देखें", copyright: "© 2026 श्री स्वामी ट्रैवल्स। सर्वाधिकार सुरक्षित।", tourPackages: "टूर पैकेज", destinations: "गंतव्य", vehicleFleet: "वाहनों का बेड़ा", aboutUs: "हमारे बारे में", faq: "अक्सर पूछे जाने वाले सवाल", terms: "नियम और शर्तें", privacy: "गोपनीयता नीति", cancellation: "रद्द करने की नीति" },
  about: { eyebrow: "श्री स्वामी ट्रैव्हल्स के बारे में", title: "सोच-समझकर बनाई गई यात्राएँ, भरोसेमंद सफ़र", copy: "महाराष्ट्र भर में परिवारों, धार्मिक समूहों और छुट्टियाँ मनाने वाले यात्रियों के लिए व्यक्तिगत घरेलू टूर पैकेज और भरोसेमंद वाहन किराये की सुविधा।", story: "श्री स्वामी ट्रॅव्हल्स में हमारा मानना है कि हर अच्छी यात्रा घर से निकलने से पहले ही शुरू हो जाती है। आपकी पहली फोन कॉल से ही हमारी प्राथमिकता है—आपके सवालों के स्पष्ट जवाब देना, भरोसेमंद वाहन उपलब्ध कराना और आपके समूह की ज़रूरतों के अनुसार सही सुझाव देना।", services: "महाराष्ट्र में स्थित, हम घरेलू टूर पैकेज (महाबलेश्वर, गोवा, मनाली, कश्मीर, केरल), प्रसिद्ध तीर्थयात्राएँ (जैसे संपूर्ण अष्टविनायक दर्शन यात्रा और तिरुपति बालाजी), मुंबई और आसपास की दैनिक दर्शनीय यात्राएँ तथा शादियों, स्कूल पिकनिक और कॉर्पोरेट यात्राओं के लिए बस और टेम्पो ट्रैवलर किराये की सेवाएँ प्रदान करते हैं।", directCoordinationLabel: "व्यक्तिगत समन्वय:", directCoordination: "हमें व्यक्तिगत सेवा देने पर गर्व है। आप सीधे हमारे अनुभवी यात्रा समन्वयकों से बात करते हैं, जो आपके पिकअप का समय, होटल में ठहराव और यात्रा मार्ग की पूरी सावधानी से पुष्टि करते हैं।", pillars: [
    { title: "विश्वसनीयता और सुरक्षा सबसे पहले", desc: "बेहतर रखरखाव वाले वाहन, अनुभवी पेशेवर ड्राइवर और यात्रा का सुव्यवस्थित समन्वय—ताकि आप निश्चिंत होकर सफ़र करें।" },
    { title: "परिवार और वरिष्ठ नागरिकों की सुविधा", desc: "हम कई पीढ़ियों वाले परिवारों की ज़रूरतों को समझते हैं। हमारे यात्रा कार्यक्रम जल्दबाज़ी से बचते हैं और आरामदायक विश्राम स्थलों का ध्यान रखते हैं।" },
    { title: "विभिन्न प्रकार के वाहनों के विकल्प", desc: "4–6 यात्रियों के लिए निजी इनोव्हा क्रिस्टा से लेकर बड़े कॉर्पोरेट या तीर्थयात्री समूहों के लिए 49-सीटर टूरिस्ट बस तक।" },
    { title: "आपकी ज़रूरत के अनुसार यात्रा मार्गदर्शन", desc: "बिना किसी छिपे हुए शुल्क के स्पष्ट कोटेशन। हम आपकी यात्रा के लिए सबसे अच्छा मार्ग और तारीखें चुनने में मदद करते हैं।" },
  ] },
  whoWeAre: "हम कौन हैं",
  whyTravel: "हमसे क्यों यात्रा करें?",
  contactBannerTitle: "यात्रा योजना में प्रश्न हैं?",
  contactBannerCopy: "व्यक्तिगत सलाह के लिए हमारी टीम को कॉल करें।",
};

// Marathi translations (override needed fields)
const mr: Translations = {
  ...en,
  common: {
    explorePackage: "पॅकेज पहा",
    continueJourney: "प्रवास सुरू ठेवा",
    chooseDestination: "स्थळ निवडा",
    previousDestination: "मागील स्थळ",
    nextDestination: "पुढील स्थळ",
    packageCategories: "पॅकेज श्रेणी",
    all: "सर्व",
    viewDetails: "तपशील पहा",
    enquire: "चौकशी करा",
    resetFilter: "फिल्टर रीसेट करा",
    showingPackages: (count, category) => `${count} पॅकेज दिसत आहेत${category ? `: ${category}` : ""}`,
  },
  topStrip: { message: "श्री स्वामी ट्रॅव्हल्स • डोमेस्टिक टूर, पिलग्रिमेज, साइटसीइंग & व्हेइकल रेंटल्स", callLabel: "कॉल:" },
  nav: { tours: "टूर्स", destinations: "पर्यटनस्थळे", fleet: "वाहनांचा ताफा", about: "आमच्याबद्दल", contact: "संपर्क", enquireNow: "आता चौकशी करा", quickAssistance: "त्वरित मदत" },
  hero: { eyebrow: "श्री स्वामी ट्रॅव्हल्स", title: "भारतभर आरामदायक, संस्मरणीय प्रवास", highlight: "श्री स्वामी ट्रॅव्हल्स", subtitle: "डोमेस्टिक टूर पॅकेज, पवित्र पिलग्रिमेज, दैनंदिन साइटसीइंग, स्वच्छ व्हेइकल रेंटल्स, काळजी, आराम व थेट समन्वय.", exploreBtn: "पॅकेज पहा", contactBtn: "संपर्क साधा", callBtn: "आता कॉल करा" },
  booking: { eyebrow: "प्रवास चौकशी आणि बुकिंग", title: "आमच्यासोबत तुमच्या पुढील प्रवासाचे नियोजन करा", copy: "तुम्हाला कुठे जायचे आहे ते सांगा. आमची टीम योग्य मार्ग, वाहन उपलब्धता आणि वैयक्तिक कोटेशनची पुष्टी करेल." },
  footer: { aboutText: "विश्वासार्ह प्रवास तज्ज्ञांसोबत भारत फिरा.", explore: "पहा", policies: "धोरणे", contactTeam: "टीमशी संपर्क साधा", directBooking: "थेट बुकिंग", viewContact: "संपर्क तपशील पाहा", copyright: "© 2026 श्री स्वामी ट्रॅव्हल्स. सर्व हक्क राखीव.", tourPackages: "टूर पॅकेजेस", destinations: "पर्यटनस्थळे", vehicleFleet: "वाहनांचा ताफा", aboutUs: "आमच्याबद्दल", faq: "वारंवार विचारले जाणारे प्रश्न", terms: "अटी व शर्ती", privacy: "गोपनीयता धोरण", cancellation: "रद्द करण्याचे धोरण" },
  about: { eyebrow: "श्री स्वामी ट्रॅव्हल्सबद्दल", title: "विचारपूर्वक आखलेले प्रवास, विश्वासार्ह साथ", copy: "महाराष्ट्रभरातील कुटुंबे, धार्मिक गट आणि सुट्टीसाठी प्रवास करणाऱ्यांसाठी वैयक्तिक गरजांनुसार देशांतर्गत टूर पॅकेजेस आणि विश्वासार्ह वाहन भाड्याने देण्याची सेवा.", story: "श्री स्वामी ट्रॅव्हल्समध्ये आमचा विश्वास आहे की प्रत्येक चांगल्या प्रवासाची सुरुवात घरातून निघण्यापूर्वीच होते. तुमच्या पहिल्या फोन कॉलपासूनच स्पष्ट उत्तरे देणे, विश्वासार्ह वाहने उपलब्ध करून देणे आणि तुमच्या गटाच्या गरजांनुसार योग्य सूचना देणे हे आमचे प्राधान्य असते.", services: "महाराष्ट्रात कार्यरत असलेले आम्ही देशांतर्गत टूर पॅकेजेस (महाबळेश्वर, गोवा, मनाली, काश्मीर, केरळ), श्रद्धास्थळांच्या यात्रा (उदा. संपूर्ण अष्टविनायक दर्शन आणि तिरुपती बालाजी), मुंबई व परिसरातील दैनंदिन पर्यटनदर्शन तसेच लग्नसमारंभ, शालेय सहली आणि कॉर्पोरेट सहलींसाठी बस व टेम्पो ट्रॅव्हलर भाड्याने देण्याच्या सेवांमध्ये विशेष काम करतो.", directCoordinationLabel: "वैयक्तिक समन्वय:", directCoordination: "वैयक्तिक सेवा देण्याचा आम्हाला अभिमान आहे. तुम्ही आमच्या अनुभवी प्रवास समन्वयकांशी थेट बोलू शकता. ते तुमची पिकअपची वेळ, हॉटेलमधील मुक्काम आणि प्रवासाचे मार्ग काळजीपूर्वक तपासून निश्चित करतात.", pillars: [
    { title: "विश्वासार्हता आणि सुरक्षिततेला प्राधान्य", desc: "सुस्थितीत ठेवलेली वाहने, अनुभवी व्यावसायिक चालक आणि प्रवासाचे बारकाईने नियोजन—तुमचा प्रवास निश्चिंत होण्यासाठी." },
    { title: "कुटुंब आणि ज्येष्ठ नागरिकांच्या सोयीचा विचार", desc: "एकाच कुटुंबातील वेगवेगळ्या वयोगटांच्या गरजा आम्हाला समजतात. आमच्या प्रवास नियोजनात घाईगडबड टाळली जाते आणि आरामदायी विश्रांतीच्या थांब्यांची काळजी घेतली जाते." },
    { title: "विविध प्रकारच्या वाहनांचे पर्याय", desc: "४–६ प्रवाशांसाठी खासगी इनोव्हा क्रिस्टापासून मोठ्या कॉर्पोरेट किंवा यात्रेकरूंच्या गटांसाठी ४९ आसनी पर्यटक बसपर्यंत विविध पर्याय." },
    { title: "तुमच्या गरजेनुसार प्रवास मार्गदर्शन", desc: "कोणतेही लपवलेले शुल्क नसलेले स्पष्ट दरपत्रक. तुमच्या प्रवासासाठी योग्य मार्ग आणि तारखा निवडण्यात आम्ही मदत करतो." },
  ] },
  whoWeAre: "आम्ही कोण",
  whyTravel: "आमच्यासोबत का प्रवास करावा",
  contactBannerTitle: "प्रवास नियोजनाबाबत प्रश्न आहेत?",
  contactBannerCopy: "वैयक्तिक सल्ल्यासाठी आमच्या टीमला कॉल करा.",
};

export const translations: Record<Language, Translations> = { en, hi, mr };
