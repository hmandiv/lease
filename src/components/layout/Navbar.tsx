import { Container, Group, Button, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container size="lg" py="md">
      <Group justify="space-between">
        <Text fw={700} size="lg">
          Brand Name
        </Text>

        <Group gap="sm">
          <Button component={Link} to="/" variant="subtle">
            Home
          </Button>

          <Button component={Link} to="/contact" variant="subtle">
            Contact
          </Button>
        </Group>
      </Group>
    </Container>
  );
}
