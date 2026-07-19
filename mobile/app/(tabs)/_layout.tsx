import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 80,
          shadowColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Acceuil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="church-outline"
              size={28}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Bibliothèque",
          tabBarIcon: ({ color }) => (
            <Ionicons name="library-outline" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="songs"
        options={{
          title: "Cantiques",
          tabBarIcon: ({ color }) => (
            <Feather name="music" size={28} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="sermons"
        options={{
          title: "Prédications",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cross" size={28} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
