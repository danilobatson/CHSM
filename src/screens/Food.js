import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../Components/SearchBar';

const Food = () => {

	const [name, setName] = useState(' ');

  

	return (
		<View>
			<Text style={styles.heading}>Food Screen</Text>
			<SearchBar
      name={name}
      onChangeText={(newName) => setName(newName) }
      onSubmit={() => console.log('submitted')}
      />
		</View>
	);
};

export default Food;

const styles = StyleSheet.create({
	heading: {
		textAlign: 'center',
		fontSize: 40,
		marginVertical: 10,
		padding: 5,
	},
});
