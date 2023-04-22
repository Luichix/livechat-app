import PropTypes from 'prop-types'
import dayjs from 'dayjs'
export const StylePropType = PropTypes.oneOfType([
  PropTypes.array,
  PropTypes.object,
  PropTypes.number,
  PropTypes.bool,
])
export function isSameDay(currentMessage, diffMessage) {
  if (!diffMessage || !diffMessage.datetime) {
    return false
  }
  const currentCreatedAt = dayjs(currentMessage.datetime)
  const diffCreatedAt = dayjs(diffMessage.datetime)
  if (!currentCreatedAt.isValid() || !diffCreatedAt.isValid()) {
    return false
  }
  return currentCreatedAt.isSame(diffCreatedAt, 'day')
}
export function isSameUser(currentMessage, diffMessage) {
  return !!(
    diffMessage &&
    diffMessage.user &&
    currentMessage.user &&
    diffMessage.user.nid === currentMessage.user.nid
  )
}
//# sourceMappingURL=utils.js.map
