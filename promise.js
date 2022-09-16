const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const IXX = await promiseTheaterIXX();
  const VGC = await promiseTheaterVGC();
  const merge = [...IXX, ...VGC];
  const arr = [];

  return new Promise((resolve) => {
    for (film of merge) {
      if (film.hasil == emosi) {
        arr.push(film);
      }
    }
    resolve(arr.length);
  });
};

module.exports = {
  promiseOutput,
};
