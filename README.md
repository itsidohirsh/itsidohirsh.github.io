# [itsidohirsh.github.io](https://itsidohirsh.github.io)
My awesome GitHub Pages website ⚡

This website was built using [Docusaurus](https://docusaurus.io/). Visit their website for the full documentation.

## Installation

Clone this repo.
```
git clone https://itsidohirsh/itsidohirsh.github.io.git
```

Create new Docusaurus project.
```
npx create-docusaurus@latest my-website classic
```

Copy `node_modules` folder from `my-website` to `itsidohirsh.github.io`.
  - This may take a few minutes.
  - After copied / moved you can delete `my-website`.

Thats it for the installation 😀


## Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
```
cd itsidohirsh.github.io
yarn start
```

## Deployment

This command generates static content into the `build` directory and can be served using any static contents hosting service.
```
yarn run build
```

It is important to test your build locally before deploying it for production. This command will run you latest build server and client locally.
```
yarn run serve
```

### GitHub Pages

If you don't have GitHub actions to do it for you, after you've made local changes and pushed them to the master branch, run this command to publish them to GitHub Pages.

Bash
```
GIT_USER=<GITHUB_USERNAME> yarn deploy
```

Powershell
```
cmd /C 'set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy'
```

Windows
```
cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
