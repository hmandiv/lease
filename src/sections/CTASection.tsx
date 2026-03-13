import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <Container size="lg" py={100}>
      <Stack align="center" gap="lg">
        <Title order={2} ta="center">
          Interested in Leasing Opportunities?
        </Title>

        <Text ta="center" c="dimmed" maw={600}>
          Contact us today to learn more about available locations, lease terms,
          and pricing options.
        </Text>

        <Button component={Link} to="/contact" size="md">
          Contact Us
        </Button>
      </Stack>
    </Container>
  );
}
