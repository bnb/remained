#!/usr/bin/env node
const spawn = require('cross-spawn')

// These are the commands suggested by GitHub to rename a repo
// I got tired of copy/pasting them, so just set up this script to do it all for me.
//
// If it doesn't work for you for some reason, feel free to make an issue or submit a PR.

// rename branch
// git branch -m master main
spawn.sync('git', ['branch', '-m', 'master', 'main'], { stdio: 'inherit' })

// fetch the origin
// git fetch origin
spawn.sync('git', ['fetch', 'origin'], { stdio: 'inherit' })

// update upstream to use main rather than master
// git branch -u origin/main main
spawn.sync('git', ['branch', '-u', 'origin/main', 'main'], { stdio: 'inherit' })

// set remote head to origin for all branches
// git remote set-head origin -a
spawn.sync('git', ['remote', 'set-head', 'origin', '-a'], { stdio: 'inherit' })
