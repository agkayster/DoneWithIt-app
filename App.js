/* View is similar to div in web, while Text is used for h1 and co */
import {
	StyleSheet,
	Dimensions,
	Text,
	View,
	Image,
	TouchableHighlight,
	Button,
	Alert,
	SafeAreaView,
	Platform,
	StatusBar,
} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

// import {
// 	useImageDimensions,
// 	useDeviceOrientation,
// } from '@react-native-community/hooks';

export default function App() {
	// console.log('get image dimensions =>', useDeviceOrientation());
	// const { landscape } = useDeviceOrientation();
	// const handlePress = () => console.log('text clicked by me');

	// console.log(Dimensions.get('screen'));

	return (
    <ViewImageScreen />
    
		// <WelcomeScreen />

		// <View style={{ backgroundColor: '#fff', flex: 1 }}>
		// 	<View
		// 		style={{
		// 			zIndex: 2,
		// 			position: 'absolute',
		// 			left: '40%',
		// 			top: '10%',
		// 		}}>
		// 		<Image
		// 			style={{
		// 				width: 100,
		// 				height: 100,
		// 			}}
		// 			source={require('./assets/logo-red.png')}
		// 		/>
		// 	</View>
		// 	<Text
		// 		style={{
		// 			position: 'absolute',
		// 			left: '30%',
		// 			top: '22.8%',
		// 			zIndex: 2,
		// 		}}>
		// 		Sell what you don't need
		// 	</Text>
		// 	{/* <Image
		// 		style={{
		// 			width: 100,
		// 			height: 100,
		// 			zIndex: 2,
		// 			position: 'absolute',
		// 			left: '40%',
		// 			top: '10%',
		// 		}}
		// 		source={require('./assets/logo-red.png')}
		// 	/>
		// 	<Text
		// 		style={{
		// 			zIndex: 2,
		// 			position: 'absolute',
		// 			left: '30%',
		// 			top: '25%',
		// 		}}>
		// 		Sell what you don't need
		// 	</Text> */}
		// 	<Image
		// 		style={styles.stretch}
		// 		source={require('./assets/background.jpg')}
		// 	/>
		// 	<View
		// 		style={{
		// 			backgroundColor: 'tomato',
		// 			height: '10%',
		// 		}}
		// 	/>
		// 	<View
		// 		style={{
		// 			backgroundColor: 'dodgerblue',
		// 			height: '10%',
		// 		}}
		// 	/>
		// </View>
		// <View
		// 	style={{
		// 		backgroundColor: '#fff',
		// 		flex: 1,
		// 		flexDirection: 'row',
		// 		justifyContent: 'center',
		// 		alignItems: 'center',
		// 		alignContent: 'center',
		// 		flexWrap: 'wrap',
		// 	}}>
		// 	<View
		// 		style={{
		// 			backgroundColor: 'dodgerblue',
		// 			width: 100,
		// 			height: 100,
		// 		}}
		// 	/>
		// 	<View
		// 		style={{
		// 			backgroundColor: 'gold',
		// 			width: 100,
		// 			height: 100,
		// 			top: 20,
		// 			left: 40,
		// 			position: 'absolute',
		// 		}}
		// 	/>
		// 	<View
		// 		style={{ backgroundColor: 'tomato', width: 100, height: 100 }}
		// 	/>
		// </View>
		// <SafeAreaView style={styles.container}>
		// 	<View
		// 		style={{
		// 			backgroundColor: 'dodgerblue',
		// 			width: '100%',
		// 			height: '30%',
		// 		}}></View>
		// </SafeAreaView>
		// <SafeAreaView style={styles.container}>
		// 	{/* <Button color="orange" title='click me' onPress={() => Alert.prompt("my Title", "My Message", (text) => console.log(text))} /> */}

		// 	<Button
		// 		color='orange'
		// 		title='click me'
		// 		onPress={() =>
		// 			Alert.alert('My title', 'my message', [
		// 				{
		// 					text: 'Yes',
		// 					onPress: () => console.log('Yes'),
		// 				},
		// 				{ text: 'No', onPress: () => console.log('No') },
		// 			])
		// 		}
		// 	/>
		// </SafeAreaView>
		// <View style={styles.container}>
		//   <Text numberOfLines={1} onPress={handlePress}>Hello Ejike, let us make this your code really really long, in short very long and let us see what happens</Text>
		//   {/* for images from the internet */}
		//   <TouchableHighlight onPress={() => console.log("image highlight")}>
		//   <Image source={{
		//     width: 100,
		//     height: 100,
		//     uri: "https://picsum.photos/200/300?grayscale"
		//   }} />
		//   </TouchableHighlight>

		//   {/* for local assets on our system */}
		//   {/* <Image style={styles.stretch} source={require("./assets/icon.png")}/> */}
		//   <StatusBar style="auto" />
		// </View>
	);
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: 'white',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	stretch: {
// 		height: '80%',
// 		width: '100%',
// 		zIndex: 1,
// 	},
// });
// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: 'white',
// 		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
// 		// alignItems: 'center',
// 		// justifyContent: 'center',
// 	},
// 	stretch: {
// 		height: 100,
// 		width: 100,
// 	},
// });
