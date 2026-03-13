import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <Container size="lg" py={120}>
      <Stack align="center" gap="lg">
        <Title
          order={1}
          ta="center"
          maw={800}
          style={{
            fontSize: "48px",
            lineHeight: 1.2,
            fontWeight: 700,
          }}
        >
          Discover Prime Leasing Opportunities
        </Title>

        <Text
          size="lg"
          c="dimmed"
          ta="center"
          maw={600}
          style={{
            fontSize: "18px",
            lineHeight: 1.6,
          }}
        >
          Explore available commercial spaces and flexible lease options
          designed to support growing businesses.
        </Text>

        <Button component={Link} to="/contact" size="lg" radius="md">
          Contact Us
        </Button>
      </Stack>
    </Container>
  );
}
