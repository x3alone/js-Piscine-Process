function invert(obj) {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [v, k])
    )
  }

console.log(invert({name: 'therealisbackthevillisbackflowbananasherenowpeelthis', song: 'port antonio', album: 'the fall off' }))