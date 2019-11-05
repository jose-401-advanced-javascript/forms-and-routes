export const getRandomCharacter = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(results => results.json());
};
