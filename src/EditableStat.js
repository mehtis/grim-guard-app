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
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Nat</Text>
          <TextInput
            onChangeText={(value) => this.props.onChange({...this.props.stat, natural: value}, this.props.name)}
            value={this.props.stat.natural}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Prof</Text>
          <TextInput
            onChangeText={(value) => this.props.onChange({...this.props.stat, proficiency: value}, this.props.name)}
            value={this.props.stat.proficiency}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Temp</Text>
          <TextInput
            onChangeText={(value) => this.props.onChange({...this.props.stat, temporary: value}, this.props.name)}
            value={this.props.stat.temporary}
            keyboardType='numeric'
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Proficiency total</Text>
          <Text>{this.props.calculateProficiencyTotal(this.props.name)}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Total modifier</Text>
          <Text>{this.props.calculateTotalModifier(this.props.name)}</Text>
        </View>
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
  }).isRequired,
  statModifierOffset: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  calculateProficiencyTotal: PropTypes.func,
  calculateTotalModifier: PropTypes.func
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