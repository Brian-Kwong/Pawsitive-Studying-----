import { Stack } from "expo-router/stack";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(Tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
