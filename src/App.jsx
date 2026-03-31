import React from "react";
import { useEffect } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

const assetPath = (filename) => `/images/${filename}`;

const services = [
  {
    title: "General Dentistry",
    slug: "general-dentistry",
    description:
      "Routine check-ups, preventive care, fillings, cleanings, and everyday dental support for lasting oral health.",
    longDescription:
      "Our general dentistry page is designed to communicate dependable day-to-day dental care with an emphasis on prevention, diagnosis, comfort, and continuity of treatment.",
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    description:
      "Smile-enhancing treatments designed to improve confidence, appearance, and overall dental aesthetics.",
    longDescription:
      "This section positions cosmetic dentistry as a premium, patient-led journey focused on confidence, appearance, and personalised treatment planning.",
  },
  {
    title: "Orthodontic Care",
    slug: "orthodontic-care",
    description:
      "Specialist-led diagnosis and treatment planning for alignment, bite correction, and dentofacial harmony.",
    longDescription:
      "Orthodontic care is presented with authority and specialist credibility, supported by Dr. Vinay S. Dua’s strong academic and clinical background.",
  },
  {
    title: "Children's Dentistry",
    slug: "childrens-dentistry",
    description:
      "Gentle, patient-focused dental care tailored to children, from prevention to restorative treatment.",
    longDescription:
      "Children’s dentistry is framed around reassurance, communication, prevention, and warm patient care for young families.",
  },
  {
    title: "Restorative Treatments",
    slug: "restorative-treatments",
    description:
      "Solutions focused on restoring comfort, function, and confidence through careful clinical treatment.",
    longDescription:
      "This page supports patients exploring restorative options by combining trust-building copy with a calm premium design language.",
  },
  {
    title: "Preventive Care",
    slug: "preventive-care",
    description:
      "Early diagnosis, education, hygiene guidance, and regular reviews to help maintain healthy smiles.",
    longDescription:
      "Preventive care is positioned as the foundation of long-term oral health, helping patients act early and protect future outcomes.",
  },
];

const doctors = [
  {
    name: "Dr. Vinay S. Dua",
    specialty: "Orthodontics and Dentofacial Orthopaedics",
    fullBio:
      "Dr. Vinay S. Dua is a distinguished orthodontist, educator, and researcher whose work spans specialist clinical care, academic leadership, professional governance, publications, and invited speaking engagements. His profile brings exceptional credibility to the clinic’s orthodontic offering.",
    highlights: [
      "Director-Principal, Professor, and Head of Department",
      "Executive Committee Member, Punjab Dental Council",
      "Member, Indian Orthodontic Society",
      "Published nationally and internationally",
    ],
    image: assetPath("dr-dua.jpeg"),
  },
  {
    name: "Dr. Sunaina",
    specialty: "Paediatric Dentistry",
    fullBio:
      "Dr. Sunaina combines paediatric dental expertise with a warm, patient-centred approach that helps children and parents feel supported throughout the treatment journey. Her academic and clinical background adds strong trust and reassurance for families.",
    highlights: [
      "Best All India Best Post Graduate Student",
      "14 years of academic and clinical experience",
      "Special interest in paediatric orthodontics",
      "Fluent in English, Punjabi, and Hindi",
    ],
    image: assetPath("dr-sunaina.jpeg"),
  },
];

const reasons = [
  "Premium clinical environment",
  "Experienced specialist care",
  "Patient-first treatment planning",
  "International patient support",
  "Comfort-focused experience",
  "Modern dental infrastructure",
];

