const getFitText = (category, city) => {
  if (category === 'income') {
    return (
      city +
      "'s wealth is nothin special. It's not a rich city like San Jose, but it's not poor like Detroit"
    )
  } else if (category === 'ufo') {
    return (
      "Aliens don't love " +
      city +
      ' like they love New York, but they like ' +
      city +
      ' more than Oakland'
    )
  } else if (category === 'temperature') {
    return (
      'Normal temperatures in ' +
      city +
      '. Not hot like Houston nor cold like Milwaukee'
    )
  } else if (category === 'crime') {
    return city + ' is more dangerous than Arlington, but safer than Oakland'
  } else if (category === 'population') {
    return (
      city +
      "isn't a rat next like New York, and isn't a yuppie village like Arlington"
    )
  } else if (category === 'air') {
    return 'Fresno has worse air than ' + city + 'Colorado Springs has better'
  } else if (category === 'parking') {
    return (
      'You can find quicker parking in Omaha, but ' +
      city +
      ' is still quicker than New York'
    )
  } else if (category === 'city') {
    return city + ' is bigger than Miami, but smaller than Jacksonville'
  } else {
    return (
      city +
      " doesn't have as many electric car stations as Los Angeles, but has more than Wichita"
    )
  }
}

const getNoFitText = (category, city) => {
  if (category === 'income') {
    return city + "'s income levels stand out"
  } else if (category === 'ufo') {
    return 'Uncommon alien visitation in ' + city
  } else if (category === 'temp') {
    return 'Abnormal weather patterns in ' + city
  } else if (category === 'crime') {
    return 'Atypical crime rates in ' + city
  } else if (category === 'population') {
    return 'Unexpected populations size in ' + city
  } else if (category === 'air') {
    return 'Unconventional air quaility'
  } else if (category === 'parking') {
    return 'Peculiar amount of time to find a parking space'
  } else if (category === 'size') {
    return city + ' is an interesting size for an American city'
  } else {
    return 'Curious amount of electric car stations in ' + city
  }
}

const getText = (category, city, fit) => {
  if (fit === 1) {
    return getFitText(category, city)
  } else {
    return getNoFitText(category, city)
  }
}

export default getText
