import { Container, Title, Text, Stack } from "@mantine/core";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactForm from "../forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <Container size="md" py={80}>
        <Stack gap="lg">
          <Title order={1}>Contact Us</Title>

          <Text c="dimmed">
            Have questions about our leasing opportunities? Fill out the form
            below and we will get back to you as soon as possible.
          </Text>

          <ContactForm />
        </Stack>
      </Container>

      <Footer />
    </>
  );
}
