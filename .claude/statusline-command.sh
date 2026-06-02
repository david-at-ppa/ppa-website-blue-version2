#!/usr/bin/env bash
# Claude Code status line: context window usage with progress bar

input=$(cat)

used=$(echo "$input" | jq -r '.context_window.total_input_tokens // 0')
total=$(echo "$input" | jq -r '.context_window.context_window_size // 0')
pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

if [ -z "$pct" ] || [ "$total" -eq 0 ]; then
  printf "Context: no data"
  exit 0
fi

# Build a 20-character progress bar using awk
bar_width=20
filled=$(awk -v p="$pct" -v w="$bar_width" 'BEGIN { printf "%d", (p/100)*w }')
empty=$(( bar_width - filled ))
bar=$(awk -v n="$filled" 'BEGIN { s=""; for(i=0;i<n;i++) s=s"#"; print s }')
spaces=$(awk -v n="$empty" 'BEGIN { s=""; for(i=0;i<n;i++) s=s"."; print s }')

# Format token counts with K suffix for readability
used_k=$(awk -v n="$used" 'BEGIN { if(n>=1000) printf "%.1fK", n/1000; else printf "%d", n }')
total_k=$(awk -v n="$total" 'BEGIN { if(n>=1000) printf "%.0fK", n/1000; else printf "%d", n }')

printf "[%s%s] %s/%s (%.0f%%)" "$bar" "$spaces" "$used_k" "$total_k" "$pct"
