




"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";

import Link from "next/link";
import { packages, services } from "@/config/content";
import { siteConfig } from "@/config/site";
import { SiteLayout } from "@/components/site-layout";
import {
  ShieldCheckIcon,
  BusIcon,
  UsersIcon,
  CompassIcon,
  PhoneIcon,
  MountainIcon,
  TempleIcon,
  CheckCircleIcon,
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/icons";

export default function Home() {
  const { t } = useLanguage();
  const selectedDestinations = packages.slice(1, 5); // Mahabaleshwar, Goa, Shimla Manali, Kashmir

  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "mountain":
        return <MountainIcon className="h-6 w-6 text-amber-400" />;
      case "temple":
        return <TempleIcon className="h-6 w-6 text-amber-400" />;
      case "compass":
        return <CompassIcon className="h-6 w-6 text-amber-400" />;
      case "bus":
        return <BusIcon className="h-6 w-6 text-amber-400" />;
      default:
        return <ShieldCheckIcon className="h-6 w-6 text-amber-400" />;
    }
  };

  const whyChooseUs = [
    {
      icon: BusIcon,
      title: "Well-Maintained Fleet",
      desc: "Clean, regularly inspected vehicles ranging from private Innova Crysta to 49-seater tourist coaches.",
    },
    {
      icon: UsersIcon,
      title: "Family & Senior Paced",
      desc: "Thoughtful travel schedules that prioritize comfort, timely rest stops, and easy accessibility.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Experienced Drivers",
      desc: "Courteous drivers well-versed in Maharashtra ghats, interstate highways, and holy temple routes.",
    },
    {
      icon: CompassIcon,
      title: "Transparent Planning",
      desc: "Direct communication with no hidden charges. All tolls, permits, and halts are clearly explained.",
    },
  ];

  const bookingSteps = [
    {
      step: "01",
      title: "Choose a Destination",
      desc: "Explore our domestic packages, pilgrimages, or select a vehicle for your own custom route.",
      icon: CompassIcon,
    },
    {
      step: "02",
      title: "Submit Requirements",
      desc: "Share your travel dates, passenger count, preferred vehicle, and pickup location.",
      icon: CalendarIcon,
    },
    {
      step: "03",
      title: "Receive a Quotation",
      desc: "Our travel team coordinates directly to provide a clear, all-inclusive itinerary and quote.",
      icon: CheckCircleIcon,
    },
    {
      step: "04",
      title: "Confirm the Booking",
      desc: "Lock in your dates with verified arrangements and travel with complete peace of mind.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <SiteLayout>
      {/* 1. Hero Section */}
      <section className="relative isolate min-h-[500px] overflow-hidden bg-blue-950 text-white sm:min-h-[560px]">
        <Image
          src="/images/destinations/mahabaleshwar.png"
          alt="Scenic Western Ghats mountain road in Maharashtra"
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/30" />

        <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-5 py-16 sm:min-h-[560px] lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold tracking-widest text-amber-300 uppercase backdrop-blur-sm border border-amber-400/30">
              {t.hero.eyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-tight">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/packages"
                className="rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-bold text-blue-950 shadow-md transition hover:bg-amber-300"
              >
                {t.hero.exploreBtn}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/60 bg-blue-950/40 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-blue-950"
              >
                {t.hero.contactBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Services - Compact Visual Cards */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[.2em] text-amber-700 uppercase">
              {t.services.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              {t.services.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              {t.services.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-xs transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-950 transition group-hover:bg-amber-400">
                    <span className="text-amber-400 group-hover:text-blue-950 transition">
                      {renderServiceIcon(service.icon)}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-blue-950 group-hover:text-amber-700 transition">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-950 group-hover:translate-x-1 transition">
                    {t.services.exploreLink}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Popular Destinations - 4 Selected Destinations */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold tracking-[.2em] text-amber-700 uppercase">
                Featured Journeys
              </p>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-blue-950">
                Popular Destinations
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                A selection of our most requested holiday packages across India.
              </p>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-950 hover:text-amber-700"
            >
              View All Packages →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {selectedDestinations.map((tour) => (
              <Link
                key={tour.slug}
                href={`/packages/${tour.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-md"
              >
                <div className="relative h-44 overflow-hidden bg-blue-950">
                  <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 rounded-full bg-blue-950/80 px-2.5 py-1 text-[10px] font-bold text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                    {tour.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="text-base font-bold text-blue-950 group-hover:text-amber-700 transition">
                      {tour.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">{tour.duration}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-600 line-clamp-2">
                      {tour.summary}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{t.destinations.detailsOnRequest}</span>
                    <span className="text-xs font-bold text-blue-950 group-hover:translate-x-0.5 transition">
                      {t.destinations.viewTour} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us - Genuine Business Strengths */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[.2em] text-amber-700 uppercase">
              Our Commitment
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              Why Choose Shri Swami Travels
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              We focus on dependable arrangements, passenger comfort, and genuine hospitality for every trip.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-950 text-amber-400">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold text-blue-950">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How Booking Works - 4 Clear Steps */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[.2em] text-amber-700 uppercase">
              Simple Process
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
              How Booking Works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Planning your trip is straightforward with our team.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-slate-200 bg-slate-50/50 p-6 shadow-2xs"
              >
                <span className="text-2xl font-black text-amber-500/80">{step.step}</span>
                <h3 className="mt-2 text-base font-bold text-blue-950">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final Contact CTA - High Impact & Clean (No Large Form) */}
      <section className="bg-blue-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-gradient-to-r from-blue-900 to-blue-950 p-8 text-center sm:p-12 lg:flex-row lg:text-left border border-blue-800/80">
            <div className="max-w-2xl">
              <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 uppercase tracking-wider border border-amber-400/30">
                Plan Your Next Journey
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to travel with Shri Swami Travels?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                Call our travel team directly for departure schedules, custom itineraries, and vehicle rental availability. We are just a phone call or WhatsApp message away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.primaryContactNumber}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-bold text-blue-950 shadow-md transition hover:bg-amber-300 w-full sm:w-auto"
              >
                <PhoneIcon className="h-4 w-4" />
                Call: {siteConfig.primaryContactNumber}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-blue-950 w-full sm:w-auto"
              >
                Contact Us
              </Link>
              <a
                href={`https://wa.me/91${siteConfig.primaryContactNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 w-full sm:w-auto"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
