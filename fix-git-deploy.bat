@echo off
cd /d "%~dp0"
echo Fixing Git email for Vercel + GitHub...
git config user.email "nazmulhasan257038@gmail.com"
git config user.name "Nazmul Hasan"
git config --global user.email "nazmulhasan257038@gmail.com"
git config --global user.name "Nazmul Hasan"
echo.
echo Email set to: nazmulhasan257038@gmail.com
echo.
echo Committing with correct author...
git add -A
git commit -m "Portfolio updates" --author="Nazmul Hasan <nazmulhasan257038@gmail.com>" 2>nul
if %ERRORLEVEL% NEQ 0 (
  git commit --amend --author="Nazmul Hasan <nazmulhasan257038@gmail.com>" --no-edit
)
echo.
echo Pushing to GitHub...
git push origin main
if %ERRORLEVEL% NEQ 0 (
  echo GitHub push failed - try: git push -u origin main
  echo Or deploy direct to Vercel below...
)
echo.
echo Deploying to Vercel...
call npx vercel --prod --yes
echo.
echo Done. Hard refresh: Ctrl+Shift+R
pause