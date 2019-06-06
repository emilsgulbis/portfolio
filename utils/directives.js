import { getWindowWidth, getWindowHeight } from './functions'

export const mouseMove = {
  inserted: function(el) {
    const movementStrength = 15
    const height = movementStrength / getWindowHeight()
    const width = movementStrength / getWindowWidth()

    document.addEventListener('mousemove', function(e) {
      const pageX = e.pageX - getWindowWidth() / 2
      const pageY = e.pageY - getWindowHeight() / 2
      const newvalueX = width * pageX * -1
      const newvalueY = height * pageY * -1

      const translate = `translate(${newvalueX}px, ${newvalueY}px)`
      el.style.webkitTransform = translate
      el.style.MozTransform = translate
      el.style.msTransform = translate
      el.style.OTransform = translate
      el.style.transform = translate
    })
  }
}
