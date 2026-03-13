import { useState } from "react";
import { TextInput, Textarea, Button, Stack, Alert } from "@mantine/core";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setResultMessage("");
    setIsSuccess(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: "New Lease Website Contact Form Submission",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setResultMessage("Message sent successfully.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setIsSuccess(false);
        setResultMessage(result.message || "Something went wrong.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setIsSuccess(false);
      setResultMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="md">
        <TextInput
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          required
        />

        <TextInput
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)}
          required
        />

        <Textarea
          label="Message"
          placeholder="Your message"
          minRows={5}
          value={message}
          onChange={(event) => setMessage(event.currentTarget.value)}
          required
        />

        <Button type="submit" loading={isSubmitting}>
          Send Message
        </Button>

        {isSuccess === true && (
          <Alert color="green" title="Success">
            {resultMessage}
          </Alert>
        )}

        {isSuccess === false && (
          <Alert color="red" title="Error">
            {resultMessage}
          </Alert>
        )}
      </Stack>
    </form>
  );
}
