import { Container, Title, Text, Grid, Card, Stack, ThemeIcon } from "@mantine/core";
import { MapPin, Handshake, Building2, BadgeDollarSign } from "lucide-react";

const features = [
  {
    title: "Prime Locations",
    description:
      "Our leasing opportunities are located in high-traffic areas with excellent accessibility and visibility.",
    icon: MapPin,
  },
  {
    title: "Flexible Lease Terms",
    description:
      "We provide adaptable lease agreements to accommodate a variety of business needs.",
    icon: Handshake,
  },
  {
    title: "Available Units",
    description:
      "Multiple leasing options are available depending on space requirements and location preferences.",
    icon: Building2,
  },
  {
    title: "Competitive Pricing",
    description:
      "Our leasing opportunities are competitively priced to provide value while supporting business growth.",
    icon: BadgeDollarSign,
  },
];

export default function FeatureSection() {
  return (
    <Container size="lg" py={90}>
      <Stack align="center" gap="sm" mb={50}>
        <Title order={2} ta="center">
          Why Lease With Us
        </Title>

        <Text c="dimmed" ta="center" maw={640}>
          We offer flexible leasing opportunities designed to support businesses
          looking for prime locations and competitive terms.
        </Text>
      </Stack>

      <Grid>
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <Grid.Col key={feature.title} span={{ base: 12, sm: 6 }}>
              <Card
                shadow="sm"
                padding="xl"
                radius="lg"
                withBorder
                style={{
                  height: "100%",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <Stack gap="md">
                  <ThemeIcon size={52} radius="md" variant="light">
                    <Icon size={24} />
                  </ThemeIcon>

                  <Title order={4}>{feature.title}</Title>

                  <Text c="dimmed" lh={1.7}>
                    {feature.description}
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Container>
  );
}