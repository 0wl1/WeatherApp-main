import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function Welcome({ navigation }) {
	const [name, setName] = useState('')
	return (
		<View style={styles.container}>
			<Text style={styles.temp}>Second Screen</Text>

			<TextInput
				onChangeText={setName}
				value={name}
				style={{
					borderWidth: 1,
					borderColor: 'black',
					fontSize: 16,
					color: 'white',
					width: 300,
					height: 40,
					marginVertical: 20,
					paddingHorizontal: 10,
				}}
				placeholder='Enter you name'
				placeholderTextColor={'gray'}
			/>

			<Button
				title='Go to weather'
				onPress={() => {
					if (name.length > 0) navigation.navigate('Weather', { name: name })
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(31,31,31,1)',
		alignItems: 'center',
		justifyContent: 'center',
	},
	weatherImagesSize: {
		width: 100,
		height: 100,
	},

	temp: {
		fontSize: 30,
		color: '#fff',
		fontWeight: '500',
	},

	feelslike: {
		fontSize: 15,
		color: '#fff',
		fontWeight: '400',

		marginTop: 7,
	},

	city: {
		fontSize: 20,
		color: '#fff',

		marginTop: 10,
	},

	dataContainer: {
		flexDirection: 'row',
		gap: 30,
	},

	dataBlock: {
		alignItems: 'center',
		justifyContent: 'center',

		gap: 10,

		marginTop: 25,
	},

	dataSpeedHum: {
		fontSize: 17,
		color: '#fff',
	},
})
