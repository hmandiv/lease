import { Container, Group, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Container size="lg" py="xl">
      <Group justify="space-between" wrap="wrap">
        <Text size="sm">
          © {new Date().getFullYear()} Brand Name. All rights reserved.
        </Text>

        <Group gap="md">
          <Text size="sm">Home</Text>
          <Text size="sm">Contact</Text>
          <Text size="sm">info@example.com</Text>
        </Group>
      </Group>
    </Container>
  );
}
