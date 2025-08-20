# GIT_GITHUB

## What is VCS? <br/>
Ans:- VCS stands for Version Control System. It is a tool that helps manage and track changes to
source code or other files over time. VCS is essential for software development and other
projects where maintaining a history of changes, collaboration, and versioning is critical.
Popular VCS Tools:
Git The most widely used DVCS; supports branching and distributed workflows.
Subversion SVN A CVCS used in enterprise applications.
Mercurial Another DVCS, simpler than Git in some aspects.
Perforce A CVCS often used for large-scale enterprise projects.
Popular VCS Tools:
Git: The most widely used DVCS; supports branching and distributed workflows.
Subversion SVN A CVCS used in enterprise applications.
Mercurial: Another DVCS, simpler than Git in some aspects.
Perforce: A CVCS often used for large-scale enterprise projects.
Why do we need VCS?
 Tracking Changes It records changes to files over time, enabling developers to see who
changed what and when.

 Collaboration Multiple people can work on the same project simultaneously without
overwriting each other’s work.
 Branching and Merging Developers can create separate branches for different features or
experiments and later merge them into the main project.
 Version History It keeps a history of all changes, making it easy to revert to previous
versions if needed.
 Conflict Resolution Helps manage and resolve conflicts when multiple developers make
changes to the same file.
 Backup and Recovery: Acts as a backup for the project.

Introduction to Git
Git is a version control system VCS designed to track changes in source code and
collaborate efficiently with others. It is widely used for software development due to its
speed, flexibility, and support for non-linear workflows (e.g., branching and merging).
This what a typical git workflow in a startup or enterprise application code could look like.

![alt](GitFlowProcess.png)

# Git Basic Commands: 
   
   ## git init: 
             Initialize a new empty git.<br/>
             .git directory is created.
   ![alt](dotgittree.png)

1. config is a text file that contains your git configuration for the current repo.
2. Of course. The `git config` command is used to get and set configuration variables that control all aspects of how Git looks and operates. These configurations can be stored in three different places (scopes), each with increasing priority:

1.  **System:** (`--system`) For every user on the **entire computer**. File location: `/etc/gitconfig` on Unix-like systems.
2.  **Global:** (`--global`) For **all repositories** of the **current user**. File location: `~/.gitconfig` or `~/.config/git/config`.
3.  **Local:** (`--local`) For the **specific repository** only (default scope). File location: `.git/config` in the repo's root.

**Local** overrides **Global**, which overrides **System**.

---

### **Syntax Overview**
```bash
# Set a configuration value
git config [--global|--system|--local] <section>.<key> "<value>"

# Get a configuration value
git config [--global|--system|--local] <section>.<key>

# List all configuration values (for a scope)
git config [--global|--system|--local] --list

# Edit the configuration file manually
git config [--global|--system|--local] --edit

# Unset/Remove a configuration
git config [--global|--system|--local] --unset <section>.<key>
```

---

### **Essential Configuration Commands (Getting Started)**

These are the first commands you run on a new machine to set up your identity.

```bash
# Set your global username (will be used for all commits you make)
git config --global user.name "Your Name"

# Set your global email address
git config --global user.email "your.email@example.com"

# Set your default text editor (e.g., for writing commit messages)
git config --global core.editor "code --wait"  # VS Code
# Other common examples:
# git config --global core.editor "nano"
# git config --global core.editor "vim"

# Enable colorful output in the terminal
git config --global color.ui auto
```

---

### **Common and Useful Configurations**

#### **Aliases: Supercharge Your Git Workflow**
Create shortcuts for frequently used commands.

```bash
# Short status
git config --global alias.s "status -s"

# A detailed log graph (very popular)
git config --global alias.lg "log --oneline --graph --decorate --all"

# A prettier, more detailed log
git config --global alias.plog "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

# Amend the last commit without editing the message
git config --global alias.amend "commit --amend --no-edit"

# Unstage a file (without having to remember the `reset` syntax)
git config --global alias.unstage "reset HEAD --"

# List all aliases
git config --global alias.aliases "config --get-regexp alias"
```
**Usage:** `git s` instead of `git status -s`.

