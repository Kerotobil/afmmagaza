
export function createArrayRotator<T>(arr: Array<T>, random: boolean = false): () => T {
  const gen = (
    function* gen(arr) {
      let index = 0;

      let nextIndex = (): void => {
        if (++index >= arr.length) index = 0;
      }

      let randomIndex = (): void => {
        const newIndex = Math.round(Math.random() * arr.length);
        if (newIndex !== index) {
          index = newIndex;
          return;
        }

        nextIndex();
      }

      while (true) {
        yield arr[index] ?? arr[0];
        (random && arr.length > 2) ? randomIndex() : nextIndex();
      }
    }
  )(arr);
  return () => gen.next().value;
}
