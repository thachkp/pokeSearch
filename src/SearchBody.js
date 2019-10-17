import React from 'react';
import { ScrollView, Text, Image, Dimensions } from 'react-native';
import { View } from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class SearchBody extends React.Component {
	render() {
		const pokemon = this.props.data;
		if (!pokemon) {
			return <View />;
		}
		return (
			<ScrollView style={{ flex: 1 }}>
				<Text style={styles.header}>
					#{pokemon.id} - {pokemon.name.toUpperCase()}
				</Text>
				<View style={styles.viewStyles}>
					<Image
						source={{ uri: pokemon.sprites.front_default }}
						style={styles.img}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = {
	header: {
		fontSize: 30,
		color: 'red',
		textAlign: 'center'
	},
	viewStyles: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	img: {
		height: 200,
		width: 200,
		alignItems: 'center',
		justifyContent: 'center'
	}
};