#### **Core Git Behaviors**

```bash
# Change the default branch name for new repos from 'master' to 'main'
git config --global init.defaultBranch main

# Automatically handle line ending conversion (CRLF vs LF)
# Windows - Checkout Windows-style, commit Unix-style
git config --global core.autocrlf true
# Linux/Mac - Do not convert
git config --global core.autocrlf input

# Make `git push` only push the current branch by default (safer)
git config --global push.default simple

# Rebase the current branch on top of the upstream branch when pulling
git config --global pull.rebase true

# Prune remote-tracking branches that no longer exist on the remote when fetching
git config --global fetch.prune true
```

#### **Merge & Diff Tools**
```bash
# Set a custom diff tool (e.g., vscode, beyondcompare, p4merge)
git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff $LOCAL $REMOTE"

# Set a custom merge tool
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd "code --wait $MERGED"

# Prompt before launching the diff/merge tool
git config --global mergetool.prompt false
git config --global difftool.prompt false
```

#### **SSH & Remote Handling**
```bash
# Instead of HTTPS, force Git to use SSH for all GitHub repos
git config --global url."git@github.com:".insteadOf "https://github.com/"
```

---

### **Viewing and Managing Configurations**

```bash
# List ALL configuration entries for the current scope (local repo by default)
git config --list

# List only GLOBAL configurations
git config --global --list

# List only SYSTEM configurations
git config --system --list

# List only LOCAL configurations (for the repo you're in)
git config --local --list

# Get the value of a specific key (e.g., user.email)
git config user.email

# Check where a config value is being defined
git config --show-origin user.name
# Sample output: file:/home/user/.gitconfig   Your Name

# Open the global config file in your default editor to make manual changes
git config --global --edit

# Remove a specific configuration entry
git config --global --unset alias.s
```

---

### **Example: Full Setup for a New Developer Machine**

```bash
# Identity
git config --global user.name "Jane Developer"
git config --global user.email "jane@example.com"

# Editor & Behavior
git config --global core.editor "code --wait"
git config --global init.defaultBranch main
git config --global color.ui auto
git config --global pull.rebase true

# Aliases for speed
git config --global alias.s "status -s"
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.amend "commit --amend --no-edit"
git config --global alias.unstage "reset HEAD --"

# Verify the configuration
git config --global --list
```

By mastering `git config`, you can tailor Git's behavior to perfectly match your workflow, making you significantly more efficient and reducing the chance of errors.
3. HEAD contains the current head of the repo.
4. hooks contain any scripts that can be run before/after git does anything.
5. objects contains the git objects, ie the data about the files, commits etc in your repo. 
6. We will go in depth into this in this blog.
7. refs as we previously mentioned, stores references(pointers)
8. commit hash and commit message are very important for every commit. type with a tree, author , committer details
9. Git objects are linked like a linked-list.
10. i. Code Files Read -> hash  SHA1 ->Commit Hash
9. ii. Text -> Hash -> String  
10. Concept of blobs: The power and efficiency of Git are not accidental; they are the direct result of a simple yet profound internal data model. Unlike many of its predecessors that track changes to individual files (deltas), Git's core design is that of a content-addressable filesystem that stores a series of snapshots. Understanding this architecture is the key to mastering Git's behavior and unlocking its full potential.

2.1 The Three Trees: Working Directory, Staging Area (Index), and Repository
The daily Git workflow revolves around three conceptual areas where files can reside, often referred to as the "three trees".

Working Directory (Working Tree): This is the project directory on your local filesystem. It represents a single checkout of one version of the project, containing the files you can see and edit. When you modify a file here, Git recognizes it as being in a "modified" state.

Staging Area (The Index): This is a crucial intermediary layer that sets Git apart from many other VCSs. It is a file, located at .git/index, that acts as a buffer, storing information about what will go into your next commit. When you execute the 

git add command, you are promoting changes from your working directory to the staging area, marking them as "staged". This mechanism allows you to craft well-defined, atomic commits by selectively adding only related changes, rather than committing every modification in your working directory at once.

