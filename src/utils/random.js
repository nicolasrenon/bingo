export default function generateRandomNumbers(size) {
  const numbers = []
  while(numbers.length < size) {
    const randomNumber = Math.ceil(Math.random() * 100)
    if (numbers.includes(randomNumber)) continue
    numbers.push(randomNumber)
  }
  return numbers
}
