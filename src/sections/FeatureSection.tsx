import { Container, Title, Text, Grid, Card, Stack } from "@mantine/core";

export default function FeatureSection() {
  return (
    <Container size="lg" py={80}>
      <Stack align="center" mb={50}>
        <Title order={2}>Why Lease With Us</Title>
        <Text c="dimmed" ta="center" maw={600}>
          We offer flexible leasing opportunities designed to support businesses
          looking for prime locations and competitive terms.
        </Text>
      </Stack>

      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>Prime Locations</Title>
            <Text mt="sm" c="dimmed">
              Our leasing opportunities are located in high-traffic areas with
              excellent accessibility and visibility.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>Flexible Lease Terms</Title>
            <Text mt="sm" c="dimmed">
              We provide adaptable lease agreements to accommodate a variety of
              business needs.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>Available Units</Title>
            <Text mt="sm" c="dimmed">
              Multiple leasing options are available depending on space
              requirements and location preferences.
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Title order={4}>Competitive Pricing</Title>
            <Text mt="sm" c="dimmed">
              Our leasing opportunities are competitively priced to provide
              value while supporting business growth.
            </Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}