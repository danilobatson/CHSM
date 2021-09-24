import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ImageDetail from '../Components/ImageDetail'

const About = () => {
  const placesLived = [
		{ place: 'The desert', timeZone: 'PST' },
		{ place: 'Texas', timeZone: 'CT' },
		{ place: 'Malibu', timeZone: 'PST' },
		{ place: 'Washington D.C.', timeZone: 'EST' },
		{ place: 'Anaheim', timeZone: 'PST' },
		{ place: 'Tustin', timeZone: 'PST' },
	];
  return (
    <View>
      <Text style={styles.header}>Places Lived</Text>
      <FlatList
        keyExtractor={(item) => item.place}
        // SHOWS LIST HORIZONTALLY INSTEAD OF VERTICALLY
        // horizontal
        // showsHorizontalScrollIndicator={false}
        data={placesLived}
        renderItem={({item}) => {
          return <Text style={styles.placesStyle}>*{item.place} - Time zone: {item.timeZone}</Text>
        }}
      />
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  header: {
    fontSize: 35
  },
  placesStyle: {
    fontSize: 20,
    marginVertical: 15,
    marginLeft: 10
  }
})
