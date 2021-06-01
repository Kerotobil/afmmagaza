export function capitalizeWord(word: string): string {
  word = String(word).toLowerCase();
  return word[0].toUpperCase() + word.slice(1);
}
