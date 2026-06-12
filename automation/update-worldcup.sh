#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="/projects/world-cup-2026"
PROMPT_FILE="$REPO_DIR/automation/update-worldcup.prompt.md"
LOG_DIR="$REPO_DIR/automation/logs"
LOCK_FILE="/tmp/worldcup-2026-update.lock"
RUN_ID="$(date -u +%Y%m%dT%H%M%SZ)"
LOG_FILE="$LOG_DIR/update-$RUN_ID.log"

mkdir -p "$LOG_DIR"

exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] previous automation still running" >> "$LOG_FILE"
  exit 0
fi

{
  echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] worldcup automation started"
  cd "$REPO_DIR"

  codex exec \
    --cd "$REPO_DIR" \
    --sandbox danger-full-access \
    --ask-for-approval never \
    --search \
    "$(cat "$PROMPT_FILE")"

  echo "[$(date -u '+%Y-%m-%dT%H:%M:%SZ')] worldcup automation finished"
} >> "$LOG_FILE" 2>&1
