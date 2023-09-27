#!/usr/bin/env sh

set -e

# npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:abdalhamedemad/abdalhamedemad.github.io.git master
git push -f  git@github.com:abdalhamedemad/Portfolio.git master:gh-pages
# git push -f git@github.com:abdalhamedemad/Porfolio.git master:gh-pages
cd -