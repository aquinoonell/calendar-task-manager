import React from "react";
import { AppShell, ScrollArea, Group, Text } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";

// Example data for navigation links
const data = [
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconNotes, label: "Tasks" }, // Your task link
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconPresentationAnalytics, label: "Analytics" },
  { icon: IconFileAnalytics, label: "Contracts" },
  { icon: IconAdjustments, label: "Settings" },
  { icon: IconLock, label: "Security" },
];

function AppNavbar() {
  const [active, setActive] = React.useState("Tasks"); // Fixed typo in variable name
  
  const links = data.map((item) => (
    <a
      key={item.label}
      className={item.label === active ? "link-active" : "link"}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon stroke={1.5} style={{ marginRight: "10px" }} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <AppShell.Navbar p="md" width={{ base: 250 }}>
      <AppShell.Section grow component={ScrollArea}>
        <Group justify="apart" mb="md">
          <Text size="sm" fw={500} c="dimmed">
            Navigation
          </Text>
        </Group>
        <div>{links}</div>
      </AppShell.Section>
    </AppShell.Navbar>
  );
}

export default AppNavbar;
