import {Text} from 'react-native'
import {ScrollView} from 'nativewind/dist/preflight'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl={'https://links.papareact.com/gn7'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
      <CategoryCard imgUrl={'https://links.papareact.com/wru'} title={'Testing'} />
    </ScrollView>
  )
}

export default Categories