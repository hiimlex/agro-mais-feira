echo "Gerando Build"
echo "###############"
yarn build
echo "##############"
cd dist
git push heroku build:master

