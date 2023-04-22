String.prototype.formatPhone = function (sep) {
  if (typeof sep === 'undefined') {
    sep = ' '
  }

  var num = this.replace(/[^\d+]/g, '')
  console.log(num)
  var len = num.length

  if (len < 7) {
    return num
  } else if (len < 10) {
    return num.replace(
      /(\d{1,3})(\d{3})(\d{3})/,
      '$1' + sep + '$2' + sep + '$3'
    )
  } else {
    return num.replace(/(\d+)(\d{4})(\d{4})/, '$1' + sep + '$2' + sep + '$3')
  }
}

var phone = '+50584584479'.formatPhone(' ')

console.log(phone)

export function formatPhone(phone) {
  const sep = ' '

  const num = phone.replace(/[^\d+]/g, '')
  console.log(num)
  const len = num.length

  if (len < 7) {
    return num
  } else if (len < 10) {
    return num.replace(
      /(\d{1,3})(\d{3})(\d{3})/,
      '$1' + sep + '$2' + sep + '$3'
    )
  } else {
    return num.replace(/(\d+)(\d{4})(\d{4})/, '$1' + sep + '$2' + sep + '$3')
  }
}
