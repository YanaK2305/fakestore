export function getFullPrice(state) {
  let sum = 0;
  state.cartArr.forEach((element) => {
    sum += element.price * element.count;
  });
  state.fullPrice = sum;
}
