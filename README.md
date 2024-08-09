# TwenStudiosWeb
Website for the company TwenStudios. 

# ABOUT
In this repo, I aim to document the set up for future teachings and to act as a
knowledge base. An important aspect is TwenStudios uses the same format for all 
its child projects. Let's start here.

# How to start
First, create your github repo and clone it into a directory.
- Create a directory to clone (I used GitBash to do this)
- Once cloned, drag and drop the folder into VS code.
- Open the terminal:
- - npx create-react-app "your app"

# First commit 
Once you cloned and created the react app, open the terminal:
- - git add .
- - git commit -m "first commit"
- - git push 

# How to deploy to the web using Firebase
- Create your firebase project
- Open your terminal (MAKE SURE YOU ARE IN YOUR REACT "your app" folder):
- - firebase init 
- - "? Are you ready to proceed? (Y/n) " y 
- - >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys  
- - select from exisiting project "your firebase project name"
- - "What do you want to use as your public directory?" build
- - n 
- - n

To Test, run:
- npm start 

To deploy, run:

- npm run build 
- firebase deploy

You should see the react starter home page. 
