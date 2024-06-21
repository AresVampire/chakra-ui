import * as Playground from "@/components/playground"
import { Alert } from "@/compositions/ui/alert"
import { Avatar } from "@/compositions/ui/avatar"
import { Switch } from "@/compositions/ui/switch"
import {
  Badge,
  Button,
  ColorPalette,
  Container,
  Stack,
  Text,
} from "@chakra-ui/react"

const colorPalettes: ColorPalette[] = [
  "gray",
  "red",
  "green",
  "blue",
  "teal",
  "pink",
  "purple",
  "cyan",
  "orange",
  "yellow",
]

const alertStatuses = ["info", "warning", "success", "error"] as const

export default function Page() {
  return (
    <Container py="20" fontSize="sm">
      <Playground.Section>
        <Playground.SectionTitle id="avatar">Avatar</Playground.SectionTitle>
        <Stack gap="2" align="flex-start">
          {colorPalettes.map((colorPalette) => (
            <Stack
              align="center"
              key={colorPalette}
              direction="row"
              gap="10"
              px="4"
            >
              <Text minW="8ch">{colorPalette}</Text>
              <Avatar
                colorPalette={colorPalette}
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
              <Avatar colorPalette={colorPalette} name="Segun Adebayo" />
              <Avatar colorPalette={colorPalette} />
            </Stack>
          ))}
        </Stack>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="avatar">Alert</Playground.SectionTitle>
        <Stack gap="2" align="flex-start">
          {alertStatuses.map((status) => (
            <Stack
              align="center"
              key={status}
              direction="row"
              gap="10"
              px="4"
              width="full"
            >
              <Text minW="8ch">{status}</Text>
              <Stack flex="1">
                <Alert status={status} title="This is the alert title" />
                <Alert status={status} title="This is the alert title" flex="1">
                  This is the alert description
                </Alert>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="avatar">Badge</Playground.SectionTitle>
        <Stack gap="2" align="flex-start">
          {colorPalettes.map((colorPalette) => (
            <Stack
              align="center"
              key={colorPalette}
              direction="row"
              gap="10"
              px="4"
              width="full"
            >
              <Text minW="8ch">{colorPalette}</Text>
              <Badge colorPalette={colorPalette} variant="solid">
                New
              </Badge>
              <Badge colorPalette={colorPalette} variant="outline">
                New
              </Badge>
              <Badge colorPalette={colorPalette} variant="subtle">
                New
              </Badge>
              <Badge colorPalette={colorPalette} variant="surface">
                New
              </Badge>
            </Stack>
          ))}
        </Stack>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="avatar">Button</Playground.SectionTitle>
        <Stack gap="2" align="flex-start">
          {colorPalettes.map((colorPalette) => (
            <Stack
              align="center"
              key={colorPalette}
              direction="row"
              gap="10"
              px="4"
            >
              <Text minW="8ch">{colorPalette}</Text>
              <Button colorPalette={colorPalette}>Button</Button>
              <Button colorPalette={colorPalette} variant="outline">
                Button
              </Button>
              <Button colorPalette={colorPalette} variant="subtle">
                Button
              </Button>
            </Stack>
          ))}
        </Stack>
      </Playground.Section>

      <Playground.Section>
        <Playground.SectionTitle id="switch">Switch</Playground.SectionTitle>
        <Stack gap="2" align="flex-start">
          {colorPalettes.map((colorPalette) => (
            <Stack
              align="center"
              key={colorPalette}
              direction="row"
              gap="10"
              px="4"
            >
              <Text minW="8ch">{colorPalette}</Text>
              <Switch colorPalette={colorPalette} />
              <Switch colorPalette={colorPalette} defaultChecked />
            </Stack>
          ))}
        </Stack>
      </Playground.Section>
    </Container>
  )
}