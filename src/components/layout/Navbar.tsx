import { Container, Group, Button, Text } from "@mantine/core";

export default function Navbar() {
  return (
    <Container size="lg" py="md">
      <Group justify="space-between">
        <Text fw={700} size="lg">
          Brand Name
        </Text>

        <Group gap="sm">
          <Button variant="subtle">Home</Button>
          <Button variant="subtle">Contact</Button>
        </Group>
      </Group>
    </Container>
  );
}