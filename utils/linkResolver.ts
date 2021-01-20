// In src/prismic-configuration.js
export const linkResolver = (doc) => {
  // URL for a category type
  if (doc.type === 'blogpost') {
    return `/blog/${doc.uid}`
  }
  // Backup for all other types
  return '/'
} 