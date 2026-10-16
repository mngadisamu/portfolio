import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Samukelo",
  lastName: "Mngadi",
  name: `Samukelo Mngadi`,
  role: "Business Analyst",
  avatar: "/images/avatar.jpg",
  email: "mngadisamu1@gmail.com",
  location: "Africa/Johannesburg", // IANA time zone, used for the local-time clock
  locationLabel: "Johannesburg, South Africa", // what visitors see
  languages: [], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

/** The downloadable PDF portfolio (in /public). */
const portfolioPdf = "/Samukelo-Mngadi-Portfolio.pdf";

/** Tools grouped by how they're used. Icons come from src/resources/icons.ts. */
const tools: { title: string; items: { name: string; icon?: string }[] }[] = [
  {
    title: "Planning & delivery",
    items: [
      { name: "Jira", icon: "jira" },
      { name: "Microsoft Planner", icon: "kanban" },
      { name: "Word", icon: "word" },
      { name: "Excel", icon: "excel" },
      { name: "PowerPoint", icon: "powerpoint" },
    ],
  },
  {
    title: "Design & prototyping",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Visily", icon: "layout" },
      { name: "Google AI Studio", icon: "google" },
    ],
  },
  {
    title: "Data & analysis",
    items: [
      { name: "Python", icon: "python" },
      { name: "Jupyter Notebook", icon: "jupyter" },
      { name: "MySQL", icon: "mysql" },
      { name: "SQLite", icon: "sqlite" },
      { name: "pandas", icon: "pandas" },
      { name: "scikit-learn", icon: "scikitlearn" },
      { name: "Highcharts", icon: "chartLine" },
      { name: "Plotly", icon: "plotly" },
      { name: "Kaggle", icon: "kaggle" },
    ],
  },
  {
    title: "AI & app building",
    items: [
      { name: "Gemini API", icon: "gemini" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vite", icon: "vite" },
      { name: "Node.js", icon: "nodejs" },
    ],
  },
  {
    title: "Version control, cloud & hosting",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubActions" },
      { name: "AWS S3", icon: "awsS3" },
      { name: "Apache", icon: "apache" },
      { name: "Vercel", icon: "vercel" },
      { name: "Streamlit Community Cloud", icon: "streamlit" },
    ],
  },
];

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
  description: `${person.name} is a business analyst who turns business problems into requirements, and requirements into working products. Case studies: Tower (airline complaint triage), a sentiment analysis tool, an AI BA assistant, #OOTD and MICT SETA systems.`,
  headline: <>I turn business problems into requirements, and requirements into working products.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Tower</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured case study
        </Text>
      </Row>
    ),
    href: "/work/tower",
  },
  subline: (
    <>
      I'm {person.firstName}, a business analyst. I gather requirements, map processes and model
      data, and I build AI-assisted prototypes so stakeholders can try an idea instead of just reading
      about it.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a business analyst based in Johannesburg, South Africa`,
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
        I'm a Johannesburg-based business analyst with a Diploma in ICT in Business Analysis from
        the Durban University of Technology. I turn vague business needs into requirements, user
        stories and process flows that developers can build from, and I test what gets built.
        <br />
        <br />
        At UltimetaX and MICT SETA I worked between stakeholders and developers, most recently on MICT SETA's case management, onboarding
        and verification, and property management systems. On the CAPACITI x Clickatell AI Bootcamp I
        shipped a new AI tool every week, ending with Tower, an airline complaint triage assistant
        with 89 automated tests and a person approving every reply. The thread through all of it:{" "}
        <strong>write down the edge cases and limits before building, and show stakeholders
        something real early.</strong>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "CAPACITI",
        timeframe: "Aug 2026 – Present",
        role: "Data Engineering Intern",
        achievements: [
          <>Data Engineering Programme: data pipelines, data modelling and analytics.</>,
          <>
            CAPACITI x Clickatell AI Bootcamp (Sep–Oct 2026): built and shipped four AI projects in
            four weeks: #OOTD, an AI BA assistant, a sentiment analysis tool and Tower.
          </>,
          <>
            Tower: wrote 10 user stories with 41 acceptance criteria, measured the classifier honestly
            (62.7% vs a 31.7% baseline) and designed the product around that result, backed by 81
            automated tests.
          </>,
        ],
        images: [],
      },
      {
        company: "MICT SETA",
        timeframe: "Mar 2025 – Feb 2026",
        role: "Business Analyst Intern",
        achievements: [
          <>
            Elicited, documented and validated business requirements, acting as the link between
            stakeholders and developers.
          </>,
          <>
            Wrote user stories with positive and negative acceptance criteria, and turned
            requirements into development tasks.
          </>,
          <>Mapped processes and system flows, and built ERDs and data models.</>,
          <>
            Designed wireframes in Figma and Visily, and redesigned features when stakeholder
            feedback showed the first solution didn't fit, including a vague dashboard brief I
            reshaped after consulting other departments.
          </>,
          <>
            Tested what developers built (staging, UAT, demos), reported defects, retested fixes and
            helped plan UAT.
          </>,
          <>
            Worked in Scrum and Kanban: sprint planning, prioritisation, roadmaps and project plans,
            tracked in Microsoft Planner.
          </>,
        ],
        images: [],
      },
      {
        company: "UltimetaX",
        timeframe: "Jan 2023 – Jan 2024",
        role: "Business Analyst",
        achievements: [
          <>
            Worked with stakeholders to gather, record and verify business needs, keeping them in line
            with operational objectives.
          </>,
          <>
            Built end-to-end workflows, process diagrams and ERDs to support system architecture,
            database planning and user interface development.
          </>,
          <>
            Wrote comprehensive user stories with explicit acceptance criteria to direct development
            and testing.
          </>,
          <>Helped with UI design and prototyping, turning business requirements into user-friendly interfaces.</>,
          <>
            Supported UAT planning, test case development and defect tracking, analysing system gaps,
            risks and improvement opportunities, and confirming functionality across environments.
          </>,
          <>
            Facilitated cross-functional collaboration by clearly communicating requirements to
            developers, designers and stakeholders.
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
        description: <>August 2026 – present.</>,
      },
      {
        name: "CAPACITI x Clickatell AI Bootcamp",
        description: <>28 September – 23 October 2026. Four weekly individual AI projects.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Business analysis",
        description: (
          <>
            Requirements elicitation and validation · user stories with positive and negative
            acceptance criteria (Given/When/Then) · business rules · assumption logs · stakeholder
            consultation and communication · turning requirements into development tasks.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Process & data modelling",
        description: (
          <>
            Process maps and system flows · user journeys · ERDs and data models · role and
            permission design (e.g. Tower's four roles across separate airlines).
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Testing & delivery",
        description: (
          <>
            Test cases · staging, UAT and demo testing · defect reporting and retesting · UAT
            planning · Scrum, Kanban and the SDLC · sprint planning, prioritisation and roadmaps.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Building with AI",
        description: (
          <>
            Prompt engineering and evaluation with Gemini · prototyping in Google AI Studio · text
            classification with scikit-learn (TF-IDF + logistic regression) · responsible AI: human
            approval, confidence thresholds, output guardrails, prompt-injection handling, PII
            masking.
          </>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "scikit-learn", icon: "scikitlearn" },
          { name: "Gemini API", icon: "gemini" },
          { name: "Streamlit", icon: "streamlit" },
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [
          {
            src: "/images/projects/tower/agent-draft.png",
            alt: "Tower agent view with suggested reason, confidence, urgency and draft reply",
            width: 16,
            height: 14,
          },
        ],
      },
      {
        title: "Data analysis",
        description: (
          <>
            Data quality checks and cleaning with a change log · sentiment analysis (VADER) ·
            dashboards and written insight reports · measuring accuracy honestly against a baseline.
          </>
        ),
        tags: [
          { name: "pandas", icon: "pandas" },
          { name: "SQLite", icon: "sqlite" },
          { name: "Git & GitHub", icon: "git" },
        ],
        images: [
          {
            src: "/images/projects/sentiment-analysis-tool/dashboard.png",
            alt: "Sentiment dashboard for 14,604 airline tweets",
            width: 16,
            height: 10,
          },
        ],
      },
      {
        title: "Design & documentation",
        description: (
          <>
            Wireframes and UI concepts · clear written documentation, reports and presentations for
            stakeholders.
          </>
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
  title: `Case studies – ${person.name}`,
  description: `Business analysis and AI case studies by ${person.name}`,
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

export { person, social, newsletter, home, about, blog, work, gallery, portfolioPdf, tools };
