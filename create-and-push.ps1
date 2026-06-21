# Push all projects to GitHub (account: nazmul-cyber)
$ErrorActionPreference = "Stop"
$username = "nazmul-cyber"
$base = "https://github.com/$username"

function Push-Repo($path, $repo) {
    Write-Host "`n--- $repo ---" -ForegroundColor Cyan
    Set-Location $path
    if (-not (Test-Path ".git")) { git init; git branch -M main }
    git add .
    $status = git status --porcelain
    if ($status) { git commit -m "Update: $repo" }
    git remote remove origin 2>$null
    git remote add origin "$base/$repo.git"
    git push -u origin main --force
    Write-Host "Pushed $repo" -ForegroundColor Green
}

Push-Repo "$env:USERPROFILE\nazmul-cyber" "$username"
Push-Repo "$env:USERPROFILE\portfolio" "portfolio"
Push-Repo "$env:USERPROFILE\Desktop\pv-panel-simulation" "pv-panel-simulation"
Push-Repo "$env:USERPROFILE\todo-app" "todo-app"
Push-Repo "$env:USERPROFILE\ecommerce" "bubu-dudu-store"

Write-Host "`nDone! https://github.com/$username" -ForegroundColor Green