@echo off
cd /d E:\nazmul-projects\portfolio
npx.cmd vercel deploy --prod --yes --logs > deploy-full.txt 2>&1
echo EXIT_CODE=%ERRORLEVEL% >> deploy-full.txt