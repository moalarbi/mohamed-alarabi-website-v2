#!/bin/bash
set -e

echo "🚀 Mohamed AlArabi Website — Deploy Script"
echo "==========================================="

# ── STEP 1: GitHub ──────────────────────────────
echo ""
echo "📦 STEP 1: Creating GitHub repo..."

GITHUB_TOKEN="${GITHUB_TOKEN:-}"
REPO_NAME="mohamed-alarabi-website"
GITHUB_USER="${GITHUB_USER:-}"

if [ -z "$GITHUB_TOKEN" ] || [ -z "$GITHUB_USER" ]; then
  echo "❌ Missing env vars. Run:"
  echo "   export GITHUB_TOKEN=ghp_xxxxxxxxxxxx"
  echo "   export GITHUB_USER=your-github-username"
  exit 1
fi

# Create repo via GitHub API
RESPONSE=$(curl -s -X POST https://api.github.com/user/repos \
  -H "Authorization: token $GITHUB_TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  -d "{
    \"name\": \"$REPO_NAME\",
    \"description\": \"Mohamed AlArabi Personal Brand — Next.js 14 + TypeScript + Tailwind\",
    \"private\": false,
    \"auto_init\": false
  }")

REPO_URL=$(echo $RESPONSE | grep -o '"ssh_url": "[^"]*"' | cut -d'"' -f4)
CLONE_URL=$(echo $RESPONSE | grep -o '"clone_url": "[^"]*"' | cut -d'"' -f4)
HTML_URL=$(echo $RESPONSE | grep -o '"html_url": "[^"]*"' | head -1 | cut -d'"' -f4)

if [ -z "$CLONE_URL" ]; then
  echo "⚠️  Repo may already exist. Using existing..."
  CLONE_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
  HTML_URL="https://github.com/$GITHUB_USER/$REPO_NAME"
fi

echo "✅ GitHub repo: $HTML_URL"

# Push code
git remote add origin "https://$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git" 2>/dev/null || \
  git remote set-url origin "https://$GITHUB_TOKEN@github.com/$GITHUB_USER/$REPO_NAME.git"

git push -u origin main --force
echo "✅ Code pushed to GitHub!"

# ── STEP 2: Vercel ──────────────────────────────
echo ""
echo "🔺 STEP 2: Deploying to Vercel..."

if ! command -v vercel &> /dev/null; then
  npm install -g vercel
fi

VERCEL_TOKEN="${VERCEL_TOKEN:-}"
if [ -z "$VERCEL_TOKEN" ]; then
  echo "❌ Missing VERCEL_TOKEN. Run:"
  echo "   export VERCEL_TOKEN=your_vercel_token"
  echo "   (Get it from: vercel.com/account/tokens)"
  exit 1
fi

# Deploy
cd "$(dirname "$0")"
vercel --token "$VERCEL_TOKEN" \
  --name "$REPO_NAME" \
  --yes \
  --prod

echo ""
echo "🎉 Done! Your site is live."
