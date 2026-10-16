import { Column, Row, Text, Heading, Icon } from "@once-ui-system/core";
import type { ReactNode } from "react";

/** "As a / I want / so that" card, styled like a user story on a board. */
export function StoryCard({
  asA,
  iWant,
  soThat,
  label = "User story",
}: {
  asA: ReactNode;
  iWant: ReactNode;
  soThat: ReactNode;
  label?: string;
}) {
  const line = (k: string, v: ReactNode) => (
    <Row gap="12" vertical="start" s={{ direction: "column", gap: "2" }}>
      <Text
        variant="label-strong-m"
        onBackground="brand-medium"
        style={{ minWidth: "5.5rem", textTransform: "uppercase", letterSpacing: "0.06em" }}
      >
        {k}
      </Text>
      <Text variant="body-default-l" onBackground="neutral-strong">
        {v}
      </Text>
    </Row>
  );
  return (
    <Column
      fillWidth
      maxWidth={36}
      gap="12"
      padding="l"
      radius="l"
      background="surface"
      border="neutral-alpha-medium"
      style={{
        borderLeft: "6px solid var(--brand-solid-strong)",
        textAlign: "left",
        boxShadow: "0 12px 40px -24px var(--brand-solid-strong)",
      }}
    >
      <Row gap="8" vertical="center">
        <Icon name="clipboard" size="s" onBackground="brand-medium" />
        <Text variant="label-default-s" onBackground="neutral-weak">
          {label}
        </Text>
      </Row>
      {line("As a", asA)}
      {line("I want", iWant)}
      {line("So that", soThat)}
    </Column>
  );
}

export type StatItem = { value: string; label: ReactNode };

/** A row of big-number tiles. */
export function StatGrid({ items }: { items: StatItem[] }) {
  return (
    <Row fillWidth gap="12" wrap marginY="16">
      {items.map((s, i) => (
        <Column
          key={i}
          flex={1}
          minWidth={10}
          gap="4"
          padding="m"
          radius="l"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
        >
          <Heading as="p" variant="display-strong-xs" onBackground="brand-strong">
            {s.value}
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-medium">
            {s.label}
          </Text>
        </Column>
      ))}
    </Row>
  );
}

/** Two-column "Problem / Solution" style panel used inside case studies. */
export function Split({
  leftTitle,
  left,
  rightTitle,
  right,
}: {
  leftTitle: string;
  left: ReactNode;
  rightTitle: string;
  right: ReactNode;
}) {
  return (
    <Row fillWidth gap="12" marginY="16" s={{ direction: "column" }}>
      {[
        [leftTitle, left, "danger"],
        [rightTitle, right, "success"],
      ].map(([t, c, tone], i) => (
        <Column
          key={i}
          flex={1}
          gap="8"
          padding="m"
          radius="l"
          border="neutral-alpha-medium"
          background="surface"
          style={{
            borderTop: `4px solid var(--${tone as string}-solid-medium)`,
          }}
        >
          <Text variant="label-strong-m" onBackground="neutral-strong">
            {t as string}
          </Text>
          <Text variant="body-default-m" onBackground="neutral-medium">
            {c as ReactNode}
          </Text>
        </Column>
      ))}
    </Row>
  );
}
