export const getRandom = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(response => response.json());
};
