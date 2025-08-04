import { Stack } from "expo-router";
import { stackRouterOverride } from "expo-router/build/layouts/StackClient";

export default function RootLayout() {
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false}}/>
  </Stack>
} 
