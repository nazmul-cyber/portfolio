# Push all portfolio projects to GitHub (account: nazmul213)
# Run: powershell -ExecutionPolicy Bypass -File push-all.ps1

$ErrorActionPreference = "Stop"
$username = "nazmul213"
$base = "https://github.com/$username"

function Push-Repo($path, $repo) {
    Write-Host "`n--- $repo ---" -ForegroundColor Cyan
    Set-Location $path
    if (-not (Test-Path ".git")) {
        git init
        git branch -M main
    }
    git add .
    $status = git status --porcelain
    if ($status) {
        git commit -m "Update: $repo"
    }
    $remotes = git remote 2>$null
    if ($remotes -notcontains "origin") {
        git remote add origin "$base/$repo.git"
    }
    git push -u origin main --force
    Write-Host "Pushed $repo" -ForegroundColor Green
}

Push-Repo "$env:USERPROFILE\nazmul213" "$username"
Push-Repo "$env:USERPROFILE\portfolio" "portfolio"
Push-Repo "$env:USERPROFILE\Desktop\pv-panel-simulation" "pv-panel-simulation"
Push-Repo "$env:USERPROFILE\todo-app" "todo-app"
Push-Repo "$env:USERPROFILE\ecommerce" "bubu-dudu-store"

Write-Host "`nDone! Portfolio live at: https://nazmul-hasan-alif.vercel.app" -ForegroundColor Green