const fetch = require("node-fetch");

// import fetch from "node-fetch";

const stars = async () => {
  // console.log("Fetching new github stargazers count…");

  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/11ty/eleventy")
    .then((res) => res.json()) // node-fetch option to transform to json
    .then((json) => {
      // prune the data to return only what we want
      console.log("Stars: ", json.stargazers_count);
      return {
        stargazers: json.stargazers_count,
      };
    });
};

const forks = async () => {
  // console.log("Fetching new github forks count…");

  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/11ty/eleventy")
    .then((res) => res.json()) // node-fetch option to transform to json
    .then((json) => {
      // prune the data to return only what we want
      console.log("Forks: ", json.forks_count);
      return {
        forks: json.forks_count,
      };
    });
};

async function main() {
  try {
    await stars();
  } catch (error) {
    console.error(error.message);
  }

  try {
    await forks();
  } catch (error) {
    console.error(error.message);
  }
}

main();