The Git Directory (Repository): This is the hidden .git folder within your project directory. It is the heart of your local repository, containing all the metadata and the object database for your project. When you perform a git commit, the snapshot of files from the staging area is permanently stored in this database. A file is considered "committed" once it is safely stored here.

2.2 The Git Object Database: Blobs, Trees, and Commits
At its lowest level, Git is a key-value data store that manages four fundamental types of objects. Each object is identified by a unique 40-character SHA-1 hash derived from its content, making the storage system content-addressable.

Blob (Binary Large Object): This object stores the raw content of a file. A blob is simply a chunk of data; it contains no metadata, not even the filename. This separation of content from metadata is a key architectural decision. If multiple files in a repository have the exact same content, they all point to the same single blob object, making Git's storage remarkably efficient.

Tree: This object is the equivalent of a directory. A tree is a list of entries, with each entry containing a file mode, the object type (indicating whether it's a blob or another tree for a subdirectory), the object's SHA-1 hash, and the filename. This structure allows Git to recursively build a complete snapshot of the project's directory structure at a specific point in time.

Commit: This object represents a single snapshot of the project. A commit contains a pointer (the SHA-1 hash) to the top-level tree object for that snapshot, a pointer to its parent commit(s), author and committer information, a timestamp, and the commit message. The chain of parent pointers is what forms the project's history. The very first commit has no parent, while a merge commit has two or more parents.

This architectural choice to separate content (blob) from its metadata (tree and commit) is the source of much of Git's power. In older systems where a file's history is tied to its path, renaming a file is a significant operation that must be explicitly tracked. In Git, renaming a file is trivial. The blob containing the file's content remains unchanged, so its hash is identical. The change is simply reflected in a new tree object that points to the 

exact same blob but with a new filename. This makes operations like renaming and moving files incredibly fast and contributes to Git's highly efficient storage model, as content is never duplicated.

2.3 The Power of the Snapshot: Git's Directed Acyclic Graph (DAG)
The most significant conceptual difference between Git and its predecessors is its data model. Most older systems store information as a list of file-based changes or deltas. Git, in contrast, stores its data as a series of snapshots of the entire project filesystem.

When you commit, Git essentially takes a picture of what all your files look like at that moment and stores a reference to that snapshot. To be efficient, if a file has not changed since the last commit, Git doesn't store the file again; it simply includes a link to the previous identical file (blob) it has already stored.

The collection of commit objects, linked together by their parent pointers, forms a data structure known as a Directed Acyclic Graph (DAG). This graph represents the entire, non-linear history of the project. By traversing this graph from any commit, Git can perfectly recreate the state of every file in the project at that point in time. The "acyclic" nature of the graph ensures that a commit cannot be its own ancestor, which guarantees a coherent and logical timeline.

2.4 Ensuring Integrity: The Role of SHA-1 Hashing
Every object in Git—every commit, tree, and blob—is checksummed before it is stored and is then referred to by that checksum. Git uses the SHA-1 cryptographic hash function to generate a unique 40-character hexadecimal string for each object.

Calculation: The hash is not just of the raw content. For a blob, Git constructs a header (e.g., blob <size>\0) and concatenates it with the file's content before hashing. A commit's hash is calculated from all of its metadata, including the hash of its root tree, the hash(es) of its parent commit(s), the author and committer information, and the commit message.

Integrity: This mechanism provides a robust guarantee of data integrity. Because a commit's hash is dependent on its content and its entire parental history, it is impossible to change any file, directory, or commit in the past without Git detecting it. Any alteration would produce a different hash, breaking the chain.

Uniqueness: The hash serves as a unique identifier for every piece of content in the repository, enabling fast and efficient object lookups.

While SHA-1 has been the standard, its cryptographic security has been shown to have vulnerabilities. In response, the Git project is in the process of transitioning to the more secure SHA-256 hash function to ensure the long-term integrity of repositories, with compatibility mechanisms to support older SHA-1-based repositories during the transition.



## git clone URL:
1.  Clone a repository from a URL.The git clone URL command is used to create a copy of an existing Git repository from a specified URL. Here's a detailed explanation of how it works:

Initialization: Git initializes a new repository in a directory named after the repository being cloned.
Remote Repository: Git connects to the remote repository specified by the URL.
Fetching Data: Git downloads all the data from the remote repository, including commits, branches, and tags.
Checkout: Git checks out the default branch (usually main or master) and sets up the working directory with the latest files from that branch.
Remote Tracking: Git sets up remote-tracking branches for each branch in the remote repository, allowing you to track changes and fetch updates.
Here's an example of how to use the git clone command:

This command will create a directory named repository and clone the contents of the remote repository into it.

## git status :
1. Show the status of the working
directory
2. obtained from .git folder.
3. The `git status` command shows the status of the working directory and the staging area. It helps you see which changes have been staged, which haven't, and which files aren't being tracked by Git. Here's how it works internally and how it uses the 

.git

 folder and hashes:

1. **Index File Comparison**: Git compares the files in the working directory with the index file (`.git/index`). The index file contains the staged snapshot of the files.

2. **HEAD Comparison**: Git compares the index file with the HEAD commit (the latest commit on the current branch). The HEAD commit is stored in 

HEAD

.

3. **Object Database**: Git uses the object database in 

objects

 to retrieve the content of the files and their hashes. Each file's content is stored as a blob object, and its SHA-1 hash is used to identify it.

4. **Status Report**: Based on these comparisons, Git generates a status report showing:
   - Changes that are staged for the next commit.
   - Changes that are not staged for the next commit.
   - Untracked files.

Here's an improved version of your 

README.md

 file with a detailed explanation of `git status`:

```markdown
## git status:
1. Show the status of the working directory and the staging area.
2. Obtained from the `.git` folder:
   - **Index File Comparison**: Compares files in the working directory with the index file (`.git/index`).
   - **HEAD Comparison**: Compares the index file with the HEAD commit (`.git/HEAD`).
   - **Object Database**: Uses the object database in `.git/objects` to retrieve file content and hashes.
3. Status report includes:
   - Changes staged for the next commit.
   - Changes not staged for the next commit.
   - Untracked files.
```

Feel free to add more details or steps as needed.
## git add . :

1. Stage all changes in the current
directory
2. Index File Update: Git updates the index file (also known as the staging area or cache) located at index. This file keeps track of the changes that have been added to the staging area.

Object Creation: For any new or modified files, Git creates new objects in the objects directory. These objects are stored as blobs (binary large objects) which contain the file data.

References Update: Git updates the references in the refs directory to reflect the changes that have been staged. This includes updating the HEAD reference to point to the latest commit.

Here's an improved version of your README.md file with a more detailed explanation:

 - git add . :

1. Stage all changes in the current directory:
   - Updates the index file (`.git/index`) with the changes.
   - Creates new objects in the `.git/objects` directory for new or modified files.
   - Updates references in the `.git/refs` directory.

## git commit -m "message":

1. Commit staged changes with a message
2. When you run git commit -m "message", Git takes the staged changes and creates a new commit. Here's a detailed explanation of what happens at the .git folder level and how the commit hash is generated:

Index File: Git reads the staged changes from the index file (.git/index).

Tree Object: Git creates a tree object that represents the state of the directory at the time of the commit. This tree object is stored in the objects directory.

Commit Object: Git creates a commit object that includes:

The tree object hash.
The parent commit hash (if any).
The author and committer information.
The commit message. This commit object is also stored in the objects directory.
Commit Hash: The commit hash is a SHA-1 hash generated from the commit object content. This hash uniquely identifies the commit.

References Update: Git updates the reference for the current branch in the heads directory to point to the new commit hash. The HEAD reference in HEAD is also updated to point to this new commit.

Here's an improved version of your README.md file with a detailed explanation of git commit -m "message":

- **Index File**: Reads staged changes from the index file (`.git/index`).
   - **Tree Object**: Creates a tree object representing the directory state, stored in `.git/objects`.
   - **Commit Object**: Creates a commit object with:
     - Tree object hash.
     - Parent commit hash (if any).
     - Author and committer information.
     - Commit message.
     This commit object is stored in `.git/objects`.
   - **Commit Hash**: Generates a SHA-1 hash from the commit object content.
   - **References Update**: Updates the branch reference in `.git/refs/heads` and the HEAD reference in `.git/HEAD`.

      git commit -am "message"

## git push 

   The `git push` command is used to upload local repository content to a remote repository. Here's a detailed explanation of how it works:

1. **Authentication**: Git authenticates with the remote repository using the credentials provided.

2. **References Update**: Git updates the remote references (branches, tags) to match the local references. This involves updating the remote repository's 

refs

 directory.

3. **Object Transfer**: Git transfers the necessary objects (commits, trees, blobs) from the local 

objects

 directory to the remote repository. Only the objects that are not already present in the remote repository are transferred.

4. **Remote Branch Update**: Git updates the remote branch to point to the new commit hash. This involves updating the remote repository's 

heads

 directory.

Here's an improved version of your 

README.md

 file with a detailed explanation of `git push`:

```markdown
## git push:

1. Upload local repository content to a remote repository:
   - **Authentication**: Authenticates with the remote repository using provided credentials.
   - **References Update**: Updates remote references to match local references (`.git/refs`).
   - **Object Transfer**: Transfers necessary objects (commits, trees, blobs) from local `.git/objects` to remote repository.
   - **Remote Branch Update**: Updates remote branch to point to the new commit hash (`.git/refs/heads`).
```
## git pull: 
     
  1.  The `git pull` command is used to fetch and integrate changes from a remote repository into the current branch. Here's a detailed explanation of how it works:

1. **Fetching Data**: Git fetches the latest changes from the remote repository. This includes commits, branches, and tags. The fetched data is stored in the local 

objects

 directory and the remote-tracking branches in 

remotes

.

2. **Merge or Rebase**: After fetching the data, Git integrates the changes into the current branch. This can be done using either a merge or a rebase, depending on the configuration or the options provided with the `git pull` command.

   - **Merge**: Combines the fetched changes with the current branch, creating a new merge commit.
   - **Rebase**: Reapplies the local commits on top of the fetched changes, creating a linear history.

Here's an improved version of your 

README.md

 file with a detailed explanation of `git pull`:

```markdown
## git pull:

1. Fetch and integrate changes from a remote repository into the current branch:
   - **Fetching Data**: Fetches latest changes from the remote repository, storing them in `.git/objects` and updating remote-tracking branches in `.git/refs/remotes`.
   - **Merge or Rebase**: Integrates fetched changes into the current branch:
     - **Merge**: Combines fetched changes with the current branch, creating a new merge commit.
     - **Rebase**: Reapplies local commits on top of the fetched changes, creating a linear history.
```
# Conflict Resolution : 
If two or more developers work and commit in the same branch ,conflicts may arise,say both are associated with the same git object with commit id and  Tree object hash, Parent commit hash (if any),
 Author and committer information, Commit message..Hence conflict resolution is important . 
## git branch :
 
List branches.The `git branch` command is used to manage branches in a Git repository. Here's a detailed explanation of how it works:

1. **Listing Branches**: When you run `git branch` without any arguments, Git lists all the branches in the repository. The current branch is highlighted with an asterisk (`*`).

2. **Creating a Branch**: You can create a new branch using `git branch <branch-name>`. This creates a new branch pointer in the [`.git/refs/heads`](.git/refs/heads ) directory, pointing to the current commit.

3. **Deleting a Branch**: You can delete a branch using `git branch -d <branch-name>` (for merged branches) or `git branch -D <branch-name>` (for unmerged branches). This removes the branch pointer from the [`.git/refs/heads`](.git/refs/heads ) directory.

4. **Renaming a Branch**: You can rename a branch using `git branch -m <old-name> <new-name>`. This updates the branch pointer in the [`.git/refs/heads`](.git/refs/heads ) directory.

5. **Checking Out a Branch**: You can switch to a different branch using `git checkout <branch-name>` or `git switch <branch-name>`. This updates the HEAD reference in [`.git/HEAD`](.git/HEAD ) to point to the new branch.

Here's an improved version of your [`README.md`](README.md ) file with a detailed explanation of `git branch`:

```markdown
## git branch:

1. Manage branches in a Git repository:
   - **Listing Branches**: Lists all branches in the repository. The current branch is highlighted with an asterisk (`*`).
     ```sh
     git branch
     ```
   - **Creating a Branch**: Creates a new branch pointer in 

heads

.
     ```sh
     git branch <branch-name>
     ```
   - **Deleting a Branch**: Removes the branch pointer from 

heads

.
     ```sh
     git branch -d <branch-name>  # For merged branches
     git branch -D <branch-name>  # For unmerged branches
     ```
   - **Renaming a Branch**: Updates the branch pointer in 

heads

.
     ```sh
     git branch -m <old-name> <new-name>
     ```
   - **Checking Out a Branch**: Switches to a different branch, updating the HEAD reference.
     ```sh
     git checkout <branch-name>
     # or
     git switch <branch-name>
     ```
```

## git branch:

1. Manage branches in a Git repository:
   - **Listing Branches**: Lists all branches in the repository. The current branch is highlighted with an asterisk (`*`).
     ```sh
     git branch
     ```
   - **Creating a Branch**: Creates a new branch pointer in [heads](http://_vscodecontentref_/0).
     ```sh
     git branch <branch-name>
     ```
   - **Deleting a Branch**: Removes the branch pointer from [heads](http://_vscodecontentref_/1).
     ```sh
     git branch -d <branch-name>  # For merged branches
     git branch -D <branch-name>  # For unmerged branches
     ```
   - **Renaming a Branch**: Updates the branch pointer in [heads](http://_vscodecontentref_/2).
     ```sh
     git branch -m <old-name> <new-name>
     ```
   - **Checking Out a Branch**: Switches to a different branch, updating the HEAD reference.
     ```sh
     git checkout <branch-name>
     # or
     git switch <branch-name>

     git checkout -b <branch-name>
     ```
      
       The git branch command works by manipulating the references in the .git folder. Here's how it works in detail:

Listing Branches: When you run git branch without any arguments, Git reads the branch references from the .git/refs/heads directory and lists them. The current branch is indicated by the HEAD reference in .git/HEAD.

Creating a Branch: When you create a new branch using git branch <branch-name>, Git creates a new file in the .git/refs/heads directory with the name of the new branch. This file contains the commit hash that the branch points to.

Deleting a Branch: When you delete a branch using git branch -d <branch-name> or git branch -D <branch-name>, Git removes the corresponding file from the .git/refs/heads directory.

Renaming a Branch: When you rename a branch using git branch -m <old-name> <new-name>, Git renames the corresponding file in the .git/refs/heads directory.

Checking Out a Branch: When you switch to a different branch using git checkout <branch-name> or git switch <branch-name>, Git updates the HEAD reference in .git/HEAD to point to the new branch.

Here's an improved version of your README.md file with a detailed explanation of how git branch works in the .git folder:

Feel free to add more details or steps as needed. Feel free to add more details or steps as needed.


## Always work on branches of main branch and not on main branch:
   
   In Industries and open source projects , the main branch is locked and is not accessible to contributors, as the main branch is deployed on the server . The code is written on some other branch and multiple branches are created from the branch of main branch , once the work is done, there is reviewing of the entire branch and the codebases are reviewed and if everything is industrially acceptable then after all checks the code is merged to the main branch.

   Once a Pull Request is Merged , Delete the Pull Request.

## Squashing

   Git squashing is the process of combining multiple commits into a single commit. This is often done to clean up a commit history before merging a feature branch into the main branch. Here's an in-depth analysis of how git squashing works:

1. **Interactive Rebase**: The most common way to squash commits is through an interactive rebase. You can start an interactive rebase with the command:
   ```sh
   git rebase -i HEAD~N
   ```
   where `N` is the number of commits you want to squash.

2. **Rebase Todo List**: This command opens an editor with a list of commits to be rebased. Each commit is prefixed with a command (e.g., `pick`). To squash commits, you change the command from `pick` to `squash` (or `s`).

3. **Combining Commits**: When you mark a commit to be squashed, Git combines it with the previous commit. You can also edit the commit messages to create a single, cohesive message.

4. **Applying Changes**: After editing the rebase todo list, save and close the editor. Git will then apply the changes, combining the specified commits into a single commit.

5. **Resolving Conflicts**: If there are conflicts during the rebase, Git will pause and allow you to resolve them. After resolving conflicts, you can continue the rebase with:
   ```sh
   git rebase --continue
   ```

6. **Force Push**: After squashing commits, you may need to force push the changes to the remote repository, especially if the branch has already been pushed. Use:
   ```sh
   git push --force
   ```

Here's an improved version of your [`README.md`](README.md ) file with a detailed explanation of git squashing:

```markdown
## Squashing

Git squashing is the process of combining multiple commits into a single commit. This is often done to clean up a commit history before merging a feature branch into the main branch.

1. **Interactive Rebase**: Start an interactive rebase with the command:
   ```sh
   git rebase -i HEAD~N
   ```
   where `N` is the number of commits you want to squash.

2. **Rebase Todo List**: This command opens an editor with a list of commits to be rebased. Each commit is prefixed with a command (e.g., `pick`). To squash commits, change the command from `pick` to `squash` (or `s`).

3. **Combining Commits**: When you mark a commit to be squashed, Git combines it with the previous commit. You can also edit the commit messages to create a single, cohesive message.

4. **Applying Changes**: After editing the rebase todo list, save and close the editor. Git will then apply the changes, combining the specified commits into a single commit.

5. **Resolving Conflicts**: If there are conflicts during the rebase, Git will pause and allow you to resolve them. After resolving conflicts, continue the rebase with:
   ```sh
   git rebase --continue
   ```

6. **Force Push**: After squashing commits, you may need to force push the changes to the remote repository, especially if the branch has already been pushed. Use:
   ```sh
   git push --force

Squash and merge is a hybrid approach where we lose history.
//
//

Squashing commits helps maintain a clean and readable commit history, making it easier to understand the changes made in a branch.

  
## Rebase:
         Git rebase is a powerful tool for integrating changes from one branch into another. It allows you to move or combine a sequence of commits to a new base commit. Here's an in-depth analysis of how git rebase works:

Rebase Command: The basic command for rebasing is:

This command moves the commits from the current branch onto the tip of <base-branch>.

Rebase Process:

Identify Commits: Git identifies the commits that are unique to the current branch (i.e., not present in the base branch).
Reapply Commits: Git re-applies these commits on top of the base branch, one by one.
Interactive Rebase: You can use interactive rebase to edit, reorder, squash, or drop commits. Start an interactive rebase with:

This opens an editor with a list of commits to be rebased. You can modify the commands (e.g., pick, squash, edit) to control how each commit is handled.

Conflict Resolution: If there are conflicts during the rebase, Git will pause and allow you to resolve them. After resolving conflicts, continue the rebase with:

If you want to abort the rebase and return to the original state, use:

Rebase vs. Merge: Unlike git merge, which creates a new merge commit, git rebase rewrites the commit history. This results in a linear history, which can be easier to read and understand.

Force Push: After rebasing, you may need to force push the changes to the remote repository, especially if the branch has already been pushed. Use:

Here's an improved version of your README.md file with a detailed explanation of git rebase:

Rebase Process:

Identify Commits: Git identifies the commits unique to the current branch.
Reapply Commits: Git re-applies these commits on top of the base branch.
Interactive Rebase: Edit, reorder, squash, or drop commits:

Modify the commands (e.g., pick, squash, edit) in the editor to control how each commit is handled.

Conflict Resolution: If there are conflicts during the rebase, Git will pause and allow you to resolve them. After resolving conflicts, continue the rebase with:

To abort the rebase and return to the original state, use:

Rebase vs. Merge: Unlike git merge, which creates a new merge commit, git rebase rewrites the commit history, resulting in a linear history.

Force Push: After rebasing, you may need to force push the changes to the remote repository:

Rebasing helps maintain a clean and linear commit history, making it easier to understand the changes made in a branch.

git rebase base-branch: rewrites the timeline of the branch.

git rebase -i base-branch  

git rebase --continue
git rebase --abort: 
git push --force:After rebasing, you may need to force push

Unlike git merge, which creates a new merge commit, git rebase rewrites the commit history, resulting in a linear history.

main- Single Source Truth. Every dev takes a new branch from main , you can independently work in your own branch.

How to keep your branch in sync with the main? -> git rebase  main

What should be the best way to merge your branch to main: Squash Merge.

## git revert:
    
    The git revert command is used to create a new commit that undoes the changes made by a previous commit. Unlike git reset, which alters the commit history, git revert maintains the history by adding a new commit. Here's an in-depth analysis of how git revert works and its impact on the .git folder:

Revert Command: The basic command for reverting a commit is:

This creates a new commit that reverses the changes introduced by the specified commit.

Creating a Revert Commit:

Identify Changes: Git identifies the changes made by the commit to be reverted.
Apply Reverse Changes: Git applies the reverse of these changes to the working directory and stages them.
Commit Reversion: Git creates a new commit with the reversed changes. This commit has a new hash and includes a message indicating that it reverts a specific commit.
Impact on .git Folder:

Objects: A new commit object is created in the objects directory. This object contains the metadata and the reversed changes.
References: The branch reference in heads is updated to point to the new revert commit. The HEAD reference in HEAD is also updated to point to this new commit.
Conflict Resolution: If there are conflicts during the revert, Git will pause and allow you to resolve them. After resolving conflicts, continue the revert with:

To abort the revert and return to the original state, use:

Here's an improved version of your README.md file with a detailed explanation of git revert:

Creating a Revert Commit:

Identify Changes: Git identifies the changes made by the commit to be reverted.
Apply Reverse Changes: Git applies the reverse of these changes to the working directory and stages them.
Commit Reversion: Git creates a new commit with the reversed changes. This commit has a new hash and includes a message indicating that it reverts a specific commit.
Impact on .git Folder:

Objects: A new commit object is created in the objects directory, containing the metadata and the reversed changes.
References: The branch reference in heads is updated to point to the new revert commit. The HEAD reference in HEAD is also updated to point to this new commit.
Conflict Resolution: If there are conflicts during the revert, Git will pause and allow you to resolve them. After resolving conflicts, continue the revert with:

To abort the revert and return to the original state, use:
Reverting commits helps maintain a clean and accurate commit history, making it easier to understand the changes made in a branch.

Revert Command: The basic command for reverting a commit is:

This creates a new commit that reverses the changes introduced by the specified commit.

Creating a Revert Commit:

Identify Changes: Git identifies the changes made by the commit to be reverted.
Apply Reverse Changes: Git applies the reverse of these changes to the working directory and stages them.
Commit Reversion: Git creates a new commit with the reversed changes. This commit has a new hash and includes a message indicating that it reverts a specific commit.
Impact on .git Folder:

Objects: A new commit object is created in the objects directory. This object contains the metadata and the reversed changes.
References: The branch reference in heads is updated to point to the new revert commit. The HEAD reference in HEAD is also updated to point to this new commit.
Conflict Resolution: If there are conflicts during the revert, Git will pause and allow you to resolve them. After resolving conflicts, continue the revert with:

Revert Command: The basic command for reverting a commit is:

This creates a new commit that reverses the changes introduced by the specified commit.

Creating a Revert Commit:
git revert <commit-hash>
Identify Changes: Git identifies the changes made by the commit to be reverted.
Apply Reverse Changes: Git applies the reverse of these changes to the working directory and stages them.
Commit Reversion: Git creates a new commit with the reversed changes. This commit has a new hash and includes a message indicating that it reverts a specific commit.
Impact on .git Folder:

Objects: A new commit object is created in the objects directory. This object contains the metadata and the reversed changes.
References: The branch reference in heads is updated to point to the new revert commit. The HEAD reference in HEAD is also updated to point to this new commit.
Conflict Resolution: If there are conflicts during the revert, Git will pause and allow you to resolve them. After resolving conflicts, continue the revert with:
git revert --continue
```
