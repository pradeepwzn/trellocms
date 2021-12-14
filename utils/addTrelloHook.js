// Get any environment variables we need
require('dotenv').config();
const {
  TRELLO_LIST_ID,
  TRELLO_TOKEN,
  TRELLO_KEY,
  npm_config_url } = process.env;

const fetch = require('node-fetch');

const body = {
  description: "Netlify build hook",
  callbackURL: npm_config_url,
  idModel: TRELLO_LIST_ID
}

fetch(`https://api.trello.com/1/tokens/${69d442c37e3bfb27ad25a556cf01db1a80b32318a9c11deb9da932c207c43266}/webhooks/?key=${a8c7c05c44b5fdc86d8e266900061ac6}`, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(res => res.json())
  .then(json => console.log(json));
