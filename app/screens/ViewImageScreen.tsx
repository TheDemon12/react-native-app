import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import colors from '../config/colors';

export default function ViewImageScreen() {
	return (
		// <View>
		// 	<Text></Text>
		// </View>
		<View style={styles.container}>
			<View style={styles.closeIcon} />
			<View style={styles.deleteIcon} />
			<Image
				resizeMode='contain'
				source={{ uri: 'https://picsum.photos/id/1076/1080/1200' }}
				style={styles.image}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: { backgroundColor: colors.black, flex: 1 },
	closeIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.primary,
		position: 'absolute',
		top: StatusBar.currentHeight! + 10,
		left: 20,
	},
	deleteIcon: {
		width: 50,
		height: 50,
		backgroundColor: colors.secondary,
		position: 'absolute',
		top: StatusBar.currentHeight! + 10,
		right: 20,
	},
	image: { height: '100%', width: '100%' },
});
