"use client";

import { useEffect } from "react";
import type { Language } from "@/i18n/translations";

type Catalog = Record<string, { hi: string; mr: string }>;

// Text rendered by server components is also translated here, so the language
// switch applies consistently across every route without a page refresh.
const catalog: Catalog = {
  "Explore India": { hi: "भारत घूमें", mr: "भारत एक्सप्लोर करा" },
  "Tour Packages": { hi: "टूर पैकेज", mr: "टूर पॅकेज" },
  "Beautiful destinations across India, planned with a focus on comfort, reliable transport, and clear travel arrangements.": { hi: "भारत भर के सुंदर गंतव्य, आराम, विश्वसनीय परिवहन और स्पष्ट यात्रा व्यवस्था पर ध्यान के साथ नियोजित।", mr: "आराम, विश्वासार्ह वाहतूक आणि स्पष्ट प्रवास व्यवस्थेवर भर देऊन भारतभरातील सुंदर स्थळे नियोजित केली आहेत." },
  "Vehicle Rentals": { hi: "वाहन किराया", mr: "वाहन भाडे" },
  "Well-Maintained Fleet for Every Journey": { hi: "हर यात्रा के लिए सुव्यवस्थित वाहन", mr: "प्रत्येक प्रवासासाठी सुस्थितीत वाहने" },
  "Contact Shri Swami Travels": { hi: "श्री स्वामी ट्रैवल्स से संपर्क करें", mr: "श्री स्वामी ट्रॅव्हल्सशी संपर्क साधा" },
  "We Are Here to Help Plan Your Trip": { hi: "आपकी यात्रा की योजना बनाने में हम आपकी सहायता के लिए हैं", mr: "तुमच्या प्रवासाचे नियोजन करण्यात आम्ही मदतीसाठी आहोत" },
  "Frequently Asked Questions": { hi: "अक्सर पूछे जाने वाले प्रश्न", mr: "वारंवार विचारले जाणारे प्रश्न" },
  "Help & Answers": { hi: "सहायता और उत्तर", mr: "मदत आणि उत्तरे" },
  "About Shri Swami Travels": { hi: "श्री स्वामी ट्रैवल्स के बारे में", mr: "श्री स्वामी ट्रॅव्हल्स विषयी" },
  "Travel Enquiry & Booking": { hi: "यात्रा पूछताछ और बुकिंग", mr: "प्रवास चौकशी आणि बुकिंग" },
  "Plan Your Next Trip With Us": { hi: "हमारे साथ अपनी अगली यात्रा की योजना बनाएँ", mr: "आमच्यासोबत तुमच्या पुढील प्रवासाचे नियोजन करा" },
  "Direct Assistance": { hi: "सीधी सहायता", mr: "थेट मदत" },
  "Customer Support": { hi: "ग्राहक सहायता", mr: "ग्राहक मदत" },
  "Fastest Booking by Phone": { hi: "फोन द्वारा सबसे तेज़ बुकिंग", mr: "फोनवरून जलद बुकिंग" },
  "Call Our Travel Coordinators": { hi: "हमारे यात्रा समन्वयकों को कॉल करें", mr: "आमच्या प्रवास समन्वयकांना कॉल करा" },
  "Message on WhatsApp": { hi: "व्हाट्सऐप पर संदेश भेजें", mr: "व्हॉट्सअॅपवर संदेश पाठवा" },
  "How Booking Works:": { hi: "बुकिंग कैसे होती है:", mr: "बुकिंग कशी होते:" },
  "Submit Your Trip Plan": { hi: "अपनी यात्रा योजना भेजें", mr: "तुमची प्रवास योजना पाठवा" },
  "Confirm Itinerary & Price": { hi: "यात्रा कार्यक्रम और कीमत की पुष्टि करें", mr: "प्रवास आराखडा व किंमत निश्चित करा" },
  "Travel with Peace of Mind": { hi: "निश्चिंत होकर यात्रा करें", mr: "निश्चिंतपणे प्रवास करा" },
  "Helpful Tips for Faster Quotes": { hi: "तेज़ कोटेशन के लिए उपयोगी सुझाव", mr: "जलद कोटेशनसाठी उपयुक्त सूचना" },
  "Verified & Sanitized": { hi: "सत्यापित और स्वच्छ", mr: "तपासलेले आणि स्वच्छ" },
  "AC & Pushback Comfort": { hi: "एसी और पुशबैक आराम", mr: "एसी आणि पुशबॅक आराम" },
  "Transparent Quotations": { hi: "पारदर्शी कोटेशन", mr: "पारदर्शक कोटेशन" },
  "Ideal for:": { hi: "इसके लिए उपयुक्त:", mr: "यासाठी योग्य:" },
  "Need instant assistance?": { hi: "तुरंत सहायता चाहिए?", mr: "त्वरित मदत हवी आहे?" },
  "Policy Information": { hi: "नीति जानकारी", mr: "धोरण माहिती" },
  "Privacy policy": { hi: "गोपनीयता नीति", mr: "गोपनीयता धोरण" },
  "Terms & conditions": { hi: "नियम और शर्तें", mr: "नियम व अटी" },
  "Cancellation & refund policy": { hi: "रद्दीकरण और धनवापसी नीति", mr: "रद्दीकरण व परतावा धोरण" },
  "Payment status": { hi: "भुगतान स्थिति", mr: "पेमेंट स्थिती" },
  "No payment to confirm.": { hi: "पुष्टि करने के लिए कोई भुगतान नहीं है।", mr: "पुष्टी करण्यासाठी कोणतेही पेमेंट नाही." },
  "No payment was attempted.": { hi: "कोई भुगतान प्रयास नहीं किया गया।", mr: "कोणत्याही पेमेंटचा प्रयत्न झालेला नाही." },
  "Return home →": { hi: "मुख्य पृष्ठ पर जाएँ →", mr: "मुख्यपृष्ठावर जा →" },
  "Contact us →": { hi: "संपर्क करें →", mr: "संपर्क साधा →" },
  "Overview": { hi: "परिचय", mr: "आढावा" },
  "Tour Highlights": { hi: "यात्रा की खासियतें", mr: "प्रवासाची वैशिष्ट्ये" },
  "Sample Day-Wise Itinerary": { hi: "नमूना दिन-वार यात्रा कार्यक्रम", mr: "नमुना दिवसनिहाय प्रवास आराखडा" },
  "Inclusions & Booking Guidelines": { hi: "शामिल सेवाएँ और बुकिंग निर्देश", mr: "समाविष्ट सेवा व बुकिंग मार्गदर्शक" },
  "Recommended Vehicles for this Tour": { hi: "इस यात्रा के लिए अनुशंसित वाहन", mr: "या प्रवासासाठी सुचवलेली वाहने" },
  "Send an Enquiry": { hi: "पूछताछ भेजें", mr: "चौकशी पाठवा" },
  "Submit Enquiry": { hi: "पूछताछ भेजें", mr: "चौकशी पाठवा" },
  "Chat on WhatsApp": { hi: "व्हाट्सऐप पर चैट करें", mr: "व्हॉट्सअॅपवर चॅट करा" },
  "Full Name": { hi: "पूरा नाम", mr: "पूर्ण नाव" },
  "Mobile Number": { hi: "मोबाइल नंबर", mr: "मोबाईल क्रमांक" },
  "Approx. Travel Date": { hi: "अनुमानित यात्रा तिथि", mr: "अंदाजे प्रवास तारीख" },
  "Number of Travellers / Seats": { hi: "यात्रियों / सीटों की संख्या", mr: "प्रवासी / सीटांची संख्या" },
  "Pickup Location & Details": { hi: "पिकअप स्थान और विवरण", mr: "पिकअप ठिकाण व तपशील" },
};

const originals = new WeakMap<Text, string>();

function translateTextNode(node: Text, language: Language) {
  const original = originals.get(node) ?? node.data;
  originals.set(node, original);
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  const phrase = original.trim();
  const translated = language === "en" ? phrase : catalog[phrase]?.[language] ?? phrase;
  node.data = `${leading}${translated}${trailing}`;
}

export function WebsiteTranslator({ language }: { language: Language }) {
  useEffect(() => {
    document.documentElement.lang = language;
    const apply = (root: Node) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let node: Text | null;
      while ((node = walker.nextNode() as Text | null)) {
        const parent = node.parentElement;
        if (parent && !parent.closest("script, style, [data-no-translate]")) translateTextNode(node, language);
      }
    };
    apply(document.body);
    const observer = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach(apply)));
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
}
