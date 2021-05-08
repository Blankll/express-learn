#!/bin/bash -e
cd $(dirname $0)/..
git checkout master
git pull -r
NCU=$(npm list -g npm-check-updates)
if [[ -z "$(npm list -g npm-check-updates | grep npm-check-updates@)" ]]; then
    npm install -g npm-check-updates
fi

if [[ ! -z "$(ncu | grep "All dependencies match the latest package versions")" ]]; then
    echo "All dependencies match the latest package versions :)"
    exit 0
fi
git checkout -b task/dependencies-upgrade

echo $(npm outdated)

ncu -u
echo "u"
npm install

npm run test

git add package*

git commit -m 'upgrade dependencies'

git push --set-upstream origin task/dependencies-upgrade

