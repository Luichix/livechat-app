/**
 * Format Phone
 * Convert the string phone number to international number format.
 *
 * @param {String} phone
 * @returns {String}
 */

export default function formatPhone(phone: string) {
  const sep = ' '

  const num = phone.replace(/[^\d+]/g, '')
  const len = num.length

  if (len < 7) {
    return num
  } else if (len < 10) {
    return num.replace(
      /(\d{1,3})(\d{3})(\d{3})/,
      '$1' + sep + '$2' + sep + '$3',
    )
  } else {
    return num.replace(/(\d+)(\d{4})(\d{4})/, '$1' + sep + '$2' + sep + '$3')
  }
}
