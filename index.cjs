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
      console.log("Views: ", json.views);
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
      console.log("name: ", json.name);
      console.log("description: ", json.description);
      // #     preview: require('./showcase/pokedex.png'),
      console.log("homepage: ", json.homepage);
      console.log("html_url: ", json.html_url);
      console.log("topics: ", json.topics);
      console.log("private: ", json.private);
      console.log("visibility: ", json.visibility);
      console.log("open_issues: ", json.open_issues);
      console.log("stargazers_count: ", json.stargazers_count);
      console.log("forks_count: ", json.forks_count);
      console.log("size: ", json.size);
      console.log("created_at: ", json.created_at);
      console.log("updated_at: ", json.updated_at);

      console.log("");
      console.log("");
      console.log("");
      // prune the data to return only what we want
      console.log("Clones: ", json.clones);
      console.log("Views: ", json.views);
      console.log("Committers: ", json.committers);
      console.log("Commits: ", json.commits);
      console.log("clone_url: ", json.clone_url);
      console.log("forks: ", json.forks);
      console.log("full_name: ", json.full_name);
      console.log("Watchers: ", json.watchers);

      return {
        clones: json.clones_count,
      };
    });
};

async function main() {
  // try {
  //   await stars();
  // } catch (error) {
  //   console.error(error.message);
  // }

  // try {
  //   await forks();
  // } catch (error) {
  //   console.error(error.message);
  // }

  // try {
  //   await views();
  // } catch (error) {
  //   console.error(error.message);
  // }

  try {
    await clones();
  } catch (error) {
    console.error(error.message);
  }
}

main();
