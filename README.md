GitHub repo for the UofTHacks X hackathon - building an app that scrapes tweets from nearby your location and alerts the user to any untoward activity happening in the Toronto Transit Commission (TTC).

Team Juicebox presents: TTC Alerts (But, Like, Better)!

## The Team
The awesome team members who contributed to this app are:
- Shysta Sehgal, a third-year Computer Science and Cogntive Science student
- Denny Maranga, a PhD student in Vertebrate Palaeontology
- Dorothy Lee, a first-year Computer Science student, and
- Terrisa Zong, a first-year Computer Engineering student.
This was everyone's first hackathon, and we all learned some really cool skills.

## Contributions
Shysta and Denny worked on the backend for this app. They used the Twint API to scrape recent tweets from Twitter about any unsafe activities happening on the TTC. Then, they used the co:here API to classify tweets as delays, alerts to avoid, or just opinions on how bad the TTC is. Finally, the co:here API was used again to summarize the alert tweets so that users who have signed up for the alerts can get short notifications of real-time incidents on the TTC as they happen (and are talked about). 

Dorothy learned React.js in one day (which is _commendable_) and ran into a lot of challenges. She created a working prototype of our frontend design and created all the .js work for this project.

Terrisa worked on creating a prototype for the web app on Figma. 

## The Directory
The file ```ttcalertsbutbetter.ipynb``` has the backend code in Python hosted on Colab. The file ```twitter_attack.csv``` contains the tweets scraped from Twitter, and the file ```cleanedupdata.csv``` contains cleaned up data for processing. The file ```Tweet_Labels.csv``` is generated using the Co:here API, which includes only the high-alert tweets that were classified using the API. ```Alerts.csv``` contains a summary of the alert tweets to be sent out to the users. ```ttc alert app prototype.png``` shows the prototype of the web app we built using Figma. ```react.js files``` contains all the React.js files used in the frontend.

## Devpost Project Link
Come read all about our project and how it came to be [here at our Devpost project page!](https://devpost.com/software/ttc-alerts-but-like-better)
