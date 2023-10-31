timestamp=$(date "+%Y-%m-%d %H:%M:%S")

npm run build
git add .
git commit 
git push

scp -r build admin@131.106.103.102/:/var/www/
