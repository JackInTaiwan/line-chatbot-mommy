echo "1) yarn build..."
yarn build-calendar
yarn build-setting


echo "2) mv web files..."
rm -rf ./line_bot_server/static/*
rm -rf ./line_bot_server/templates/*
cp ./dist_calendar/static/*.js ./line_bot_server/static/
cp ./dist_setting/static/*.js ./line_bot_server/static/
mv ./dist_calendar/index.html ./dist_calendar/index_calendar.html
cp ./dist_calendar/index_calendar.html ./line_bot_server/templates/
mv ./dist_setting/index.html ./dist_setting/index_setting.html
cp ./dist_setting/index_setting.html ./line_bot_server/templates/

cp -r ./line_bot_server/* ../../PycharmProjects/line_bot_server/


echo "3) deploying on heroku..."
cd ../../PycharmProjects/line_bot_server/
git add . && git commit -m 'init'
git push heroku master


echo "4) finish deploying..."