// Lance's list of favorite movie genres!

let genres = [
  'Action',
  'Comedy',
  'Romance',
  'Western',
  'Martial Arts',
  'Anime',
  'Horror',
  'Documentary',
  'Marvel',
];

let lanceFave = ['Romance', 'Anime', 'Martial Arts', 'Marvel'];

// What genres are not in Lance's favorites?

// Write a function that finds what genres are NOT in Lance's favorites

function checkGenres(genre, faves) {
  let notFave = [];
  for (let i = 0; i < genre.length; i++) {
    let found = false;
    for (let j = 0; j < faves.length; j++) {
      if (genres[i] == faves[j]) {
        found = true;
        break;
      }
    }

    if (found == false) {
      notFave.push(genres[i]);
    }
  }

  return notFave;
}

console.log(checkGenres(genres, lanceFave));
