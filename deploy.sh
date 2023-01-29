#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run generate

# navigate into the build output directory
cd dist

# fix jekyll
touch .nojekyll

#copy index.html to 404.html
# cp index.html 404.html

mkdir cv
cp -avr _nuxt cv/_nuxt

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mikalai2006/cv.git master:gh-pages

cd -