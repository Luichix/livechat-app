import React from 'react'
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native'
import ActionSheet, { useScrollHandlers } from 'react-native-actions-sheet'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import tokens from '../../styles/tokens'

function ExampleSheet({ sheetId, payload }) {
  const scrollHandlers = useScrollHandlers('1', '2')
  return (
    <ActionSheet
      id={sheetId}
      onBeforeShow={() => {
        console.log('sheet payload', payload?.data)
      }}
      snapPoints={[80, 90, 100]}
      initialSnapIndex={0}
      statusBarTranslucent
      drawUnderStatusBar={true}
      gestureEnabled={true}
      defaultOverlayOpacity={0.3}
    >
      <View
        style={{
          paddingHorizontal: 12,
          maxHeight: '100%',
        }}
      >
        <View style={styles.container}></View>
        <ScrollView {...scrollHandlers} style={styles.scrollview}>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Ionicons
                  name="person-add-outline"
                  size={24}
                  color={tokens.colorSky500}
                  style={{ paddingRight: 10 }}
                />
                <Text style={styles.text}>Assign</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <MaterialCommunityIcons
                  name="robot-off-outline"
                  size={24}
                  color={tokens.colorSky500}
                  style={{ paddingRight: 10 }}
                />
                <Text style={styles.text}>Stop Automation</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Feather
                  name="check-square"
                  size={24}
                  color={tokens.colorSky500}
                  style={{ paddingRight: 10 }}
                />
                <Text style={styles.text}>Finalize</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.footer} />
        </ScrollView>
      </View>
    </ActionSheet>
  )
}

const styles = StyleSheet.create({
  footer: {
    height: 40,
  },
  listItem: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: tokens.colorBlueGray200,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    color: tokens.colorBlueGray600,
    fontWeight: '500',
  },
  btnLeft: {
    width: 30,
    height: 30,
    backgroundColor: '#f0f0f0',
    borderRadius: 100,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  scrollview: {
    width: '100%',
    padding: 12,
  },
})

export default ExampleSheet
