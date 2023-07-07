# npx create-react-app movie verse

#install tailwind css

https://tailwindcss.com/docs/installation/using-postcss

# Header Component

# install material icons, react styled components

npm install @mui/material @mui/styled-engine-sc styled-components

npm install @mui/icons-material

# getting add icon for header

import AddIcon from "@mui/icons-material/Add";

# getting Button icon from Mui

import { Button } from "@mui/material";

# create single movie card component

# For the rating install stars

npm install react-stars

# install react router dom react-loader-spinner and sweet alert

# npm install react-router-dom react-loader-spinner sweet-alert

For prebuild components in case of Tailwind
use # Tailblocks.cc

https://firebase.google.com/

# install firebase

npm install firebase

# create project movies

# create database

Change the rules of firebase to true

rules_version = '2';

service cloud.firestore {
match /databases/{database}/documents {
match /{document=\*\*} {
allow read, write: if true;
}
}
}
