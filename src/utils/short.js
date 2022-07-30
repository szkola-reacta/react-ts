export const short = (text, size = 25) => {
  if (text.length > size) {
    return `${text.slice(0, size)}...`;
  }
  return text;
}
