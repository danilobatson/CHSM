import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
  return (
		<View style={styles.container}>
			<Text style={styles.header}>{title}</Text>
			<FlatList
				horizontal
        showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={(results) => results.id}
				renderItem={({ item }) => {
         {console.log(item)}
					return (
            <ResultsDetail result={item}/>
            )
				}}
			/>
		</View>
	);
}

export default ResultsList

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: '600',
    padding: 5,
    marginLeft: 20,
    marginBottom: 5
  },
  container: {
    marginBottom: 15
  }
})
