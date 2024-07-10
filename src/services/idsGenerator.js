export function generateIds(count) {
  const n = 151;
  const allIds = createArrFrom1toN(n);
  shuffle(allIds);

  return allIds.slice(0, count);
}

function createArrFrom1toN(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}