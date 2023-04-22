import PropTypes from 'prop-types'
import React from 'react' // { useEffect, useState }
import { StyleSheet, View } from 'react-native' // , Keyboard
import { Composer } from './Composer'
import { Send } from './Send'
import { Actions } from './Actions'
import Color from './Color'
import { StylePropType } from './utils'
import tokens from '../../styles/tokens'
const styles = StyleSheet.create({
  container: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: Color.defaultColor,
    backgroundColor: tokens.colorCoolGray50,
    padding: 10,
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    // justifyContent: 'space-between',
  },
  accessory: {
    height: 44,
  },
})
export function InputToolbar(props) {
  const { containerStyle, ...rest } = props
  const { renderActions, onPressActionButton, renderAccessory } = rest

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.primary, props.primaryStyle]}>
        {(renderActions === null || renderActions === void 0
          ? void 0
          : renderActions(rest)) ||
          (onPressActionButton && <Actions {...rest} />)}
        <Composer {...props} />
        <Send {...props} />
      </View>
      {renderAccessory && (
        <View style={[styles.accessory, props.accessoryStyle]}>
          {renderAccessory(props)}
        </View>
      )}
    </View>
  )
}
InputToolbar.propTypes = {
  renderAccessory: PropTypes.func,
  renderActions: PropTypes.func,
  onPressActionButton: PropTypes.func,
  containerStyle: StylePropType,
  primaryStyle: StylePropType,
  accessoryStyle: StylePropType,
}
//# sourceMappingURL=InputToolbar.js.map
