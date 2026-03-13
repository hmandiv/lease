import { Container, Title, Text, Button, Stack } from "@mantine/core";

export default function HeroSection() {
  return (
    <Container size="lg" py={100}>
      <Stack align="center" gap="lg">
        <Title order={1} ta="center">
          Prime Lease Opportunities
        </Title>

        <Text size="lg" c="dimmed" ta="center" maw={600}>
          Explore available commercial lease opportunities and contact us for
          availability, pricing, and location details.
        </Text>

        <Button size="md">Contact Us</Button>
      </Stack>
    </Container>
  );
}
