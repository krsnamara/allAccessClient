export function getRandomReview(reviewsArray) {
  const randomIndex = Math.floor(Math.random() * reviewsArray.length);
  return reviewsArray[randomIndex];
}

export const reviewsArray = [
  '"Exceptional service and top-notch facilities!" - Penelope S.',
  '"Mind-blowing experience at Wheelies Kitchen!" - Xavier Q.',
  '"Unforgettable memories created by the friendly staff!" - Aurora H.',
  '"David R. really knows how to pick out hidden gems like Wheelies Kitchen!" - Maximilian B.',
  '"Sarah M.\'s recommendation led us to the best stay of our lives!" - Beatrix L.',
  '"A hidden treasure discovered thanks to the incredible staff!" - Leopoldo G.',
  '"Wheelies Kitchen surpassed all expectations! Kudos to the team!" - Octavia Z.',
  '"Sarah M.\'s review was spot-on! The staff and accommodations were outstanding!" - Percival T.',
  '"David R.\'s recommendation proved to be a game-changer for our dining experience!" - Genevieve W.',
  '"Exceptional attention to detail and personalized service at Wheelies Kitchen!" - Casimir V.',
  '"Outstanding accessibility features! Kudos to the team!" - Harmony B.',
  '"Wheelchair-friendly venue with exceptional staff!" - Orion W.',
  '"A truly inclusive experience for all abilities!" - Lyra K.',
  '"Unparalleled commitment to accessibility at this venue!" - Zephyr C.',
  '"Excellent accommodations for individuals with disabilities!" - Nova P.',
  '"Incredible attention to detail in ensuring accessibility!" - Atlas D.',
  '"A venue that goes above and beyond in providing accessibility options!" - Phoenix R.',
  '"Top-notch accessibility features that exceeded expectations!" - Iris M.',
  '"A heartfelt thanks to the team for their dedication to inclusivity!" - Kai E.',
  '"Unforgettable experience made possible by the venue\'s accessibility efforts!" - Journey F.',
];

export const randomReview = getRandomReview(reviewsArray);
