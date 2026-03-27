# Docs to README sync

`docs.md` in this repo is the canonical documentation source for both the web site and the main `AmigaVision` repository.

The workflow at `.github/workflows/sync-readme-to-amigavision.yml` removes the Jekyll front matter from `docs.md`, writes the remaining Markdown to `README.md` in `amigavision/AmigaVision`, and pushes the change if needed.

To make the workflow able to push to the main repo, add this repository secret in GitHub:

* `AMIGAVISION_REPO_SYNC_TOKEN`

The token should have permission to push to `amigavision/AmigaVision`. A fine-grained personal access token with repository contents write access to that repository is sufficient.
