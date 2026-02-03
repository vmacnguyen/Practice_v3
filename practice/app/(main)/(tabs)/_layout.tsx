import { Tabs } from 'expo-router';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Home, History, Video, Plus } from 'lucide-react-native';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60 + insets.bottom,
          backgroundColor: 'white',
          borderTopColor: '#E5E7EB',
          borderTopWidth: 1,
          paddingTop: 10,
          paddingBottom: insets.bottom + 5,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Home
                size={24}
                color={focused ? '#155DFC' : '#6A7282'}
                strokeWidth={2}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: focused ? '#155DFC' : '#6A7282',
                  marginTop: 4,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="practice"
        options={{
          title: 'Practice',
          tabBarIcon: ({ focused }) => (
            <View style={{ top: -20 }}>
              <LinearGradient
                colors={['#155DFC', '#9810FA']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 28,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#155DFC',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 5,
                }}
              >
                <Video size={28} color="white" fill="white" />
              </LinearGradient>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: focused ? '#155DFC' : '#6A7282',
                  marginTop: 4,
                  textAlign: 'center',
                }}
              >
                Practice
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <History
                size={24}
                color={focused ? '#155DFC' : '#6A7282'}
                strokeWidth={2}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: '500',
                  color: focused ? '#155DFC' : '#6A7282',
                  marginTop: 4,
                }}
              >
                History
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}