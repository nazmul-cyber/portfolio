# One-time GitHub setup script for Nazmul Hasan portfolio projects
# Run in PowerShell:  powershell -ExecutionPolicy Bypass -File setup-github.ps1

$ErrorActionPreference = "Stop"
$username = "nazmul-cyber"
$email = "nazmulhasan257038@gmail.com"
$name = "Nazmul Hasan"

git config --global user.name $name
git config --global user.email $email

Write-Host "`n=== GitHub Setup for $username ===" -ForegroundColor Green
Write-Host "1. Create GitHub account: https://github.com/signup"
Write-Host "   Username should be: $username"
Write-Host "2. Create these EMPTY repos on GitHub (no README):"
Write-Host "   - $username (profile README)"
Write-Host "   - portfolio"
Write-Host "   - pv-panel-simulation"
Write-Host "   - todo-app"
Write-Host "   - bubu-dudu-store"
Write-Host "3. Then run: powershell -ExecutionPolicy Bypass -File push-all.ps1`n"