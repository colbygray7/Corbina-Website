# Git Workflow

Standard git workflow for the Corbina Website project.

## Making Commits

### When to Commit
- After completing a feature or design iteration
- After fixing bugs or design mismatches
- Before major changes or experiments
- When user explicitly requests it

### Commit Process

1. **Check Status**
   ```bash
   git status
   ```

2. **Review Changes**
   ```bash
   git diff
   ```

3. **Stage Files**
   ```bash
   git add .
   ```
   Or selectively:
   ```bash
   git add index.html
   ```

4. **Commit with Message**
   ```bash
   git commit -m "Description of changes"
   ```

5. **Push to Remote** (if needed)
   ```bash
   git push origin main
   ```

## Commit Message Style

Check recent commits with `git log` to match the repository's style.

Format:
```
Short description of change

- Detail 1
- Detail 2
- Detail 3

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Best Practices

- Don't commit sensitive files (.env, credentials, tokens)
- Don't commit large binary files (screenshots can be in .gitignore)
- Write clear, descriptive commit messages
- Commit logical units of work
