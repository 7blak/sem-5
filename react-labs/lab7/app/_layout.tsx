import { Stack } from 'expo-router/stack';
import { PhotoProvider } from './context/PhotoContext';

export default function RootLayout() {
  return (
    <PhotoProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PhotoProvider>
  );
}