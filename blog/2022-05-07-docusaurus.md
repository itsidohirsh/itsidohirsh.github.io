---
title: It shouldn't have taken so long...
description: Building my GitHub Pages website using docusaurus.
authors: ido
tags: [software, technology]
keywords: [docusaurus]
---

Building my GitHub Pages website using **Docusaurus** 😫🤔

<!-- truncate -->

## Intro

Just finished building my website using a tool called Docusaurus.  
Docusaurus is a tool designed to build static websites in just *5 minutes*,
but my experience was a little bit different...

Following the setup steps on the [website](https://docusaurus.io/) was a pretty good and easy to understand experience, and getting my website to work locally was an easy job.  
But deploying my website to GitHub was a little frustrating.


## The struggle

I wanted to host my website on the basic GitHub Pages URL of the form `https://username.github.io`, but couldn't manage to do that very easily. Every documentation I found only explained how to host the website using a URL of the form `https://username.github.io/repo`.


## The solution

In the end I found a simple solution. Just follow the next config and deploy steps.

### Config

1. Create a repo of the form `username.github.io` in GitHub. Only this repo name allows hosting URLs of the form  `https://username.github.io`.

1. Create a new Docusaurus project:
    - `npx create-docusaurus@latest my-website classic`

1. In `docusaurus.config.js` modify (or add if doesn't appear):
    - `url` field to `'https://username.github.io'`
    - `baseUrl` field to `'/'`
    - `organizationName` field to `'username'`
    - `projectName` field to `'username.github.io'`
    - `deployBranch` field to `'gh-pages'`
    - `trailingSlash` field to `false`

### Deploy
The last step is to deploy to github, simply run:
- Bash: `GIT_USER=<GITHUB_USERNAME> yarn deploy`
- Powershell: `cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'`
- CMD: `cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"`


## Conclution
To conclude, the experience wasn't that bad, but it shouldn't have taken so long.

Hope I helped you if you had the same problem, and if you want me to write on other **Docusaurus** related questions / problems let me know.

See ya 😀
