# Cheatsheet

Most common git commands

## Git Configuration
List configurations
```
git config --list
```

Configure username and email
```
git config user.name <your name>
git config user.email <your email>
```

## File management
Check repo status
```
git status
```

Show changes diff
```
git diff
```

Add changes to staging area
```
git add <filename|folder>
```

Commit changes
```
git commit -m <commit message>
```

Show commits history
```
git log
```

Restore changes
```
git restore
```

Rename file or change file location
```
git mv <source> <destiny>
```

Remove file
```
git rm <file>
```

## Branches
List local branches
```
git branch
```

Create local branch
```
git branch <branch name>
```

Switch to local branch
```
git checkout <branch name>
```

Merge current branch to a target branch
```
git merge <target branch name>
```

Delete local branch
```
git branch -d <branch name>
```

Open graphical repository browser
```
gitk --all
```

## Remote repository
Clone remote repository
```
git clone <remote repo url>
```

Show remote repository
```
git remote -vv
```

Show remote branches
```
git branch -r
```

Show local branches and links to remote branches
```
git branch -vv
```

Create local branch linked to remote branch
```
git branch <local branch name> <remote branch name>
```

Create remote branch linked to local branch
```
git push -u origin <local branch name>
```

Delete remote branch
```
git push -d origin <remote branch name>
```

Pull remote changes to local repo
```
git pull
```

Push local changes to remote repo
```
git push
```

Clean local repository references to deleted remote branches
```
git remote prune <remote name>
```

## Command docs
Show command help
```
git help <command>
```