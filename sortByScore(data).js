function sortByScore(data) {

  if (!Array.isArray(data)) {

    throw new Error('Ожидался массив');

  }


  return [...data].sort((a, b) => {
    
    if (typeof a.score !== 'number' || typeof b.score !== 'number') {
      throw new Error('Элементы score');
    }

    return b.score - a.score;

  });
}
