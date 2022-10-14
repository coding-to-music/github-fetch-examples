const fetch = require("node-fetch");

// import fetch from "node-fetch";

const stars = async () => {
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

const views = async () => {
  return fetch("https://api.github.com/repos/11ty/eleventy")
    .then((res) => res.json()) // node-fetch option to transform to json
    .then((json) => {
      // prune the data to return only what we want
      console.log("Stars: ", json.views_count);
      return {
        views: json.views_count,
      };
    });
};

const clones = async () => {
  return fetch("https://api.github.com/repos/11ty/eleventy")
    .then((res) => res.json()) // node-fetch option to transform to json
    .then((json) => {
      // prune the data to return only what we want
      console.log("Clones: ", json.clones_count);
      return {
        clones: json.clones_count,
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

try {
  await views();
} catch (error) {
  console.error(error.message);
}
try {
  await clones();
} catch (error) {
  console.error(error.message);
}

main();
