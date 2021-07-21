import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

function SearchScreen() {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchApi, results, errorMsg] = useResults();

	const filteredResultByPrice = (price) => {
		return results.filter((result) => {
			return result.price === price;
		});
	};

	return (
		<View style={{ flex: 1 }}>
			<SearchBar
				searchTerm={searchTerm}
				onChangeTerm={setSearchTerm}
				onTermSubmit={() => searchApi(searchTerm)}
			/>
			<View>{errorMsg ? <Text>{errorMsg}</Text> : null}</View>
			<ScrollView>
				<ResultList
					title='Cost Effective'
					results={filteredResultByPrice('$')}
				/>
				<ResultList title='Bit Pricier' results={filteredResultByPrice('$$')} />
				<ResultList
					title='Big Spender'
					results={filteredResultByPrice('$$$')}
				/>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	// container: {
	// 	marginLeft: 15,
	// },
});
export default SearchScreen;
