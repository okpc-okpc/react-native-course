import React from 'react';
import { Button, SectionList, StyleSheet, Text, View } from 'react-native';
import {Constants} from 'expo'

import contacts, { compareNames } from './contacts'
import Row from './Row'

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts,
  }

  toggleContacts = () => {
    this.setState(prevState => ({showContacts: !prevState.showContacts}))
  }

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  renderItem = ({item}) => <Row {...item} />
  
  renderSectionHeader = obj => <Text>{obj.section.title}</Text>

  render() {
    return (
      <View style={styles.container}>
        <Button title="toggle contacts" onPress={this.toggleContacts} />
        <Button title="sort" onPress={this.sort} />
        { this.state.showContacts && (
            <SectionList
              renderItem={this.renderItem}
              renderSectionHeader={this.renderSectionHeader}
              sections={[{
                title: 'A',
                data: this.state.contacts,
              }]}
            />
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
