module.exports = function (str) {
  // TODO
  var matcher = str.match(/\bx\=(\d+)\b/);
  return matcher ? matcher[1] : null;
}