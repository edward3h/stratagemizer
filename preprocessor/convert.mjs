import sanitizeHtml from 'sanitize-html'

const description = (input) => {
  return sanitizeHtml(input, {
    allowedTags: ['p', 'span', 'em'],
    allowedClasses: { span: ['kwb'] },
    transformTags: {
      a: 'em',
    },
  })
}

const convert = (value, headerName) => {
  if (headerName === 'description')
    return description(value)

  return value
}

export default convert
