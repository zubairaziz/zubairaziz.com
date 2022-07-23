const slugToTitleCase = (slug: string) =>
  slug
    .toLowerCase()
    .split('-')
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')

export default slugToTitleCase
