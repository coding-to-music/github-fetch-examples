const fetch = require("node-fetch");

// import fetch from "node-fetch";

const stars = async () => {
  console.log("Fetching new github stargazers count…");

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

async function main() {
  // 15s
  const ms = 15 * 1000;

  try {
    await stars();
    // stop cron job
    setTimeout(async () => {
      console.log("------- stopped -------");
      // await mongoose.disconnect();
      // console.log("Disconnected from MongoDB");
    }, ms);
  } catch (error) {
    console.error(error.message);
  }
}

main();
