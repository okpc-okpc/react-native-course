import React from 'react'
import { SectionList, Text } from 'react-native'
import PropTypes from 'prop-types'
import Row from './Row'

const renderItem = ({ item }) => <Row {...item} />

const renderSectionHeader = obj => <Text>{obj.section.title}</Text>

const ContactsList = props => {
	return (
		<SectionList
			renderItem={renderItem}
			renderSectionHeader={renderSectionHeader}
			sections={[{
				title: 'A',
				data: props.contacts,
			}]}
		/>
	)
}

ContactsList.propTypes = {
	renderItem: PropTypes.func,
	renderSectionHeader: PropTypes.func,
	contacts: PropTypes.array
}

export default ContactsList