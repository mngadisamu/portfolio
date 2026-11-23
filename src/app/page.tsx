import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Icon,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes, portfolioPdf, social, tools } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";
import { StoryCard, StatGrid, ToolGrid } from "@/components/Showcase";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const steps = [
  {
    icon: "users",
    title: "Understand",
    text: "Talk to the people behind the request, and the people around them. A vague brief is a prompt to ask more questions.",
  },
  {
    icon: "clipboard",
    title: "Define",
    text: "User stories with positive and negative acceptance criteria, business rules, process maps and data models.",
  },
  {
    icon: "sparkles",
    title: "Prototype",
    text: "Build something real with AI so stakeholders can react to it, not just read about it.",
  },
  {
    icon: "checkBadge",
    title: "Validate",
    text: "Test it, measure it honestly against a baseline, and keep a person in charge of every decision that matters.",
  },
];

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Column gap="8" paddingX="l" fillWidth>
      <Text
        variant="label-strong-s"
        onBackground="brand-medium"
        style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
      >
        {eyebrow}
      </Text>
      <Heading as="h2" variant="display-strong-xs" wrap="balance">
        {title}
      </Heading>
    </Column>
  );
}

export default function Home() {
  const email = social.find((s) => s.name === "Email")?.link;
  const linkedin = social.find((s) => s.name === "LinkedIn")?.link;

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="8" delay={0.3} fillWidth horizontal="center" paddingBottom="32" paddingX="16">
            <StoryCard
              label="My approach, as a user story"
              asA="business analyst,"
              iWant="to prototype a solution alongside the requirements,"
              soThat="stakeholders can react to something real before development starts."
            />
          </RevealFx>
          <RevealFx delay={0.4} horizontal="center">
            <Row gap="12" wrap horizontal="center">
              <Button
                href={portfolioPdf}
                variant="primary"
                size="m"
                prefixIcon="download"
                data-border="rounded"
              >
                Download PDF portfolio
              </Button>
              <Button href="/work" variant="secondary" size="m" arrowIcon data-border="rounded">
                See the case studies
              </Button>
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="tertiary"
                size="m"
                weight="default"
              >
                <Row gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <Avatar marginRight="8" style={{ marginLeft: "-0.75rem" }} src={person.avatar} size="m" />
                  )}
                  About me
                </Row>
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* Proof strip */}
      <RevealFx translateY="16" delay={0.5} fillWidth paddingX="l">
        <StatGrid
          items={[
            { value: "2+ yrs", label: "of business analysis at UltimetaX and MICT SETA" },
            { value: "4 in 4", label: "AI tools built and shipped in four weeks" },
            { value: "41", label: "acceptance criteria written before coding Tower" },
            { value: "89", label: "automated tests keeping Tower honest" },
          ]}
        />
      </RevealFx>

      {/* How I work */}
      <Column fillWidth gap="24">
        <SectionTitle eyebrow="How I work" title="From a vague request to something people can try" />
        <Row fillWidth gap="12" paddingX="l" wrap>
          {steps.map((s, i) => (
            <Column
              key={s.title}
              flex={1}
              minWidth={12}
              gap="8"
              padding="l"
              radius="l"
              background="surface"
              border="neutral-alpha-medium"
            >
              <Row gap="8" vertical="center">
                <Icon name={s.icon} onBackground="brand-medium" />
                <Text variant="label-default-s" onBackground="neutral-weak">
                  0{i + 1}
                </Text>
              </Row>
              <Heading as="h3" variant="heading-strong-l">
                {s.title}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-medium">
                {s.text}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Tools */}
      <Column fillWidth gap="24">
        <SectionTitle eyebrow="Toolkit" title="Tools I work with" />
        <Column fillWidth paddingX="l" gap="12">
          <ToolGrid groups={tools} compact />
          <Button href="/about#Tools I use" variant="tertiary" size="s" arrowIcon data-border="rounded">
            See them grouped by how I use them
          </Button>
        </Column>
      </Column>

      {/* Featured */}
      <Column fillWidth gap="24">
        <SectionTitle eyebrow="Featured case study" title="Tower: AI that suggests and flags, people who decide" />
        <Projects range={[1, 1]} />
      </Column>

      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
        </Column>
      )}

      <Column fillWidth gap="24">
        <SectionTitle eyebrow="More case studies" title="AI tools and business analysis work" />
        <Projects range={[2]} />
      </Column>

      {/* Reflection */}
      <Column fillWidth paddingX="l">
        <Column
          fillWidth
          gap="16"
          padding="xl"
          radius="l"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
        >
          <Text
            variant="label-strong-s"
            onBackground="brand-medium"
            style={{ textTransform: "uppercase", letterSpacing: "0.08em" }}
          >
            The lesson I keep
          </Text>
          <Heading as="p" variant="heading-strong-xl" wrap="balance">
            “The AI was the easy part. The hard work was everything around it: who may see what,
            what happens when the model is unsure, and how a customer follows up.”
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-medium">
            Measuring Tower's classifier honestly (62.7%, against 31.7% for guessing) is what led me
            to design it to suggest and flag rather than decide. I take the same approach into
            requirements work: write down the edge cases and limits before building, and show
            stakeholders something real early.
          </Text>
        </Column>
      </Column>

      {/* Contact */}
      <Column fillWidth horizontal="center" align="center" gap="16" paddingY="xl" paddingX="l">
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
          Open to business analyst roles and AI product work
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-l">
          Based in {person.locationLabel}. Let's talk.
        </Text>
        <Row gap="12" wrap horizontal="center" paddingTop="8">
          {email && (
            <Button href={email} variant="primary" size="m" prefixIcon="email" data-border="rounded">
              Email me
            </Button>
          )}
          {linkedin && (
            <Button href={linkedin} variant="secondary" size="m" prefixIcon="linkedin" data-border="rounded">
              LinkedIn
            </Button>
          )}
          <Button href={portfolioPdf} variant="tertiary" size="m" prefixIcon="download" data-border="rounded">
            PDF portfolio
          </Button>
        </Row>
      </Column>

      <Mailchimp />
    </Column>
  );
}
