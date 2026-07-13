# 1. Install Git

Download and install Git from the official website:

https://git-scm.com/

Verify the installation:

```bash
git --version
```

---

# 2. Configure Git

Tell Git who you are. This only needs to be done once.

```bash
git config --global user.name "Mohamed Wael"
git config --global user.email "you@example.com"
```

Check your configuration:

```bash
git config --list
```

---

# 3. How Git Works

Git tracks your files through three main areas:

```
Working Directory
        │
        ▼
Staging Area (Index)
        │
        ▼
Local Repository (Commits)
```

### Working Directory
The files you are currently editing.

### Staging Area
The files you have selected to be included in the next commit.

### Local Repository
Where Git permanently stores your commit history.

---

# 4. Initialize a Git Repository

Navigate to your project folder and initialize Git.

```bash
git init
```

This creates a hidden `.git` folder that stores the repository history.

---

# 5. Git File Lifecycle

Every file in Git moves through different states.

```
Untracked
      │
git add
      ▼
Staged
      │
git commit
      ▼
Committed
      │
Edit the file
      ▼
Modified
      │
git add
      ▼
Staged
```

### File States

- **Untracked** → Git is not tracking the file.
- **Staged** → The file is ready for the next commit.
- **Committed** → The file is saved in Git history.
- **Modified** → The file has changed after being committed.

---

# 6. Add a File to the Staging Area

```bash
git add file.py
```

---

# 7. Add All Files

```bash
git add .
```

---

# 8. Check Repository Status

Before committing, always check the status.

```bash
git status
```

Git will show:

- Untracked files
- Modified files
- Staged files

---

# 9. Create a Commit

Save the staged changes into Git history.

```bash
git commit -m "Describe your changes"
```

Example:

```bash
git commit -m "Add login page"
```

---

# 10. View Commit History

```bash
git log
```

Compact version:

```bash
git log --oneline
```

---

# 11. Branches

A branch is an independent line of development.

Instead of making changes directly on the `main` branch, create another branch to work safely.

```
main
 │
 ├───────────────
 │
 └──── feature
```

---

## Create a Branch

```bash
git branch feature
```

---

## Switch to Another Branch

```bash
git switch feature
```

or

```bash
git checkout feature
```

---

## Create and Switch at the Same Time

```bash
git switch -c feature
```

---

## List All Branches

```bash
git branch
```

---

## Merge a Branch

First switch to the branch you want to merge into (usually `main`).

```bash
git switch main
git merge feature
```

---

# 12. Connect to GitHub

1. Create a new repository on GitHub.
2. Copy the commands GitHub provides.

Usually they look like this:

```bash
git remote add origin https://github.com/username/repository.git
git branch -M main
git push -u origin main
```

Now your local repository is connected to GitHub.

---

# 13. Push Changes to GitHub

Upload your commits.

```bash
git push
```

---

# 14. Pull Changes

Download the latest changes from GitHub.

```bash
git pull
```

---

# 15. Clone an Existing Repository

Download a repository from GitHub.

```bash
git clone https://github.com/username/repository.git
```

---

# 16. Check Remote Repository

See which remote repositories are connected.

```bash
git remote -v
```

---

# Common Git Workflow

```text
Create Project
      │
      ▼
git init
      │
      ▼
Edit Files
      │
      ▼
git status
      │
      ▼
git add .
      │
      ▼
git commit -m "message"
      │
      ▼
git push
```

---

# Most Used Git Commands

| Command | Description |
|----------|-------------|
| `git init` | Initialize a repository |
| `git status` | Show repository status |
| `git add file` | Stage one file |
| `git add .` | Stage all files |
| `git commit -m "message"` | Create a commit |
| `git log` | View commit history |
| `git branch` | List branches |
| `git branch name` | Create a branch |
| `git switch name` | Switch branches |
| `git switch -c name` | Create and switch |
| `git merge branch` | Merge a branch |
| `git remote -v` | Show remotes |
| `git clone URL` | Clone a repository |
| `git push` | Upload commits |
| `git pull` | Download changes |

---
