import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import Stat from './EditableStat'
import Pool from './EditablePool'

export default class Stats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: '1',
      proficienyPerLevel: 2,
      statModifierOffset: -10,
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

  calculateUsedProficiencyPoints() {
    return Object.values(this.state.stats).reduce((current, stat) => current + parseInt(stat.proficiency), 0)
  }

  calculateAvailableProficiencyPoints() {
    return parseInt(this.state.level) * this.state.proficienyPerLevel - this.calculateUsedProficiencyPoints()
  }

  calculateMaxSingleProficiency() {
    return Math.round(parseInt(this.state.level)/2)
  }

  calculateCarryingCapacity() {
    return (parseInt(this.state.stats.brawn.natural) + parseInt(this.state.stats.brawn.proficiency) +parseInt(this.state.stats.brawn.temporary)) * 5
  }

  calculateProficiencyTotal(proficiency) {
    return (parseInt(this.state.stats[proficiency].natural) + parseInt(this.state.stats[proficiency].proficiency) +parseInt(this.state.stats[proficiency].temporary))
  }

  calculateTotalModifier(stat) {
    return this.calculateProficiencyTotal(stat) + this.state.statModifierOffset
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.label}>Level</Text>
          <TextInput
            onChangeText={(value) => this.setState({level: value})}
            value={this.state.level}
            keyboardType='numeric'
          />
        </View>
        <Stat
          name='brawn'
          title='Brawn'
          stat={this.state.stats.brawn}
          statModifierOffset={this.state.statModifierOffset}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <Stat
          name='dexterity'
          title='Dexterity'
          stat={this.state.stats.dexterity}
          statModifierOffset={this.state.statModifierOffset}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <Stat
          name='constitution'
          title='Constitution'
          stat={this.state.stats.constitution}
          statModifierOffset={this.state.statModifierOffset}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <Stat
          name='intelligence'
          title='Intelligence'
          stat={this.state.stats.intelligence}
          statModifierOffset={this.state.statModifierOffset}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <Stat
          name='essence'
          title='Essence'
          stat={this.state.stats.essence}
          statModifierOffset={this.state.statModifierOffset}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <Stat
          name='resolve'
          title='Resolve'
          stat={this.state.stats.resolve}
          statModifierOffset={this.state.statModifierOffset}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <Stat
          name='charisma'
          title='Charisma'
          stat={this.state.stats.charisma}
          statModifierOffset={this.state.statModifierOffset}
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <Stat
          name='perception'
          title='Perception'
          stat={this.state.stats.perception}
          statModifierOffset={this.state.statModifierOffset}s
          onChange={(value, name) => this.handleUpdateStat(value, name)}
          calculateProficiencyTotal={(stat => this.calculateProficiencyTotal(stat))}
          calculateTotalModifier={(stat => this.calculateTotalModifier(stat))}
        />
        <View>
          <View style={styles.row}>
            <Text style={styles.label}>Nat average</Text>
            <Text>{this.calculateAverage()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Used proficiency total</Text>
            <Text>{this.calculateUsedProficiencyPoints()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Remaining proficiency points</Text>
            <Text>{this.calculateAvailableProficiencyPoints()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Max proficiency</Text>
            <Text>{this.calculateMaxSingleProficiency()}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Carrying capacity</Text>
            <Text>{this.calculateCarryingCapacity()}</Text>
        </View>
          <View>
            <Text>Pools</Text>
            <Pool
              title='Life'
              value={parseInt(this.state.level) + this.calculateProficiencyTotal('constitution') + this.calculateTotalModifier('brawn') * 2}
            />
            <Pool
              title='Sanity'
              value={this.calculateProficiencyTotal('resolve') + this.calculateTotalModifier('charisma') * 2 + this.calculateTotalModifier('constitution')}
            />
            <Pool
              title='Mana'
              value={parseInt(this.state.level) + this.calculateProficiencyTotal('essence') + this.calculateTotalModifier('essence') + this.calculateTotalModifier('resolve')}
            />
            <Pool
              title='Exhaustion'
              value={Math.round((this.calculateProficiencyTotal('constitution') + this.calculateProficiencyTotal('resolve')+ this.calculateTotalModifier('resolve')) / 4)}
            />
          </View>
        </View>
      </View>
    )
  }
}

// TODO: Unified styles-file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    paddingEnd: 5,
  }
})
