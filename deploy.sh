timestamp=$(date "+%Y-%m-%d %H:%M:%S")

npm run build
git add .
git commit 
git push

scp -r build ubuntu@lehighnumericalanalysis.com:/var/www/
