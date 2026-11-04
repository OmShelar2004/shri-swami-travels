"use client";

import { useState } from "react";
import { packages, vehicleDetails } from "@/config/content";
import { siteConfig } from "@/config/site";
import { PhoneIcon, WhatsAppIcon, CheckCircleIcon } from "@/components/icons";

interface EnquiryFormProps {
  initialService?: "tour" | "vehicle" | "general";
  initialSelection?: string;
  compact?: boolean;
}

export function EnquiryForm({ initialService = "tour", initialSelection = "", compact = false }: EnquiryFormProps) {
  const [serviceType, setServiceType] = useState<"tour" | "vehicle" | "general">(initialService);
  const [selection, setSelection] = useState(initialSelection);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    setErrorMessage("");
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const lines = [
      `*New Travel Enquiry - Shri Swami Travels*`,
      `*Name:* ${fullName || "Traveller"}`,
      `*Phone:* ${phone}`,
      `*Service:* ${serviceType === "tour" ? "Tour Package" : serviceType === "vehicle" ? "Vehicle Rental" : "General Enquiry"}`,
      selection ? `*Preferred:* ${selection}` : "",
      travelDate ? `*Date:* ${travelDate}` : "",
      travellers ? `*Travellers / Capacity:* ${travellers}` : "",
      notes ? `*Notes:* ${notes}` : "",
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  };

  const handleWhatsAppRedirect = () => {
    const text = getWhatsAppMessage();
    const url = `https://wa.me/91${siteConfig.primaryContactNumber}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-6 text-center text-slate-900 sm:p-8">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircleIcon className="h-8 w-8" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-blue-950">Thank You, {fullName}!</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Your travel enquiry has been received. Our team will contact you shortly on{" "}
          <span className="font-semibold text-blue-950">{phone}</span> to discuss package details, itinerary options, and vehicle availability.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleWhatsAppRedirect}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
          >
            <WhatsAppIcon className="h-4 w-4" /> Connect via WhatsApp
          </button>
          <a
            href={`tel:${siteConfig.primaryContactNumber}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-900"
          >
            <PhoneIcon className="h-4 w-4" /> Call {siteConfig.primaryContactNumber}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-5 text-xs font-semibold text-slate-500 underline hover:text-slate-800"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div>
        <h3 className="text-xl font-bold text-blue-950">Send an Enquiry</h3>
        <p className="mt-1 text-xs text-slate-600">
          Share your travel plan. Our team will get back to you with custom itinerary and quotation.
        </p>
      </div>

      {/* Service Type Selector */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">I am looking for</label>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {(
            [
              ["tour", "Tour Package"],
              ["vehicle", "Vehicle Rental"],
              ["general", "General Trip"],
            ] as const
          ).map(([type, label]) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setServiceType(type);
                setSelection("");
              }}
              className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${
                serviceType === type
                  ? "border-blue-950 bg-blue-950 text-white shadow-sm"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Selection Dropdown */}
      {serviceType === "tour" && (
        <div>
          <label htmlFor="package-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Tour Package
          </label>
          <select
            id="package-select"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
          >
            <option value="">-- Choose a package or destination --</option>
            {packages.map((pkg) => (
              <option key={pkg.slug} value={pkg.name}>
                {pkg.name} ({pkg.tag})
              </option>
            ))}
          </select>
        </div>
      )}

      {serviceType === "vehicle" && (
        <div>
          <label htmlFor="vehicle-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Select Vehicle Required
          </label>
          <select
            id="vehicle-select"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
          >
            <option value="">-- Choose a vehicle option --</option>
            {vehicleDetails.map((v) => (
              <option key={v.name} value={v.name}>
                {v.name} ({v.capacity})
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Name and Mobile */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            placeholder="e.g. Rajesh Sharma"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
          />
        </div>
      </div>

      {/* Date & Travellers */}
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="travelDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Approx. Travel Date
          </label>
          <input
            id="travelDate"
            type="text"
            placeholder="e.g. 15th Nov or Diwali week"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
          />
        </div>

        <div>
          <label htmlFor="travellers" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
            Number of Travellers / Seats
          </label>
          <input
            id="travellers"
            type="text"
            placeholder="e.g. 4 adults, 2 kids"
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
          />
        </div>
      </div>

      {/* Notes / Special requirements */}
      <div>
        <label htmlFor="notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          Pickup Location & Details
        </label>
        <textarea
          id="notes"
          rows={compact ? 2 : 3}
          placeholder="e.g. Pickup from Dadar / Pune, budget preference, elder travellers requiring ground floor stay..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1.5 block w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-950 focus:ring-1 focus:ring-blue-950"
        />
      </div>

      {errorMessage && (
        <p className="rounded-lg bg-red-50 p-3 text-xs font-semibold text-red-700">{errorMessage}</p>
      )}

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-amber-400 px-6 py-3 text-center text-sm font-bold text-blue-950 shadow transition hover:bg-amber-300"
        >
          Submit Enquiry
        </button>
        <button
          type="button"
          onClick={handleWhatsAppRedirect}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-emerald-600 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
        >
          <WhatsAppIcon className="h-4 w-4 text-emerald-600" /> Chat on WhatsApp
        </button>
      </div>

      <p className="text-center text-[11px] text-slate-500">
        We respect your privacy. No spam. Direct personal assistance from Shri Swami Travels.
      </p>
    </form>
  );
}

