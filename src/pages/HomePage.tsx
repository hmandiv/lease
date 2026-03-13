import { Container, Title, Text } from "@mantine/core";

export default function HomePage() {
  return (
    <Container size="md" py={80}>
      <Title order={1}>Lease Opportunities</Title>

      <Text mt="md">
        Explore available lease opportunities and contact us for details.
      </Text>
    </Container>
  );
}
