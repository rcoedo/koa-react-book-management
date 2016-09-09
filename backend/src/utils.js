export async function asyncMap(collection, fn) {
  return Promise.all(collection.map(fn));
}
