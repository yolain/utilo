import Utilo from '../src/index'
(function (window) {
  if (typeof window !== "undefined") {
    window.Utilo = Utilo
  } else {
    throw new Error('window is not defined')
  }
})(window)
