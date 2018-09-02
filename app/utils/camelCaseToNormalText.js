export default (string) => {
  const normalText = string
    .replace(/([A-Z])/g, ' $1')
    .replace(/([0-9])/g, ' $1')
    .toLowerCase()
  return normalText.charAt(0).toUpperCase() + normalText.slice(1)
}
