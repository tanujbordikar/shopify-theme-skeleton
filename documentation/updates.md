# Fetching or Syncing updates from skeleton theme into your theme

1. **Fetch Upstream Changes**:
   ```bash
   git fetch upstream
   ```
   This command retrieves all the changes from the upstream repository but doesn't merge them into your current branch. It updates your remote-tracking branches (`upstream/main`, for example).

2. **Create a New Branch for Merging**:
   ```bash
   git checkout -b merge_upstream
   ```
   Here, you create and switch to a new branch (`merge_upstream`) where you can safely manage the merge. This separation ensures that your main branch remains unaffected until you decide to merge these changes.

3. **Merge Upstream Changes**:
   ```bash
   git merge upstream/main
   ```
   This merges the fetched changes from the upstream's main branch into your new branch (`merge_upstream`). If the upstream's default branch has a different name, replace `main` with that name.

   - manage conflicts if any

4. **Exclude Specific Files**:
   ```bash
   git checkout HEAD <folder/file**>
   ```
   After the merge, if you want to exclude changes to specific files like `file1.txt` and `file2.txt`, this command will revert them to their pre-merge state. Essentially, it undoes the changes for these files brought by the merge.

5. **Commit the Merge**:
   ```bash
   git commit -m "Merged upstream changes excluding specific files"
   ```
   This step commits the merge to your branch. The commit message is a good place to document that you've excluded certain files from the upstream changes.

6. **Switch Back to Your Main Branch**:
   ```bash
   git checkout main
   ```
   Now, you switch back to your main working branch (e.g., `main`).

7. **Merge the Custom Merge Branch**:
   ```bash
   git merge merge_upstream
   ```
   Here, you merge the `merge_upstream` branch into your main branch. This action brings in all the upstream changes, except for the excluded files.

8. **Push Changes to Your Repository**:
   ```bash
   git push origin main
   ```
   Finally, you push the updated main branch to your GitHub repository, thereby synchronizing your local changes with the remote repository.

![shopify theme skeleton update from upstream](https://github.com/dear-digital/shopify-theme-skeleton/assets/78968174/d983a01f-0c4d-4a27-b942-5b2b910fe613)



## Future updates:

_Create a github action to automate this process_
