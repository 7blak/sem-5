import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Countries' }} />
      <Stack.Screen name="details/[cca3]" options={{ title: 'Country Details' }} />
    </Stack>
  );
}
