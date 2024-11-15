import { Stack , Link } from 'expo-router';
import {SafeAreaView} from 'react-native-safe-area-context'
import { useEffect } from 'react';
import { LogBox, View, Text } from 'react-native';
import { notes } from '~/components/data';


export default function Home() {
  return (
    <>
      <Stack.Screen options={{title : "Live Location of Aditya Jha",  headerShown: false}} />
      <SafeAreaView className = "">
        <View className = "text-center bg-black mt-2 mx-4">
          
        </View>
      </SafeAreaView>
    </>
  );
}
