module.exports = function (str) {
  // TODO
  const matcher = /\bx=(\d+)\b/.exec(str)
  return matcher ? matcher[1] : null;
}