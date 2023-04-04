export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

//default 기본 모듈로 내보내기 (불러올때도 방법이 약간 다름)
// export default {
//   add: add,
//   subtract: subtract,
// };