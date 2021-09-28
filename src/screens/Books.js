import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'


const Books = () => {
  const lorem =
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  return (
		<View style={styles.viewStyle}>
			<Text style={styles.heading}>Recommended Reading</Text>
			<View style={styles.imageView}>
				<Image
					style={styles.books}
					source={require('../../assets/CHSM/hero.jpg')}
				/>
				<Image
					style={styles.books}
					source={require('../../assets/CHSM/hero.jpg')}
				/>
				<Image
					style={styles.books}
					source={require('../../assets/CHSM/hero.jpg')}
				/>
			</View>
		</View>
	);
}

export default Books

const styles = StyleSheet.create({
	heading: {
		textAlign: 'center',
		fontSize: 40,
		marginVertical: 10,
		padding: 5,
		borderWidth: 1,
		borderColor: 'red',
	},
	viewStyle: {
		borderWidth: 1,
		borderColor: 'grey',
	},
	books: {
		height: 110,
		width: 110,
		padding: 10,
		margin: 5,
		borderColor: 'orange',
		borderWidth: 5,
	},
	imageView: {
		borderColor: 'green',
		borderWidth: 5,
		flexDirection: 'row',
	},
});
