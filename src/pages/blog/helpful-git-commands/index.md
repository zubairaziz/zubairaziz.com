---
title: Helpful Git Commands
pageTitle: Helpful Git Commands
description: Some helpful git commands I use daily as software engineer
publishedAt: 2022-07-27
categories:
  - Git
  - Snippets
---

Long gone are the days where you copy and paste your codebase to a CDN, and wait as you hope that your code deploys to production successfully. Now, version control is a necessity for any codebase, regardless of size. The most popular version control software these days is [Git](https://git-scm.com/), a free and open source version control system originally authored by Linus Torvalds for the development of the Linux kernel.

Over the years, Git has grown quite a lot and is a very feature-rich version control software. Because of this, Git can become overwhelming and would lead one to believe that learning Git is hard. While I urge anyone who wishes to master Git to take a deep dive into their documentation and try out the different commands on their own, I'll compile some of the commands I find very useful for day-to-day development.

## Updating your local branches

While on the active branch, run:

```bash
git fetch && git pull
```

`git fetch` downloads objects and refs from another repository (in this case, your remote connection to origin). `git fetch` does not incorporate any changes **yet**. `git pull` on the other hand, incorporates changes from a remote repository into the current branch. If the current branch is behind the remote, then by default it will fast-forward the current branch to match the remote.

Alternatively, if you're regularly working on multiple branches at the same time, it might be more convenient to run:

```bash
git fetch --all && git pull --all
```

This does the exact same thing as the previous command, except that it'll run on all your branches as opposed to the active branch you're working on.

## Checking out to a new branch

This creates a new branch from the current branch and switches to that new branch as the active branch.

```bash
git checkout -b [insert-new-branch-name-here]
```

## Pruning local branches

This is extremely useful when you work on large codebases that have multiple branches that get merged in via PRs.

> requires bash or zsh to work

```bash
git fetch -p && git branch -r | awk "{print \$1}" | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk "{print \$1}" | xargs git branch -d
```

This command gets the list of remote branches and passes it into egrep through the standard input. Then, it filters the branches that have a remote tracking branch (using git branch -vv and filtering for those that have origin) then getting the first column of that output which will be the branch name. Finally, passing all the branch names into the delete branch command.

Since it is using the -d option, it will not delete branches that have not been merged into the branch that you are on when you run this command.

## Reset current branch to last commit

This command is very handy to undo your last commit without losing any changes you've made locally.

```bash
git reset HEAD~
```

## Reset current branch to beginning of branch

I use this command a lot when working on large changes to a branch, where I would make small WIP commits as I build out a feature.

```bash
git reset $(git merge-base main $(git branch --show-current))
```

What this does is it resets all commits on the current branch to when it was branched off from `main`/`master`

Here's a good use case for this:

I make new branch from `main` with:

```bash
git checkout -b feature-branch
```

I make 20 commits into it.
Now I want to squash those 20 commits. I do that with:

```bash
git rebase -i HEAD~20
```

What about if I don't know how many commits? This is when this command really shines. Just run:

```bash
git reset $(git merge-base main $(git branch --show-current))
```

After running that command and recommitting your changes, simply run:

```bash
git push --force
```

This will overwrite your previous commits
