export const filterNumber = num => {
  num = Number(num)
  if (num > 100000) {
    num = (num / 100000).toFixed(2)
  }
  return num
}
