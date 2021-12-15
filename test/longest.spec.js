const { findLongestConsecutive, areConsecutives } = require('../src/longest')

describe('findLongestConsecutive', () => {
  it('should return 0 if the input is 0', () => {
    expect(findLongestConsecutive(0)).toBe(0)
  })

  it('should return the input if it has only one digit', () => {
    expect(findLongestConsecutive(0)).toBe(0)
    expect(findLongestConsecutive(9)).toBe(9)
  })

  it('should return 90 if the input is 53590', () => {
    expect(findLongestConsecutive(53590)).toBe(90)
  })

  it('should return 674030098567819 if the input is 5678', () => {
    expect(findLongestConsecutive(674030098567819)).toBe(5678)
  })

  it('should return 9012364509789 if the input is 90123', () => {
    expect(findLongestConsecutive(9012364509789)).toBe(90123)
  })
})

describe('areConsecutives', () => {
  it('should return true if inputs are 0 and 1', () => {
    expect(areConsecutives(0, 1)).toBe(true)
  })

  it('should return false if inputs are 1 and 0', () => {
    expect(areConsecutives(1, 0)).toBe(false)
  })

  it('should return true if inputs are 9 and 0', () => {
    expect(areConsecutives(9, 0)).toBe(true)
  })
})
