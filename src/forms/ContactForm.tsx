import { TextInput, Textarea, Button, Stack } from "@mantine/core";

export default function ContactForm() {
  return (
    <form>
      <Stack gap="md">
        <TextInput label="Name" placeholder="Your name" required />

        <TextInput label="Email" placeholder="your@email.com" required />

        <Textarea
          label="Message"
          placeholder="Your message"
          minRows={4}
          required
        />

        <Button type="submit">Send Message</Button>
      </Stack>
    </form>
  );
}
