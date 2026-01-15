import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as splashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

splashScreen.preventAutoHideAsync();

export default function TabLayout() {
  useEffect(() => {
    setTimeout(async () => {
      await splashScreen.hideAsync();
    }, 1000);
  }, []);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff530aff', // Premium blue
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#1c1c1e', // Dark theme background
          borderTopColor: '#333',
        },
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="house" color={color} size={28} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={28} />
          ),
        }}
      />

    </Tabs>
  );
}

