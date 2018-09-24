---
# Icon is a "Evergreen Tree"
title: 🌲 How to .git merge multiple repos!
subTitle: 99 repos and I just would like 1 please.
category: "tutorial"
cover: AvatarTalandar.jpg
---

## <span role="img" aria-label="Sparkles">✨</span> Tutorial

I like short and simple straight to the point tutorials when dealing with code.

This part will go through the complete layout of the tutorial while the end result will just show the code.

Cheers!

```git
# Create new repo, use terminal to change to new repo directory

git remote -v
# remote = manage the set of remotes whose branches you track
# -v = be verbose and show remote url after name

git remote add -f OTHER_REPO https://github.com/USER/OTHER_REPO.git
# add = add the branch
# -f = download objects and refs from another repo

git merge -s ours --no-commit --allow-unrelated-histories OTHER_REPO/master
# merge = combine branches into one branch
# -s = short output
# --no-commit = doesn't perform the commit as actions aren't finished yet
# --allow-unrelated-histories = provides ease of merge

git read-tree --prefix=OTHER_REPO/ -u OTHER_REPO/master
# read-tree = reads tree info into the new repo index
# --prefix = what to name the new folder of other branch being transferred
# -u = update the files in the work tree with the result of the merge

git commit -m "Merge OTHER_REPO into NEW_REPO"
# commit = you are satisfied with the merge
# -m = message to be attached to commit

git push
# you did it!
```

## <span role="img" aria-label="Sparkles">✨</span> End Result

```git
# Create new repo, use terminal to change to new repo directory

git remote -v

git remote add --fetch OTHER_REPO https://github.com/USER/OTHER_REPO.git

git merge -s ours --no-commit --allow-unrelated-histories OTHER_REPO/master

git read-tree --prefix=OTHER_REPO/ -u OTHER_REPO/master

git commit -m "Merge OTHER_REPO into NEW_REPO"

git push
```
