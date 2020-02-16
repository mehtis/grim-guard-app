import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

import Stat from './Stat'

export default class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: '1',
      brawn: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      },
      dexterity: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      },
      constitution: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      },
      intelligence: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      },
      essence: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      },
      resolve: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      },
      charisma: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      },
      perception: {
        natural: '10',
        proficiency: '0',
        temporary: '0'
      }
    }
  }

  changeStat(value, name) {
    console.log(value)
    console.log(name)
    this.setState({[name]: value})
  }

  render() {
    return (
      <View style={styles.container}>
      <Stat
        name='brawn'
        title='Brawn'
        stat={this.state.brawn}
        onChange={(value, name) => this.changeStat(value, name)}
      />
        <Stat
          name='dexterity'
          title='Dexterity'
          stat={this.state.dexterity}
          onChange={(value, name) => this.changeStat(value, name)}
        />
        <Stat
          name='constitution'
          title='Constitution'
          stat={this.state.constitution}
          onChange={(value, name) => this.changeStat(value, name)}
        />
        <Stat
          name='intelligence'
          title='Intelligence'
          stat={this.state.intelligence}
          onChange={(value, name) => this.changeStat(value, name)}
        />
        <Stat
          name='essence'
          title='Essence'
          stat={this.state.essence}
          onChange={(value, name) => this.changeStat(value, name)}
        />
        <Stat
          name='resolve'
          title='Resolve'
          stat={this.state.resolve}
          onChange={(value, name) => this.changeStat(value, name)}
        />
        <Stat
          name='charisma'
          title='Charisma'
          stat={this.state.charisma}
          onChange={(value, name) => this.changeStat(value, name)}
        />
        <Stat
          name='perception'
          title='Perception'
          stat={this.state.perception}
          onChange={(value, name) => this.changeStat(value, name)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
