import { Container, Title, Text, Button, Stack } from "@mantine/core";

export default function HomePage() {
  return (
    <Container size="md" py={80}>
      <Stack gap="md">
        <Title order={1}>Lease Opportunities</Title>

        <Text size="lg">
          Explore available lease opportunities and contact us for details.
        </Text>

        <Button size="md">Contact Us</Button>
      </Stack>
    </Container>
  );
}