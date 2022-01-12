const cleanup = (input) => {
  return input.filter(row => row.name)
    .filter((row) => {
      return delete row['']
    })
}

export default cleanup
