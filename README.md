# Coding (Dev Fundamentals) - AT20
Coding (Dev Fundamentals) repository for AT20 group

## Pre-requisites
- NodeJS: https://nodejs.org/en/download/
- Git: https://git-scm.com/downloads
- Text Editor or IDE: https://code.visualstudio.com/download

## Javascript
Tutorials
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://nodejs.org/en/docs/
- https://nodejs.org/docs/v18.13.0/api/documentation.html
- https://www.w3schools.com/js/
- https://docs.npmjs.com/

## Project Setup
Install project dependencies
```
npm install
```

Check lint issues
```
npm run lint
```

Fix lint issues
```
npm run lint:fix
```

Run tests
```
npm run test
```

## Development process
1. Create branch with the following format for the name: \<your name\>/\<kata or feature name being implemented\>
2. Commit changes in the branch created. For each commit created, make sure to add a meaningful commit message that describes the group of changes being committed. Limit=100 chars
3. Push branch to origin repository (Github)
4. Create a pull request (PR) in GitHub that points from your pushed branch to the target branch specified for the kata or feature development
5. Add reviewers and wait for review comments. If there are comments that require new changes, push new commits including the changes in the same PR. Once PR is approved, it can be merged to target branch
6. After PR is merged, remove your branch from origin

## Code review
As authors, make sure that PRs have the following:
- PR Title: Brief summary of changes being delivered by the PR. This should help reviewers to understand what is the goal of the changes
- PR Description (Optional): If Title is not enough, use PR description to add details about changes being delivered in the PR.
- A moderate number of changes. Goals for PRs should be kept as small as possible, so it's easier for reviewers to understand and reduce chances to introduce bugs hard to catch