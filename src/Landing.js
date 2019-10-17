import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import { Button } from 'native-base';
import myBackground from '../assets/landing.jpg';

export default class Landing extends React.Component {
	render() {
		return (
			<View>
				<Image source={myBackground} />
				<View style={styles.viewStyle}>
					<Text>Welcom to pokeSearch</Text>
					<Button
						block={true}
						style={styles.viewStyle.buttonStyles}
						onPress={() => this.props.switchScreen('search')}
					>
						<Text>Start Searching</Text>
					</Button>
				</View>
			</View>
		);
	}
}

const styles = {
	viewStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		right: '30%',
		top: '40%'
	}
};
