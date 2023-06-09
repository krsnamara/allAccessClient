export function getRandomFloat(min, max) {
  const decimalPlaces = 1;
  const randomNumber = (Math.random() * (max - min) + min).toFixed(
    decimalPlaces
  );
  return parseFloat(randomNumber).toFixed(decimalPlaces);
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const rating = getRandomFloat(3, 5);

export const reviewsNumber = getRandomNumber(4, 236);

export const yearJoined = getRandomNumber(1999, 2049);
