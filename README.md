# Drift



## Background
A survey on wellbeing and mental health during the pandemic conducted last summer by University College London found that 22% said their friendships had deteriorated.  Many respondents noted feelings of loneliness. Two-thirds of survey participants reported feeling lonely since the beginning of the pandemic — 8% higher than pre-COVID-19.  In our own experience, connecting with friends is difficult without concrete ideas or plans; coffee dates aren't always going to cut it.  Oftentimes, friends resort to texting, making it difficult to create new memories together.  Finding new things to do in small towns is repetitive, at times discouraging interaction.

We wanted to encourage people to step out of their comfort zone and rekindle friendships and connections.  We built **drift**, allowing users to reach out to friends and generate scavenger hunts based on their location.  

### What it does
**drift** allows users to rekindle connections by following a simple user flow
1. Find friends you want to connect to!
2. Start a drift (a scavenger hunt) by selecting a friend or a random one and a travel radius 
3. Advance through the stages of your drift, performing tasks as they come
4. Get points!  

### UI/UX
![Drift's User Interface](https://i.imgur.com/vzSkGId.jpg)
We developed our design using Figma, first by generating a blue, green, and yellow color palette and selecting a font, then creating hi-fi prototypes with our art style.

## Engineering
Design Documentation: https://docs.google.com/document/d/12NP9n-stmBvJ0SsEQ269isbWPaDgtXTSpW6Ujuko6dM/edit#
![Drift's Tech Stack](https://i.imgur.com/UPmrbfr.jpg)

### Frontend and challenges
Our frontend was built with a variety of web technologies.  We integrated the Mapbox API with a combination of React, JavaScript, HTML, and CSS to build our frames and components.  Working with Mapbox was the hardest part of building **drift**.  We experienced a variety of challenges in formatting location, placing markers, managing viewport movement, monitoring tasks, and connecting it with the rest of our application.   

### Backend and challenges
Our backend was designed by a team member who had only worked with MongoDB, Express, and Node.js once before.  We ended up creating five routes for user interactions with friends and drifts.  These five routes are as follows -

- /getFriends - return a user's friend list
- /newUser - create a new user for login
- /addFriend - update the user's friends list
- /startDrift - adds new generated drift to the user
- /finishedDrift - update user's points and mark drift finished

The largest challenge was being able to connect the frontend and the backend together.  Having never worked with Axios or similar technologies, the process was extremely difficult.  
![Drift's System Architecture](https://i.imgur.com/Wpnj8OQ.jpg)
_How parts of our system interacted with each other_

## Takeaways
### Accomplishments that we're proud of
As hackers without much design experience, we were proud of the hi-fi prototypes we designed using Figma, which will empower us to not be afraid to use these design skills in future hackathons.  We also ended up using many different technologies, leading us to generate a lot more documentation, something we're proud of and will take away!

### What we learned
Each of us picked up new skills in a remote environment.  We worked together to create designs, generate feature ideas, and combine many different technologies together to create a cohesive product.
We learned how to create more elaborate documentation and to create designs and prototypes that would serves as templates for our code to build off of.

### What's next for **drift**
There were a lot of features that we wanted to implement if we had the time!  We were hoping to be able to create task recommendations based on past drifts, and expand filtering options for drift generation, allowing the user to input a theme for example.  In addition, we wanted to create a feature to partner with local businesses and integrate a point redemption system for users.  We do hope that some model of **drift** can be deployed on Google Play or the App Store - so we can continue rekindling these connections!
