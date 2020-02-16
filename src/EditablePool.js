import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default class Pool extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Max value</Text>
          <Text>{this.props.value}</Text>
        </View>
      </View>
    )
  }
}

Pool.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#bbb'
  },
  label: {
    paddingEnd: 2,
  }
})