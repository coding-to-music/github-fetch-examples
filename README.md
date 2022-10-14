# github-fetch-examples

# 🚀 Fetch attributes of a repo from the GitHub API 🚀

https://github.com/coding-to-music/github-fetch-examples

From / By https://www.11ty.dev/docs/quicktips/eliminate-js/

## Environment variables:

```java

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/github-fetch-examples.git
git push -u origin main
```

# GET THE STARGAZERS COUNT FROM THE GITHUB API

Read more at the GitHub API documentation.

This is a bit different from our client-side implementation because this data is only updated as often as your build runs. This is implemented using a global JavaScript data file at \_data/github.js.

Install new dependencies: npm install node-fetch@cjs --save-dev
Read more about node-fetch

```
# FILENAME _data/github.js
const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching new github stargazers count…" );

  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/11ty/eleventy")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      return {
        stargazers: json.stargazers_count
      };
    });
};
```
