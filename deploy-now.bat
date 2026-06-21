@echo off
cd /d "%~dp0"
echo.
echo [1/2] Trying Vercel...
call npx vercel --prod --yes
if %ERRORLEVEL% EQU 0 (
  echo SUCCESS: https://portfolio-eight-red-48.vercel.app
  goto done
)
echo Vercel limit hit. Trying Netlify...
echo.
echo [2/2] Netlify anonymous deploy...
call npx netlify-cli deploy --prod --dir . --allow-anonymous
if %ERRORLEVEL% EQU 0 (
  echo.
  echo Netlify deploy done. Claim the site within 60 minutes to keep it live.
  echo Open the URL shown above in your browser.
  goto done
)
echo Both deploys failed. Open index.html locally to preview.
:done
pause