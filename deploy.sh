timestamp=$(date "+%Y-%m-%d %H:%M:%S")

npm run build
git add .
git commit -m "Deploy $timestamp"
git push

scp -r build ubuntu@lehighnumericalanalysis.com:/var/www/
