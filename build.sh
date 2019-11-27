echo "Gerando Build"
echo "###############"
yarn build
echo "##############"
cd dist
git add -A 
git commit -m "build"
git push heroku build:master

