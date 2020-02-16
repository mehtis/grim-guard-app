import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Stat from './EditableStat'

export default class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: '1',
      stats: {
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
  }

  handleUpdateStat(value, name) {
    this.setState({stats: {
      ...this.state.stats,
      [name]: value
    }
    })
  }

  calculateAverage() {
    return Object.values(this.state.stats).reduce((current, stat) => current + parseInt(stat.natural), 0) / Object.keys(this.state.stats).length
  }

  render() {
    return (
      <View style={styles.container}>
        <Stat
          name='brawn'
          title='Brawn'
          stat={this.state.stats.brawn}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Stat
          name='dexterity'
          title='Dexterity'
          stat={this.state.stats.dexterity}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Stat
          name='constitution'
          title='Constitution'
          stat={this.state.stats.constitution}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Stat
          name='intelligence'
          title='Intelligence'
          stat={this.state.stats.intelligence}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Stat
          name='essence'
          title='Essence'
          stat={this.state.stats.essence}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Stat
          name='resolve'
          title='Resolve'
          stat={this.state.stats.resolve}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Stat
          name='charisma'
          title='Charisma'
          stat={this.state.stats.charisma}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Stat
          name='perception'
          title='Perception'
          stat={this.state.stats.perception}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
        />
        <Text>Average</Text>
        <Text>{this.calculateAverage()}</Text>
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
