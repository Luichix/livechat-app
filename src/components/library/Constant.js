import { Platform } from 'react-native'
export const MIN_COMPOSER_HEIGHT = Platform.select({
  ios: 33,
  android: 41,
  web: 34,
})
export const MAX_COMPOSER_HEIGHT = 100
export const DEFAULT_PLACEHOLDER = 'Escribe un mensaje aquí'
export const DATE_FORMAT = 'ddd, DD MMM'
export const TIME_FORMAT = 'LT'
export const TEST_ID = {
  WRAPPER: 'GC_WRAPPER',
  LOADING_WRAPPER: 'GC_LOADING_CONTAINER',
  SEND_TOUCHABLE: 'GC_SEND_TOUCHABLE',
}
//# sourceMappingURL=Constant.js.map
