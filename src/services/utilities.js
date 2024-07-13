export function generateIds(count) {
  const n = 151;
  const allIds = createArrFrom1toN(n);
  const shuffledIds = shuffle(allIds);

  return shuffledIds.slice(0, count);
}

function createArrFrom1toN(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

export function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}