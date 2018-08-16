echo "1) yarn build..."
yarn build


echo "2) mv web files..."
rm -rf ./line_bot_server/static/*
rm -rf ./line_bot_server/templates/*
cp ./dist/*.js ./line_bot_server/static/
cp ./dist/*.html ./line_bot_server/templates/

cp -r ./line_bot_server/* ../../PycharmProjects/line_bot_server/


echo "3) deploying on heroku..."
cd ../../PycharmProjects/line_bot_server/
git add . && git commit -m 'init'
git push heroku master


echo "4) finish deploying..."