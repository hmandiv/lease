import { Container, Group, Button, Text, Box } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";

  return (
    <Box
      component="header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(248, 249, 250, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #e9ecef",
      }}
    >
      <Container size="lg" py="md">
        <Group justify="space-between">
          <Text component={Link} to="/" fw={900} size="xl" td="none" c="dark">
            Direct Rent
          </Text>

          <Group gap="xs">
            <Button
              component={Link}
              to="/"
              variant={isHome ? "filled" : "subtle"}
              radius="md"
            >
              Home
            </Button>

            <Button
              component={Link}
              to="/contact"
              variant={isContact ? "filled" : "subtle"}
              radius="md"
            >
              Contact
            </Button>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
