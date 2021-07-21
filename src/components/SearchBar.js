import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

function SearchBar({ searchTerm, onChangeTerm, onTermSubmit }) {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name='search' style={styles.iconsStyle} />
			<TextInput
				autoCapitalize='none'
				autoCorrect={false}
				placeholder='Search'
				style={styles.inputStyle}
				value={searchTerm}
				onChangeText={onChangeTerm}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: '#F0EEEE',
		borderRadius: 5,
		marginHorizontal: 15,
		height: 50,
		flexDirection: 'row',
		marginTop: 15,
		marginBottom: 10,
	},
	inputStyle: {
		fontSize: 18,
		flex: 1,
	},
	iconsStyle: {
		alignSelf: 'center',
		fontSize: 35,
		marginHorizontal: 15,
	},
});

export default SearchBar;
