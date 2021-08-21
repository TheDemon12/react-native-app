import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import logo from './../assets/logo.png';

export default function WelcomeScreen() {
	return (
		<ImageBackground
			style={styles.background}
			source={{
				uri: 'https://picsum.photos/id/1050/1080/1920',
				height: 1920,
				width: 1080,
			}}>
			<View style={styles.logoContainer}>
				<Image source={logo} style={styles.logo} />
				<Text style={styles.logoText}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.loginButton}></View>
			<View style={styles.registerButton}></View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	logoContainer: {
		position: 'absolute',
		top: 100,
		alignItems: 'center',
	},
	logo: { height: 100, width: 100 },
	logoText: { paddingTop: 10, fontSize: 20 },
	loginButton: {
		width: '100%',
		height: 80,
		backgroundColor: '#FF8A65',
	},
	registerButton: {
		width: '100%',
		height: 80,
		backgroundColor: '#81C784',
	},
});
