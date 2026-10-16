import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Samukelo",
  lastName: "Mngadi",
  name: `Samukelo Mngadi`,
  role: "Business Analyst",
  avatar: "/images/avatar.jpg",
  email: "mngadisamu1@gmail.com",
  location: "Africa/Johannesburg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on business analysis, data and AI projects</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/mngadisamu",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/samukelo-mngadi-3913a6238",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Business Analyst`,
  description: `Portfolio of ${person.name}, a business analyst working across requirements, process design, data and AI`,
  headline: <>Turning messy business problems into clear, buildable requirements</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Case Management System</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/case-management-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a business analyst and{" "}
      <Text as="span" size="xl" weight="strong">Data Engineering Intern at CAPACITI</Text>. I bridge
      stakeholders and developers <br /> with requirements, process maps and data models — and I
      build AI prototypes on the side.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Johannesburg`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a Johannesburg-based business analyst, with a Diploma in ICT in
        Business Analysis from the Durban University of Technology, who turns vague business needs
        into clear requirements, user stories and process flows that development teams can build
        from. At MICT SETA, {person.firstName} worked between stakeholders and developers on case
        management, onboarding and compliance, and property management systems, and is now on the CAPACITI Data
        Engineering Programme and recently completed the CAPACITI x Clickatell AI Bootcamp, building
        AI-powered tools end to end.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "CAPACITI",
        timeframe: "Aug 2026 - Present",
        role: "Data Engineering Intern",
        achievements: [
          <>Data Engineering Programme, building skills in data pipelines, modelling and analytics.</>,
          <>
            Completed the CAPACITI x Clickatell AI Bootcamp, shipping a new AI project each week —
            including a sentiment analysis tool and an airline complaint triage assistant.
          </>,
        ],
        images: [],
      },
      {
        company: "MICT SETA",
        timeframe: "Mar 2025 - Feb 2026",
        role: "Business Analyst Intern",
        achievements: [
          <>
            Elicited, documented and validated requirements, acting as the link between business
            stakeholders and the development team.
          </>,
          <>
            Wrote user stories with positive and negative acceptance criteria, business rules,
            process maps, system flows and ERDs / data models.
          </>,
          <>
            Designed wireframes and UI concepts in Figma and Visily, and wrote test cases for staging,
            UAT and demo testing, including defect reporting and retesting.
          </>,
          <>
            Contributed to sprint planning and roadmaps using Scrum, Kanban and Microsoft Planner
            across the SDLC.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Training",
    institutions: [
      {
        name: "Durban University of Technology (DUT)",
        description: (
          <>
            Diploma in Information & Communications Technology in Business Analysis, awarded
            December 2022. Distinctions in Business Analysis Project I & II, IT Project Management,
            Business Fundamentals II, Financial Accounting I and Theory of Internal Auditing II.
          </>
        ),
      },
      {
        name: "CAPACITI – Data Engineering Programme",
        description: <>2026 – present.</>,
      },
      {
        name: "CAPACITI x Clickatell AI Bootcamp",
        description: <>September – October 2026. Four weekly individual AI projects.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Requirements & analysis",
        description: (
          <>
            Requirements elicitation and validation, user stories with acceptance criteria, business
            rules, and stakeholder liaison.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Process & data modelling",
        description: <>Process mapping, system flows, ERDs and data models.</>,
        tags: [],
        images: [],
      },
      {
        title: "Wireframing & UI concepts",
        description: <>Low- and mid-fidelity wireframes and UI concepts.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [],
      },
      {
        title: "Testing & delivery",
        description: (
          <>
            Test cases, staging/UAT/demo testing, defect reporting and retesting. Sprint planning
            and roadmaps with Scrum and Kanban across the SDLC.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "AI prototyping",
        description: (
          <>Building and deploying AI-powered apps with Python, Streamlit and Google AI Studio.</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about business analysis and data",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Business analysis and AI projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
