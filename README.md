GitHub repo for the UofTHacks X hackathon - building an app that scrapes tweets from nearby your location and alerts the user to any untoward activity happening in the Toronto Transit Commission (TTC).

## The Team
The awesome team members who contributed to this app are Shysta Sehgal, a third-year Computer Science and Cogntive Science student; Denny Maranga, a PhD student in Paleontology; Dorothy Lee, a first-year Computer Science student; and Terrisa Zong, a first-year Computer Engineering student. This was everyone's first hackathon, and we all learned some really cool skills.

## Contributions
Shysta and Denny worked on the backend for this app. They used the Twint API to scrape tweets from Twitter about any unsafe activities happening in the TTC. Then, they used the Co:here API to classify tweets as delays, alerts, or just opinions on how bad the TTC is. Finally, the Co:here API was used again to summarize the alert tweets so that the users who have signed up for the alerts can get short alerts of real time incidents on the TTC. 

Dorothy learned React in one day (which is commendable) and ran into a lot of challenges. She is still figuring out the UI and once that is done, we will work towards integrating the frontend and the backend.

Terrisa worked on creating a prototype for the web app on Figma. 

## The Directory
The file ```ttcalertsbutbetter.ipynb``` has the backend code in Python hosted on Colab. The file ```twitter_attack.csv``` contains the tweets scraped from Twitter, and the file ```cleanedupdata.csv``` contains cleaned up data for processing. The file ```Tweet_Labels.csv``` is generated using the Co:here API, which includes only the high-alert tweets that were classified using the API. Finally, ```Alerts.csv``` contains a summary of the alert tweets to be sent out to the users. 
