import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default class Stat extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <TextInput
          onChangeText={(value) => this.props.onChange({...this.props.stat, natural: value}, this.props.name)}
          value={this.props.stat.natural}
          keyboardType='numeric'
        />
      </View>
    )
  }
}

Stat.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stat: PropTypes.shape({
    natural: PropTypes.string.isRequired,
    proficiency: PropTypes.string,
    temporary: PropTypes.string
  }),
  onChange: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})