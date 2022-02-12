const { default: axios } = require("axios");

export default axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});