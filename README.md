# remained

A tiny tool to do all the _local_ steps GitHub tells you to do once you've change your default branch name from `master` to `main`.

## Usage 

First, you'll want to change your upstream [default branch's name in GitHub](https://docs.github.com/en/enterprise-server@3.0/github/administering-a-repository/changing-the-default-branch).

Next, just run this commmand (assuming you already have Node.js installed):

```
npx remained
```

## What does remained do?

Remained just runs the following commmands:

```sh
git branch -m master main
git fetch origin
git branch -u origin/main main
git remote set-head origin -a
```