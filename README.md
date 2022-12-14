# github-fetch-examples

# 🚀 Fetch attributes of a repo from the GitHub API 🚀

https://github.com/coding-to-music/github-fetch-examples

From / By https://www.11ty.dev/docs/quicktips/eliminate-js/

https://github.com/imranpollob/github-total-star-counter

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

# Github Total Star Counter

Find out the total star earned by a github user.

## Usage

Clone the repository:

```bash
git clone https://github.com/pollmix/github-total-star-counter
cd github-total-star-counter
```

Run the following command:

```bash
python star.py theusername
```

You can also add the print limit. For example, printing only top fifteen repos

```bash
python star.py theusername 15
```

Output

```
Total ⭐️ 13
https://github.com/coding-to-music/nestjs-prisma-multi-database------------------------------------------------ ⭐️ 3
https://github.com/coding-to-music/battlecode2021-------------------------------------------------------------- ⭐️ 1
https://github.com/coding-to-music/chalice-workshop------------------------------------------------------------ ⭐️ 1
https://github.com/coding-to-music/docker-flask-mongodb-k8-grafana-mqtt-fastapi-------------------------------- ⭐️ 1
https://github.com/coding-to-music/facebook-firebase-next-chat------------------------------------------------- ⭐️ 1
https://github.com/coding-to-music/grafana-nginx-prometheus-postgres-node-exporter-jmx-cadvisor---------------- ⭐️ 1
https://github.com/coding-to-music/k6-influxdb-grafana-docker-load-testing------------------------------------- ⭐️ 1
https://github.com/coding-to-music/mongoose-mongodb-upload-images---------------------------------------------- ⭐️ 1
https://github.com/coding-to-music/nuxt-supabase-full-multi-user-blog------------------------------------------ ⭐️ 1
https://github.com/coding-to-music/postgres-postgrest-cloudflare-docker---------------------------------------- ⭐️ 1
https://github.com/coding-to-music/tempo-otel-open-telemetry-loki-prometheus-grafana--------------------------- ⭐️ 1
https://github.com/coding-to-music/1001devs-client------------------------------------------------------------- ⭐️ 0
https://github.com/coding-to-music/24ways-datasette------------------------------------------------------------ ⭐️ 0
https://github.com/coding-to-music/60sk3s---------------------------------------------------------------------- ⭐️ 0
https://github.com/coding-to-music/a-kafka-story-zookeeper-java-telegraf-jmx-grafana-ksql---------------------- ⭐️ 0
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

# Standard output of the GitHub API call

```
curl -s https://api.github.com/repos/11ty/eleventy
```

Output

```
{
  "id": 112150776,
  "node_id": "MDEwOlJlcG9zaXRvcnkxMTIxNTA3NzY=",
  "name": "eleventy",
  "full_name": "11ty/eleventy",
  "private": false,
  "owner": {
    "login": "11ty",
    "id": 35147177,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjM1MTQ3MTc3",
    "avatar_url": "https://avatars.githubusercontent.com/u/35147177?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/11ty",
    "html_url": "https://github.com/11ty",
    "followers_url": "https://api.github.com/users/11ty/followers",
    "following_url": "https://api.github.com/users/11ty/following{/other_user}",
    "gists_url": "https://api.github.com/users/11ty/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/11ty/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/11ty/subscriptions",
    "organizations_url": "https://api.github.com/users/11ty/orgs",
    "repos_url": "https://api.github.com/users/11ty/repos",
    "events_url": "https://api.github.com/users/11ty/events{/privacy}",
    "received_events_url": "https://api.github.com/users/11ty/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "html_url": "https://github.com/11ty/eleventy",
  "description": "A simpler static site generator. An alternative to Jekyll. Transforms a directory of templates (of varying types) into HTML.",
  "fork": false,
  "url": "https://api.github.com/repos/11ty/eleventy",
  "forks_url": "https://api.github.com/repos/11ty/eleventy/forks",
  "keys_url": "https://api.github.com/repos/11ty/eleventy/keys{/key_id}",
  "collaborators_url": "https://api.github.com/repos/11ty/eleventy/collaborators{/collaborator}",
  "teams_url": "https://api.github.com/repos/11ty/eleventy/teams",
  "hooks_url": "https://api.github.com/repos/11ty/eleventy/hooks",
  "issue_events_url": "https://api.github.com/repos/11ty/eleventy/issues/events{/number}",
  "events_url": "https://api.github.com/repos/11ty/eleventy/events",
  "assignees_url": "https://api.github.com/repos/11ty/eleventy/assignees{/user}",
  "branches_url": "https://api.github.com/repos/11ty/eleventy/branches{/branch}",
  "tags_url": "https://api.github.com/repos/11ty/eleventy/tags",
  "blobs_url": "https://api.github.com/repos/11ty/eleventy/git/blobs{/sha}",
  "git_tags_url": "https://api.github.com/repos/11ty/eleventy/git/tags{/sha}",
  "git_refs_url": "https://api.github.com/repos/11ty/eleventy/git/refs{/sha}",
  "trees_url": "https://api.github.com/repos/11ty/eleventy/git/trees{/sha}",
  "statuses_url": "https://api.github.com/repos/11ty/eleventy/statuses/{sha}",
  "languages_url": "https://api.github.com/repos/11ty/eleventy/languages",
  "stargazers_url": "https://api.github.com/repos/11ty/eleventy/stargazers",
  "contributors_url": "https://api.github.com/repos/11ty/eleventy/contributors",
  "subscribers_url": "https://api.github.com/repos/11ty/eleventy/subscribers",
  "subscription_url": "https://api.github.com/repos/11ty/eleventy/subscription",
  "commits_url": "https://api.github.com/repos/11ty/eleventy/commits{/sha}",
  "git_commits_url": "https://api.github.com/repos/11ty/eleventy/git/commits{/sha}",
  "comments_url": "https://api.github.com/repos/11ty/eleventy/comments{/number}",
  "issue_comment_url": "https://api.github.com/repos/11ty/eleventy/issues/comments{/number}",
  "contents_url": "https://api.github.com/repos/11ty/eleventy/contents/{+path}",
  "compare_url": "https://api.github.com/repos/11ty/eleventy/compare/{base}...{head}",
  "merges_url": "https://api.github.com/repos/11ty/eleventy/merges",
  "archive_url": "https://api.github.com/repos/11ty/eleventy/{archive_format}{/ref}",
  "downloads_url": "https://api.github.com/repos/11ty/eleventy/downloads",
  "issues_url": "https://api.github.com/repos/11ty/eleventy/issues{/number}",
  "pulls_url": "https://api.github.com/repos/11ty/eleventy/pulls{/number}",
  "milestones_url": "https://api.github.com/repos/11ty/eleventy/milestones{/number}",
  "notifications_url": "https://api.github.com/repos/11ty/eleventy/notifications{?since,all,participating}",
  "labels_url": "https://api.github.com/repos/11ty/eleventy/labels{/name}",
  "releases_url": "https://api.github.com/repos/11ty/eleventy/releases{/id}",
  "deployments_url": "https://api.github.com/repos/11ty/eleventy/deployments",
  "created_at": "2017-11-27T05:19:00Z",
  "updated_at": "2022-10-14T21:38:02Z",
  "pushed_at": "2022-10-06T19:54:23Z",
  "git_url": "git://github.com/11ty/eleventy.git",
  "ssh_url": "git@github.com:11ty/eleventy.git",
  "clone_url": "https://github.com/11ty/eleventy.git",
  "svn_url": "https://github.com/11ty/eleventy",
  "homepage": "https://www.11ty.dev/",
  "size": 2977,
  "stargazers_count": 12977,
  "watchers_count": 12977,
  "language": "JavaScript",
  "has_issues": true,
  "has_projects": false,
  "has_downloads": true,
  "has_wiki": false,
  "has_pages": false,
  "forks_count": 414,
  "mirror_url": null,
  "archived": false,
  "disabled": false,
  "open_issues_count": 439,
  "license": {
    "key": "mit",
    "name": "MIT License",
    "spdx_id": "MIT",
    "url": "https://api.github.com/licenses/mit",
    "node_id": "MDc6TGljZW5zZTEz"
  },
  "allow_forking": true,
  "is_template": false,
  "web_commit_signoff_required": false,
  "topics": [
    "blog-engine",
    "documentation-tool",
    "eleventy",
    "javascript",
    "static-site-generator",
    "templates"
  ],
  "visibility": "public",
  "forks": 414,
  "open_issues": 439,
  "watchers": 12977,
  "default_branch": "master",
  "temp_clone_token": null,
  "organization": {
    "login": "11ty",
    "id": 35147177,
    "node_id": "MDEyOk9yZ2FuaXphdGlvbjM1MTQ3MTc3",
    "avatar_url": "https://avatars.githubusercontent.com/u/35147177?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/11ty",
    "html_url": "https://github.com/11ty",
    "followers_url": "https://api.github.com/users/11ty/followers",
    "following_url": "https://api.github.com/users/11ty/following{/other_user}",
    "gists_url": "https://api.github.com/users/11ty/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/11ty/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/11ty/subscriptions",
    "organizations_url": "https://api.github.com/users/11ty/orgs",
    "repos_url": "https://api.github.com/users/11ty/repos",
    "events_url": "https://api.github.com/users/11ty/events{/privacy}",
    "received_events_url": "https://api.github.com/users/11ty/received_events",
    "type": "Organization",
    "site_admin": false
  },
  "network_count": 414,
  "subscribers_count": 92
}
```