const blogPosts = [
  {
    title: "Best Dentist in Phagwara: How to Choose the Right Dental Clinic (2026 Guide)",
    category: "SEO Guide",
    excerpt: "Looking for the best dentist in Phagwara? Here’s a complete guide to choosing the right dental clinic in Punjab.",
    slug: "best-dentist-phagwara-guide",
    image: assetPath("waiting-room.jpeg"),
    content: [
      "If you are searching for the best dentist in Phagwara, you are likely looking for a combination of expertise, trust, and long-term care. Choosing the right dental clinic is not just about convenience—it directly impacts your health, comfort, and confidence.",
      "The first thing to evaluate is clinical expertise. Look for qualified dentists with strong academic backgrounds and experience across multiple treatments. Clinics with specialists in orthodontics and paediatric dentistry provide better, more accurate care.",
      "Infrastructure and hygiene standards are critical. A modern dental clinic in Punjab should have advanced equipment, proper sterilisation, and a clean, organised environment. These factors reflect the clinic’s commitment to quality.",
      "Another key factor is communication. The best dental clinics explain treatment plans clearly, provide transparent pricing, and ensure patients feel comfortable before starting any procedure.",
      "Patient reviews also play an important role. Checking Google reviews helps you understand real patient experiences and the overall reputation of the clinic.",
      "Finally, choose a clinic that offers comprehensive services. From general dentistry to orthodontics and cosmetic treatments, having everything under one roof ensures continuity of care.",
      "If you are in Punjab, selecting a trusted dental clinic in Phagwara with experienced doctors and a premium patient experience can make all the difference.",
    ],
    faqs: [
      { q: "Who is the best dentist in Phagwara?", a: "The best dentist is one with strong qualifications, experience, and positive patient reviews. Look for clinics with specialist care and modern infrastructure." },
      { q: "How do I choose a dental clinic in Punjab?", a: "Evaluate expertise, hygiene, services offered, patient reviews, and communication quality before choosing a clinic." },
      { q: "Are dental clinics in Phagwara reliable?", a: "Yes, many clinics offer high-quality care with experienced professionals and modern facilities." },
    ],
  },
  {
    title: "Dental Treatment in India for International Patients: Cost, Quality & What to Expect",
    category: "Medical Tourism",
    excerpt: "Planning dental treatment in India? Here’s everything international patients need to know about cost, quality, and travel.",
    slug: "dental-treatment-india-guide",
    image: assetPath("treatmentroom.jpeg"),
    content: [
      "Dental treatment in India has become a preferred option for international patients seeking high-quality care at affordable costs. Cities across Punjab, including Phagwara, offer advanced dental services with experienced specialists.",
      "One of the biggest advantages is cost. Treatments such as root canals, crowns, and orthodontics can be significantly more affordable compared to countries like the UK or Australia, without compromising quality.",
      "India is home to highly qualified dentists with global exposure. Many specialists have academic and clinical experience that meets international standards.",
      "The process is straightforward. Patients typically begin with an online consultation, followed by treatment planning and travel scheduling.",
      "Clinics that support medical tourism often assist with appointment coordination, treatment timelines, and communication.",
      "Another benefit is shorter waiting times. Patients can receive consultations and begin treatment quickly compared to long queues in some countries.",
      "For international patients, choosing a well-established dental clinic in Punjab ensures both quality care and a smooth treatment journey.",
    ],
    faqs: [
      { q: "Is dental treatment in India safe?", a: "Yes, reputable clinics follow strict hygiene standards and use modern equipment." },
      { q: "How much cheaper is dental treatment in India?", a: "Costs can be 50–70% lower compared to countries like the UK or Australia." },
      { q: "Do Indian dentists meet international standards?", a: "Yes, many dentists have strong academic backgrounds and global exposure." },
    ],
  },
  {
    title: "Braces vs Aligners: Which Orthodontic Treatment is Right for You?",
    category: "Orthodontics",
    excerpt: "Confused between braces and aligners? Learn the differences, costs, and which treatment suits you best.",
    slug: "braces-vs-aligners",
    image: assetPath("dr-dua.jpeg"),
    content: [
      "When considering orthodontic treatment, one of the most common questions is whether to choose braces or aligners. Both options are effective, but the right choice depends on your needs and lifestyle.",
      "Traditional braces are highly effective for complex cases involving severe misalignment or bite issues. They provide precise control and predictable results.",
      "Aligners, on the other hand, are clear, removable trays that offer a more discreet option. They are popular among adults and working professionals who prefer a less visible treatment.",
      "Comfort and convenience differ between the two. Aligners can be removed for eating and brushing, while braces are fixed and require more maintenance.",
      "Treatment duration depends on the complexity of the case. Some cases may be treated faster with aligners, while others require braces for better results.",
      "Cost is another factor. Aligners are generally more expensive than traditional braces due to customisation and technology.",
      "Consulting an orthodontic specialist is the best way to determine the right option for your specific dental needs.",
    ],
    faqs: [
      { q: "Are aligners better than braces?", a: "Aligners are more discreet, but braces are better for complex cases." },
      { q: "How long does orthodontic treatment take?", a: "Treatment typically ranges from 6 months to 2 years depending on complexity." },
      { q: "Are braces painful?", a: "There may be mild discomfort initially, but it usually subsides within a few days." },
    ],
  },
];

