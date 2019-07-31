const axios = require('axios');
const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 151; i++) {
  const number = `${ i }`.padStart(3, '0');
  const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ number }.png`;
  const targetPath = path.join(__dirname, '..', 'assets', `${ number }.png`);

  axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  }).then((response) => {
    response.data.pipe(fs.createWriteStream(targetPath));
  });
}
