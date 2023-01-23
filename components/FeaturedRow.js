import React from 'react'
import {Text, View} from 'react-native'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import {ScrollView} from 'nativewind/dist/preflight'
import RestaurantCard from './RestaurantCard'

function FeaturedRow({id, title, description}) {
  return (
    <View>
      <View className={'mt-4 flex-row items-center justify-between px-4'}>
        <Text className={'font-bold text-lg'}>{title}</Text>
        <ArrowRightIcon color={'#00CCBB'}/>
      </View>

      <Text className={'text-xs text-gray-500 px-4'}>{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showHorizontalScrollIndicator={false}
        className={'pt-4'}
      >
        {/* Restaurant Card */}
        <RestaurantCard
          id={123}
          imgUrl={'https://links.papareact.com/gn7'}
          title={'Yo! Sprint Roll'}
          rating={4.5}
          genre={'Vietnamese'}
          address={'123 Phao Dai Lang St'}
          short_description={'Amazing traditional Sprint Roll restaurant'}
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow