export const linkifyAuthor = (author) => {
  let [name, email] = author.split('<')
  email = email.slice(0, -1)
  return [name, email]
}
