import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="PhotoView" options={{ title: 'Photo View' }} />
      <Tabs.Screen name="CameraView" options={{ title: 'Camera View' }} />
      <Tabs.Screen name="GalleryView" options={{ title: 'Gallery View' }} />
    </Tabs>
  );
}
