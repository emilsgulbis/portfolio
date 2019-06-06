export const getAge = function(dateString) {
  const today = new Date()
  const birthDate = new Date(dateString)
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  return age
}

export const getWindowWidth = function() {
  const el = document.documentElement
  const body = document.getElementsByTagName('body')[0]

  return window.innerWidth || el.clientWidth || body.clientWidth
}

export const getWindowHeight = function() {
  const el = document.documentElement
  const body = document.getElementsByTagName('body')[0]

  return window.innerHeight || el.clientHeight || body.clientHeight
}
