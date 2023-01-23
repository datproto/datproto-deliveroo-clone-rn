import {Text} from 'react-native'
import {ScrollView} from 'nativewind/dist/preflight'
import CategoryCard from './CategoryCard'
import {useEffect, useState} from 'react'

import sanityClient, {urlFor} from '../sanity'

const Categories = () => {

  const [cats, setCats] = useState([])

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == 'category']
    `).then(data => (
      setCats(data)
    ))
  }, [])

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {cats.map(c => (
        <CategoryCard key={c._id} imgUrl={urlFor(c.image).width(200).url()} title={c.name} />
      ))}
    </ScrollView>
  )
}

export default Categories