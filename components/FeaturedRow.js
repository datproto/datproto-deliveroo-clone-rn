import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import {ScrollView} from 'nativewind/dist/preflight'
import RestaurantCard from './RestaurantCard'

import sanityClient from '../sanity'

function FeaturedRow({id, title, description}) {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == 'featured' && _id == $id] {
        ...,
        restaurants[] -> {
          ...,
          dishes[] -> {
            _id,
            name,
            short_description,
            price,
            image
          },
          type -> {
            name
          }
        }
      }[0]
    `, {id}).then(({restaurants: rests}) => {
      setRestaurants(rests)
    })
  }, [])

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
        {restaurants?.map(r => (
          <RestaurantCard
            key={r._id}
            id={r._id}
            imgUrl={r.image}
            title={r.name}
            rating={r.rating}
            genre={r.type?.name}
            address={r.address}
            short_description={r.short_description}
            dishes={r.dishes}
            long={r.long}
            lat={r.lat}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow