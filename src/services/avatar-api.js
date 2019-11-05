export const getRandomCharacter = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/random')
    .then(results => results.json());
};

export const getSearchedCharacter = (name) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(results => results.json());
}; 
