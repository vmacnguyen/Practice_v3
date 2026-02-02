import { Tabs } from 'expo-router';
import { Home, Video, History } from 'lucide-react-native';
import { View } from '@gluestack-ui/themed';
import { useToken } from '@gluestack-ui/themed';

export default function TabLayout() {
  const primaryColor = useToken('colors', 'primary500');
  const grayColor = useToken('colors', 'coolGray400');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarActiveTintColor: primaryColor,
        tabBarInactiveTintColor: grayColor || 'gray',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="practice"
        options={{
          title: 'Practice',
          tabBarIcon: ({ focused }) => (
            <View
              bg="$primary500"
              p="$3"
              rounded="$full"
              mt={-20}
              hardShadow="2"
            >
              <Video color="white" size={24} />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => <History color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
