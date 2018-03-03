import React from 'react'
import { SectionList } from 'react-native'
import PropTypes from 'prop-types'

const ContactsList = props => {
	return (
		<SectionList
			renderItem={props.renderItem}
			renderSectionHeader={props.renderSectionHeader}
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