const tourismSteps = [
  "Submit your consultation form and treatment query",
  "Receive an initial review and guidance from the clinic",
  "Discuss treatment scope, travel timing, and expectations",
  "Visit the clinic in Phagwara for your scheduled care",
];

const galleryImages = [
  assetPath("waiting-room.jpeg"),
  assetPath("waiting-room-2.jpeg"),
  assetPath("waiting-room-3.jpeg"),
  assetPath("treatment-room-2.jpeg"),
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}

function PrimaryLink({ to, children, variant = "solid" }) {
  const classes =
    variant === "solid"
      ? "rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
      : "rounded-full border border-sky-300 px-6 py-3 text-sm font-semibold text-sky-800 transition hover:bg-sky-50";

  return <Link to={to} className={classes}>{children}</Link>;
}

function Layout({ children }) {
  const routes = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Doctors", path: "/doctors" },
    { label: "Medical Tourism", path: "/medical-tourism" },
    { label: "Blogs", path: "/blogsnp" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="text-left">
            <p className="text-xl font-semibold tracking-tight text-sky-900">Bhatia Dental Clinic</p>
            <p className="text-sm text-slate-500">Advanced Dental Care. Trusted Hands. Confident Smiles.</p>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) => `transition hover:text-sky-800 ${isActive ? "text-sky-800" : "text-slate-600"}`}
              >
                {route.label}
              </NavLink>
            ))}
          </nav>
          <PrimaryLink to="/contact">Book Consultation</PrimaryLink>
        </div>
      </header>
      {children}
      <footer className="border-t border-slate-200 bg-slate-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-xl font-semibold text-slate-900">Bhatia Dental Clinic</p>
            <p className="mt-2 text-sm text-slate-600">Advanced Dental Care. Trusted Hands. Confident Smiles.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              A premium multi-page dental clinic website concept built for Netlify hosting, growth-focused content, and HubSpot-powered lead capture.
            </p>
          </div>
          <div className="text-sm text-slate-600 lg:text-right">
            <p>757 Hargobind Nagar</p>
            <p>Phagwara, Punjab 144401</p>
            <p className="mt-3">Medical tourism support available for international patients</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-sky-900 to-cyan-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-cyan-300 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="self-center">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-cyan-100">Premium Dental Care in Phagwara, Punjab</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Specialist-led dental care for local families and international patients.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100">Bhatia Dental Clinic combines clinical expertise, a modern care environment, and a patient-first approach to deliver comfortable, trusted dental treatment in Punjab.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryLink to="/contact">Book a Consultation</PrimaryLink>
              <PrimaryLink to="/medical-tourism" variant="outline">Explore Medical Tourism</PrimaryLink>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[["Premium", "Clinic Experience"], ["Specialist", "Led Care"], ["Trusted", "Patient Support"]].map(([a, b]) => (
                <div key={a} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-lg font-semibold">{a}</p>
                  <p className="text-sm text-sky-100">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <img src={assetPath("treatmentroom.jpeg")} alt="Treatment room" className="h-64 w-full object-cover sm:h-72 lg:h-80" />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur sm:translate-y-8">
              <img src={assetPath("docs-performing-checkup.jpeg")} alt="Doctors performing checkup" className="h-64 w-full object-cover sm:h-72 lg:h-80" />
            </div>
            <div className="col-span-full rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Clinic Location</p>
              <p className="mt-2 text-lg font-medium">757 Hargobind Nagar, Phagwara, Punjab 144401</p>
              <p className="mt-3 text-sm text-sky-100">Welcoming local patients from Punjab and international patients seeking trusted dental care in India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader eyebrow="About the clinic" title="A premium dental clinic built on expertise, trust, and patient comfort." description="Bhatia Dental Clinic is designed to offer a reassuring, high-quality experience for patients seeking dependable dental care in Phagwara." />
            <p className="mt-5 text-base leading-7 text-slate-600">With an elegant clinical environment, experienced professionals, and support for international dental tourism, the clinic is positioned to serve both local families and patients travelling for care in India.</p>
            <div className="mt-8 flex gap-4">
              <PrimaryLink to="/about">Learn More</PrimaryLink>
              <PrimaryLink to="/doctors" variant="outline">Meet the Doctors</PrimaryLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 h-10 w-10 rounded-2xl bg-sky-100" />
                <p className="text-lg font-semibold text-slate-900">{item}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Built to support a smooth, reassuring patient journey from enquiry through consultation and treatment.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <SectionHeader eyebrow="Services" title="Comprehensive dental services delivered with a premium standard of care." description="Explore a structured service overview, then move into dedicated pages for individual service lines." />
            <PrimaryLink to="/services" variant="outline">View All Services</PrimaryLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 h-12 w-12 rounded-2xl bg-sky-100" />
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <Link to={`/services/${service.slug}`} className="mt-5 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900">Explore service →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader eyebrow="Blog" title="Educational content designed to build trust and grow organic visibility." description="The blog now has dedicated article pages to support stronger SEO structure and clearer navigation." />
          <PrimaryLink to="/blog" variant="outline">Visit Blog</PrimaryLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={post.image} alt={post.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{post.category}</span>
                <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-900 group-hover:text-sky-800">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900">Read article →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader eyebrow="About" title="A premium clinic experience shaped by expertise, trust, and calm patient care." description="This page gives Bhatia Dental Clinic a stronger brand story and a clearer local identity than a single scrolling section." />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6 text-base leading-8 text-slate-600">
          <p>Bhatia Dental Clinic is positioned as a modern, specialist-supported dental clinic in Phagwara, Punjab. The website’s multi-page structure helps create clearer navigation for patients while also supporting stronger search visibility over time.</p>
          <p>The clinic experience is designed to feel premium, reassuring, and patient-first. From the first enquiry through consultation and treatment, the tone of the website reflects comfort, professionalism, and trust.</p>
          <p>With support for local patients and international enquiries, the clinic is also prepared to communicate clearly with patients travelling to India for care.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {galleryImages.map((image, idx) => (
            <div key={image} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <img src={image} alt={`Clinic image ${idx + 1}`} className="h-56 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader eyebrow="Services" title="Explore dedicated service pages for stronger structure and future SEO growth." description="Each service now has its own destination page, which is the right direction for a growth-focused dental website." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-5 h-12 w-12 rounded-2xl bg-sky-100" />
            <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            <Link to={`/services/${service.slug}`} className="mt-5 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900">Visit service page →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServiceDetailPage({ service }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Link to="/services" className="text-sm font-semibold text-sky-700 hover:text-sky-900">← Back to services</Link>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeader eyebrow="Service" title={service.title} description={service.description} />
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
            <p>{service.longDescription}</p>
            <p>This dedicated page structure gives the clinic a much stronger foundation for future optimisation, targeted copywriting, and service-specific patient journeys.</p>
            <p>When you are ready, this page can be expanded with FAQs, treatment pathways, consultation details, and dedicated HubSpot forms for this service.</p>
          </div>
          <div className="mt-8 flex gap-4">
            <PrimaryLink to="/contact">Book Consultation</PrimaryLink>
            <PrimaryLink to="/blog" variant="outline">Read Related Articles</PrimaryLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <img src={assetPath("treatment-room-2.jpeg")} alt={service.title} className="h-full min-h-[420px] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function DoctorsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader eyebrow="Doctors" title="Experienced clinicians with specialist expertise and a strong academic foundation." description="This page gives the medical team dedicated space, which is especially valuable for trust and conversion." />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {doctors.map((doctor) => (
          <article key={doctor.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              <div className="h-full min-h-[320px] bg-slate-100">
                <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{doctor.specialty}</p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900">{doctor.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{doctor.fullBio}</p>
                <ul className="mt-6 space-y-3">
                  {doctor.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-600" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TourismPage() {
  useEffect(() => {
  const existingScript = document.querySelector(
    'script[src="https://js-eu1.hsforms.net/forms/embed/147406607.js"]'
  );

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/147406607.js";
    script.defer = true;
    document.body.appendChild(script);
  }
}, []);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionHeader eyebrow="Medical tourism" title="World-class dental care, right here in India." description="This dedicated page creates a clearer pathway for international patients and is much more effective than hiding the content on a single long homepage." />
          <div className="mt-8 rounded-[2rem] border border-sky-100 bg-sky-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">How it works</p>
            <ol className="mt-5 space-y-4">
              {tourismSteps.map((step, idx) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-white">{idx + 1}</span>
                  <p className="pt-1 text-sm leading-7 text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">International patient enquiry</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">Plan your dental visit</h3>
          <div className="mt-6 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
            <div
            className="hs-form-frame"
            data-region="eu1"
            data-form-id="77bad311-5ba5-433d-ac8a-9b77f86d0b6c"
            data-portal-id="147406607"
          ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeader eyebrow="Blog" title="Browse educational articles built to support patient trust and organic discovery." description="Each article now has its own page path, which is a much better long-term setup than a single-page blog section." />
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <img src={post.image} alt={post.title} className="h-40 w-full object-cover" />
            <div className="p-6">
              <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{post.category}</span>
              <h3 className="mt-4 text-xl font-semibold leading-8 text-slate-900 group-hover:text-sky-800">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900">Read article →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogDetailPage({ post }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <Link to="/blog" className="text-sm font-semibold text-sky-700 hover:text-sky-900">← Back to blog</Link>
      <div className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
        <div className="p-8">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{post.category}</span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{post.title}</h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
            {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-slate-900">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-4">
              {post.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-4">
                  <p className="font-semibold text-slate-900">{faq.q}</p>
                  <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-8">
            <p className="text-sm text-slate-600">Interested in treatment?</p>
            <div className="mt-4"><PrimaryLink to="/contact">Book Consultation</PrimaryLink></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://js-eu1.hsforms.net/forms/embed/147406607.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://js-eu1.hsforms.net/forms/embed/147406607.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader eyebrow="Contact" title="Start with a consultation request." description="This page keeps form submission as the main conversion action while separating contact intent from the rest of the site." />
          <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Visit us</p>
            <p className="mt-3 text-lg font-semibold text-slate-900">Bhatia Dental Clinic</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">757 Hargobind Nagar, Phagwara, Punjab 144401</p>
            <a href="https://share.google/f4DTSMjsZ9xume4AR" target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-sky-700 hover:text-sky-900">View on Google Maps →</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Book consultation</p>
          <div className="mt-6 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-sm leading-7 text-slate-600">
            <div
            className="hs-form-frame"
            data-region="eu1"
            data-form-id="77bad311-5ba5-433d-ac8a-9b77f86d0b6c"
            data-portal-id="147406607"
          ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogRoutePage() {
  return <BlogPage />;
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        {services.map((service) => (
          <Route key={service.slug} path={`/services/${service.slug}`} element={<ServiceDetailPage service={service} />} />
        ))}
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/medical-tourism" element={<TourismPage />} />
        <Route path="/blog" element={<BlogRoutePage />} />
        {blogPosts.map((post) => (
          <Route key={post.slug} path={`/blog/${post.slug}`} element={<BlogDetailPage post={post} />} />
        ))}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
