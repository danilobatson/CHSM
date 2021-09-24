import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { useState } from 'react'
const CounterScreen = () => {
  //STATE LOGIC
  const [count, setCount] = useState(0);
  const [color, setColor] = useState([])

  //RANDOM COLOR LOGIC
  const randomRGB = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
		<View>
				<TouchableOpacity>
					{/* COUNTER UI */}
					<Button onPress={() => setCount(count + 1)} title='Increment' />
					<Button onPress={() => setCount(count - 1)} title='Decrement' />
					<Text>The count is: {count}</Text>

					{/* COLOR UI */}
					<Button
						onPress={() => setColor([...color, randomRGB()])}
						title='Add A Color'
					/>
						</TouchableOpacity>
					<FlatList
						data={color}
						keyExtractor={(item) => item}
						renderItem={({ item }) => {
							return (
								<View
									style={{
										alignSelf: 'center',
										height: 100,
										width: 100,
										backgroundColor: item,
									}}></View>
							);
						}}
					/>
		</View>
	);
}

export default CounterScreen

const styles = StyleSheet.create({

})
