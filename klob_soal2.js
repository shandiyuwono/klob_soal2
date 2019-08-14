function clothCombination(sets) {
  let arr = []

  sets.forEach(set => {
    set.forEach(newClothe => {
      let found = false
      arr.forEach(currentClothe => {
        if(currentClothe === newClothe) found = true
      })
      if(!found) arr.push(newClothe)
    })
  })

  if (arr.length < sets.length) return false
  else if(arr.length >= sets.length) return `true. Example combination: ${arr}`
}

console.log(clothCombination([["JakartaJS"], ["AWSome Day", "Elixir"], ["GoJakarta", "Elixir"]]))
console.log(clothCombination([["JakartaJS", "Elixir"], ["Elixir"], ["JakartaJS", "Elixir"]]))