// Regex for mailto links
const mailtoRegex = /^mailto:/

// Regex for tel links
const telRegex = /^tel:/

// Regex for hash links
const hashUrlRegex = /^#/

// Regex for internal Urls (starts with `/`) including single `/`
const internalUrlRegEx = /^\/(?!\/)/
// const internalUrlRegEx = /^(\/[^\s]+)$/

// Regex for external Urls
const externalUrlRegEx =
  /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i

/**
 * Checks if the string is a valid hash link.
 */
export const isHashLink = (str: string): boolean => hashUrlRegex.test(str)

/**
 * Checks if the string is a valid hash link.
 */
export const isEmailLink = (str: string): boolean => mailtoRegex.test(str)

/**
 * Checks if the string is a valid hash link.
 */
export const isPhoneLink = (str: string): boolean => telRegex.test(str)

/**
 * Checks if the string is a special Url such as hash links, `mailto` links or `tel` links.
 */
export const isSpecialUrl = (str: string) => isHashLink(str) || isEmailLink(str) || isPhoneLink(str)

/**
 * Checks if the string is a valid internal link.
 */
export const isInternalUrl = (str: string) => internalUrlRegEx.test(str)

/**
 * Checks if the string is a valid external link.
 */
export const isExternalUrl = (str: string) => externalUrlRegEx.test(str)

/**
 * Checks if the string is a valid Url.
 */
export const isUrl = (str: string) => isExternalUrl(str) || isInternalUrl(str) || isSpecialUrl(str)
