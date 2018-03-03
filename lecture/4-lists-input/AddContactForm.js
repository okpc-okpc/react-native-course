import React from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
	box: {
		paddingTop: 40,
	},
	input: {
		padding: 5,
		borderColor: 'black',
		borderWidth: 1,
	},
})

export default class AddContactForm extends React.Component {
	static propTypes = {
		addContact: PropTypes.func
	}

	state = {
		name: '',
		phone: '',
	}

	handleNameChange = name => {
		this.setState({ name })
	}
	handlePhoneChange = phone => {
		this.setState({ phone })
	}
	render() {
		return (
			<View style={styles.box}>
				<TextInput
					style={styles.input}
					onChangeText={this.handleNameChange}
					value={this.state.name}
				/>
				<TextInput
					style={styles.input}
					onChangeText={this.handlePhoneChange}
					keyboardType="numeric"
					value={this.state.phone}
				/>
				<Button title="Add Contact" />
			</View>
		)
	}
}