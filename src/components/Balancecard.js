import { View, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './View/CategoryCard';

export default function Balancecard() {
  return (
    <View>
            <View style={{ flex: 1}}>
            <View style={{ height:220 , marginTop: 5 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={false}
                >

                    <CategoryCard imageUri={require('../imgs/Ornament.png')} name="Darlene Robertson" cardnum="2423 3581 9503 2412" dollor="275.43" ep="25/28"/>

                    <CategoryCard imageUri={require('../imgs/Group-2.png')} name="Albert Flores" cardnum="2423 3581 9505 2417"  dollor="375.53" ep="24/26"/>

                    <CategoryCard imageUri={require('../imgs/Card-03.png')} name="Hlbert Clores" cardnum="3423 3584 9503 2512"  dollor="355.42" ep="20/28"/>
                  
              </ScrollView>
            </View>
            </View>
    </View>
  )
}