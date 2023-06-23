import React, { useLayoutEffect } from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {ChevronDownIcon} from 'react-native-heroicons/outline'
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
    <SafeAreaView>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{ uri: "https://indiehoy.com/wp-content/uploads/2022/01/sigrid.jpg" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
      <View>
        <Text className='font-bold text-gray-400 text-xs'>Delivery ahora!</Text>
        <Text className='font-bold text-xl'>Ubicacion actual<ChevronDownIcon size={20}/></Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;