import { Container, Group, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <Container size="lg" py="xl">
        <Group justify="space-between" wrap="wrap">
          <Text size="sm">
            © {new Date().getFullYear()} Direct Rent. All rights reserved.
          </Text>

          <Group gap="md">
            <Text component={Link} to="/" size="sm">
              Home
            </Text>

            <Text component={Link} to="/contact" size="sm">
              Contact
            </Text>

            <Text size="sm">info@example.com</Text>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
