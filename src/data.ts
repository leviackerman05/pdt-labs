export type Project = {
  name: string;
  eyebrow: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  tags: string[];
  imagePosition?: string;
};

export type Service = {
  name: string;
  duration: string;
  price: string;
  standardPrice: string;
  summary: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    name: "Nest",
    eyebrow: "Android · Personal finance",
    description:
      "A private expense tracker that turns Indian bank and UPI messages into budgets, categories, trends, and merchant rules without demanding manual entry.",
    image: "/projects/nest.webp",
    liveUrl: "https://nest-expenses.vercel.app/",
    repoUrl: "https://github.com/leviackerman05/nest",
    tags: ["Android", "Offline-first", "On-device data"],
    imagePosition: "center top",
  },
  {
    name: "Dictate",
    eyebrow: "macOS · Open source",
    description:
      "A local-first voice-to-text tool that transcribes on the Mac and returns polished words to the field a user is already working in.",
    image: "/projects/dictate.webp",
    liveUrl: "https://dictate-macos.vercel.app/",
    repoUrl: "https://github.com/leviackerman05/dictate",
    tags: ["Swift", "Local AI", "Open source"],
    imagePosition: "center center",
  },
  {
    name: "TriviaHub",
    eyebrow: "Web · Consumer product",
    description:
      "Daily trivia, topic decks, and party games in a fast browser experience built for solo sessions and easy sharing with friends.",
    image: "/projects/triviahub.webp",
    liveUrl: "https://playtriviahub.com/",
    repoUrl: "https://github.com/leviackerman05/trivia",
    tags: ["Growth loops", "SEO", "Real-time play"],
    imagePosition: "center center",
  },
  {
    name: "AnimeExplore",
    eyebrow: "Web · Discovery platform",
    description:
      "An automated content and discovery platform with search, seasonal data, character pages, watch orders, and practical guides.",
    image: "/projects/animeexplore.webp",
    liveUrl: "https://animeexplore.com/",
    repoUrl: "https://github.com/leviackerman05/animehq",
    tags: ["Content systems", "Search", "Automation"],
    imagePosition: "center top",
  },
];

export const services: Service[] = [
  {
    name: "Idea Validation",
    duration: "7 days",
    price: "$249",
    standardPrice: "$499",
    summary:
      "A focused validation sprint that sharpens the offer, launches a credible landing page, and starts collecting real demand.",
    deliverables: ["Positioning and page structure", "Responsive one-page build", "Signup form and basic analytics", "Basic technical SEO setup"],
  },
  {
    name: "Business site",
    duration: "2 to 3 weeks",
    price: "$1,499",
    standardPrice: "$1,999",
    summary:
      "A modern website for an existing business that needs clearer messaging, better mobile UX, and an easier path to enquiry.",
    deliverables: ["Content-led direction", "Up to 5 core pages", "Performance, accessibility, and analytics", "Advanced on-page and technical SEO"],
  },
  {
    name: "Product rescue",
    duration: "2 weeks",
    price: "$1,299",
    standardPrice: "$1,799",
    summary:
      "A focused intervention for a prototype that looks unfinished, breaks under real use, or needs a production plan.",
    deliverables: ["Technical and UX audit", "Highest-impact fixes", "Deployment and reliability plan", "Technical SEO audit and repair plan"],
  },
  {
    name: "MVP build",
    duration: "4 weeks",
    price: "$2,499",
    standardPrice: "$3,499",
    summary:
      "A lean first version with the core workflow, production foundations, and enough polish to put in front of real users.",
    deliverables: ["Scope and architecture", "Design and full-stack build", "Launch plus 2 weeks of support", "SEO-ready architecture and metadata"],
  },
];

export const faqs = [
  {
    question: "What can realistically ship in 7 days?",
    answer:
      "A focused idea-validation launch with clear positioning, a responsive landing page, a signup form, and basic analytics. Before work starts, you receive a written scope that separates what ships now from what belongs in a later phase.",
  },
  {
    question: "Can you take over a prototype built with AI tools?",
    answer:
      "Yes. The first step is to inspect the code, data model, security, performance, and user flow. You then get a short rescue plan before any rebuild or major change is proposed.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. The standard engagement includes source access, documentation, and a clean handoff. Any third-party licenses or ongoing service costs are identified before launch.",
  },
  {
    question: "How are projects priced?",
    answer:
      "The figures on this page are starting points. A final fixed quote follows a short scope call, so the price reflects the actual product and not an arbitrary hourly estimate.",
  },
  {
    question: "Who will I work with?",
    answer:
      "Directly with Priyansh, a senior product engineer with six years in production software. Strategy, architecture, implementation, and handoff stay in one conversation.",
  },
];
