// @flow

// The argument is a full url. The function returns the last two elements of the
// domain.
export const secondLevelDomain = (url:string): string => {
  // Create a temp a-element to use the api from it
  let element = document.createElement('a')
  element.href = url
  if (element.protocol === 'file:') {
    return 'file'
  }
  return element.hostname.split('.').slice(-2).join('.')
}

export const translateHTML = (): void => {
  const elements = document.querySelectorAll('[data-i18n]')
  for (const element of elements) {
    const message = element.getAttribute('data-i18n')
    if (message == null) {
      throw new Error('invalid attribute data-i18n on element ' + element.nodeName)
    }
    element.textContent = browser.i18n.getMessage(message)
  }
}