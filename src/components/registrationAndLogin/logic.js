const arrayNumbers = []

const logic = () => {
  for(let i = 1;i <= 31;i++){
    return arrayNumbers.push(i)
  }

  arrayNumbers.unshift(``)
}

export const logictwo = () => {
  const arrayYears = []
  for(let i = 1901;i <= 2021;i++){
    arrayYears.push(i)
  }
  arrayYears.push(``)
  return arrayYears.reverse()

}

export default logic