export const short = (text: string, size: number = 25) => {
  if (text.length > size) {
    return `${text.slice(0, size)}...`;
  }
  return text;
}
