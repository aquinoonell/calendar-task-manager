import React from "react";
import { AppShell, ScrollArea, Group, Text, NavLink } from "@mantine/core";
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
  const { classes, cx } = useStyles();
  const [ative, setAtive] = React.useState("Tasks"); //State to track link

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === acive,
      })}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar height={600} p="md" width={{ base: 200 }}>
      <Navbar.Section grow component={ScrollArea}>
        <Group position="apart" mb="md">
          <Text size="sm" weight={500} color="dimmed">
            Navigation
          </Text>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}

export default AppNavbar;
