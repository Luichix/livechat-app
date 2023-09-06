import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import tokens from '../../src/styles/tokens'

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Pressable>
          <View style={[styles.card, styles.borderBottom]}>
            <View style={styles.option}>
              <Text style={styles.label}>Centro de Ayuda</Text>
            </View>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.card, styles.borderBottom]}>
            <View style={styles.option}>
              <Text style={styles.label}>Contáctanos</Text>
            </View>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.card, styles.borderBottom]}>
            <View style={styles.option}>
              <Text style={styles.label}>Condiciones y Privacidad</Text>
            </View>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.card]}>
            <View style={styles.option}>
              <Text style={styles.label}>Licencias</Text>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colorBlue50,
    // alignItems: 'start',
    // justifyContent: 'start',
    padding: 20,
  },
  section: {
    flexDirection: 'column',
    width: '100%',
    paddingTop: 20,
  },
  group: {
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  card: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderBottomColor: '#eee',
  },
  borderBottom: {
    borderBottomWidth: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333333',
  },
})
