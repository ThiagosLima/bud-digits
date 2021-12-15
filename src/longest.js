function findLongestConsecutive(number) {
  return Math.max(...splitConsecutiveNumbers(number))
}

function splitConsecutiveNumbers(number) {
  return Array.from(String(number)).reduce(split, []).map(Number)
}

function split(chunks, currentDigit, index, strNumber) {
  const lastDigit = strNumber[index - 1]
  return areConsecutives(lastDigit, currentDigit)
    ? updateLastChunk(chunks, currentDigit)
    : insertNewChunk(chunks, currentDigit)
}

function areConsecutives(digit1, digit2) {
  return (Number(digit1) + 1) % 10 === Number(digit2)
}

function updateLastChunk(chunks, digit) {
  const [currentChunk, ...rest] = chunks
  return [currentChunk + digit, ...rest]
}

function insertNewChunk(chunks, digit) {
  return [digit, ...chunks]
}

module.exports = { findLongestConsecutive, areConsecutives }
