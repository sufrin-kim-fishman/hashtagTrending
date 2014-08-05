# PHASE 1
## -Node Project
--learn to use the Twitter streaming API
--learn node
--web sockets
--get ALL streaming twitter data on the command line
--find out how to make tweets appear and disappear as they come in (probably AJAX)



# PHASE 2
## -Rails Project
--set up users
--language and country preferences
--limit visible data based on preferences

-User Interface
--routes and controllers
--dashboard to set preferences




#PHASE 3 (optional)
## -Cool Visualization
--make a map
--use google translate API to translate tweets based on language preferences
--only show some hashtags (specified in user preferences)
--use web sockets to display tweets on map in real time
-algorithm to count top hashtags


BEFORE PRODUCTION
-add application.yml back to gitignore
-buy a domain
-think of awesome name
-change callback Twitter URL on app dashboard


PLAN FOR TUESDAY AUGUST 5
-finish code school
-set up a root/index page
-make tweets appear and disappear as they come in
-models and associations (seed data with all countries, users with countries)


HERE IS OUR TECHNOLOGY STACK
- Node to get the tweets from the API (done)
- Node will shove tweets into the Postgres database (we don't need no stinking Redis)
- Node to use socket.io to give tweets to views in JSON format
- Rails for users/routes and to connect to the database to process and analyze tweets
- AJAX to put processed tweets on the page
- Rails for views
- Node/JavaScript for doing some of the analytics. this comes later


