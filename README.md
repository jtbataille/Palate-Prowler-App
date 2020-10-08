# **Palate Prowler**

![GitHub license](https://img.shields.io/badge/Made%20by-%40WasteOfADrumBum-green)  
![GitHub license](https://img.shields.io/badge/Made%20by-%40JinhiA-green)  
![GitHub license](https://img.shields.io/badge/Made%20by-%40jtbataille-green)

[![Build Status](https://travis-ci.com/WasteOfADrumBum/Team-Project-II.svg?branch=master)](https://travis-ci.com/WasteOfADrumBum/Team-Project-II)

## Description

Palate Prowler is an aplication which allows users to find and create food truck events using a custom profile. Once logged in the user will be able to create new events that will then be added to thier events list and can later be removed. Users who are logged in to the application can select events they will be attending and those events will automatically be added to thier attending events list on thier profile. Palate Prowler is a user friendly application that brings people and mobile food together. 

[Power Point Presentation](https://docs.google.com/presentation/d/1xrm38HKg0Q-XkR0NuTz1hU0R1DjMHUr4zBdDHl0bu1s/edit?usp=sharing)

# Technologies Used

![GitHub top language](https://img.shields.io/github/languages/top/WasteOfADrumBum/Team-Project-II?color=green&logo=github&logoColor=green)
![GitHub language count](https://img.shields.io/github/languages/count/WasteOfADrumBum/Team-Project-II?color=green&logo=github&logoColor=green)

| Front-end  | Back-end                                     |
| ---------- | -------------------------------------------- |
| HTML5      | Node.js                                      |
| CSS3       | Express.js                                   |
| Bootstrap  | MySQL                                        |
| JavaScript | Sequelize ORM                                |
| jQuery     | [Travis CI](https://travis-ci.com/dashboard) |
|            | ESLint                                       |
|            | Heroku                                       |
|            | Handlebars                                   |

## Table of contents

- [Installation](#installation)
- [Instructions](#instructions)
- [Features](#features)
- [Example Gif](#example-gif)
- [MVC Paradigm Folder Structure](#MVC-Paradigm-Folder-Structure)
- [Repository Link](#Repository)
- [Test](#Test)
- [Licence](#Licence)
- [Contributors](#Contributors)

## Installation

```
npm install
```

- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [VS Code Eslint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Travis CI](https://github.com/marketplace/travis-ci)

### JawsDB

| Property | Value                                                     |
| -------- | --------------------------------------------------------- |
| Host     | sm9j2j5q6c8bpgyq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com |
| Username | r9l0r0uy57bkpy4r                                          |
| Password | s8ybwrtr5swrk5dw                                          |
| Port     | 3306                                                      |
| Database | tkyj153geucbe07u                                          |

## Instructions

[Launch Application on Heroku](https://team-project-ii.herokuapp.com/)

## Features

- Create events
- Remove events
- Attend events
- Login/out
- Save profile data
- Modify profile data 
- Modify events

## Example Gif

<img src="public/assets/images/palate-prowler.gif" width="500" />

## MVC Paradigm Folder Structure

root directory/  
├──▹ 📁 [config](#config)/  
│ ├──▹ ☕ [passport.js](#passport.js)  
│ └──▹ ☕ [config.js](#config.js)  
├──▹ 📁 [controllers](#controllers)/  
│ ├──▹ ☕ [appController.js](#appController.js)  
│ └──▹ ☕ [authController.js](#authController.js)  
├──▹ 📁 [db](#db)/  
│ ├──▹ ☕ [seed.js](#seed.js)  
│ └──▹ [schema.sql](schema.sql)  
├──▹ 📁 [middleware](#MIDDLEWARE)/  
│ └──▹ ☕ [ensureAuthenticated.js](#ensureAuthenticated.js)  
├──▹ 📁 [models](#models)/  
│ ├──▹ ☕ [example.js](#example.js)  
│ ├──▹ ☕ [index.js](#index.js)  
│ ├──▹ ☕ [session.js](#session.js)  
│ └──▹ ☕ [user.js](#user.js)  
├──▹ 📁 [node_modules](#NODE_MODULES)  
│ └──▹ 📁 installed node files/folders  
├──▹ 📁 [public](#PUBLIC)/  
│ ├──▹ 📁 [css](#css)/  
│ │ └──▹ ✍ [style.css](#style.css)  
│ ├──▹ 📁 [js](#JS)/  
│ │ ├──▹ ☕ [app.js](#app.js)  
│ │ └──▹ ☕ [example.js](#example.js)  
│ └──▹ 📁 [images](#images)/  
├──▹ 📁 [routes](#ROUTES)/  
│ ├──▹ ☕ [apiRoutes.js](#apiroutes.js)  
│ └──▹ ☕ [htmlRoutes.js](#htmlroutes.js)  
├──▹ 📁 [views](#views)/  
│ ├──▹ 📁 [layouts](#layouts)/  
│ │ └──▹ [main.handlebars](#main.handlebars)/  
│ └──▹ 📁 [partials](#partials)/  
│ │ ├──▹ 📁 [modal](#modal)/  
│ │ │ └──▹ [login-block.handlebars](#login-block.handlebars)  
│ │ ├──▹ 📁 [nav](#nav)/  
│ │ │ └──▹ [nav-block.handlebars](#nav-block.handlebars)  
│ │ ├──▹ [404.handlebars](#404.handlebars)  
│ │ ├──▹ [dashboard.handlebars](#dashboard.handlebars)  
│ │ ├──▹ [example-details.handlebars](#example-details.handlebars)  
│ │ ├──▹ [example.handlebars](#example.handlebars)  
│ │ ├──▹ [profile.handlebars](#profile.handlebars)  
│ │ └──▹ [register.handlebars](#register.handlebars)  
├──▹ ☕ [server.js](#server.js)  
└──▹ ᶨ [package.json](#package.json)

## Repository

![GitHub repo size](https://img.shields.io/github/repo-size/WasteOfADrumBum/Team-Project-II?logo=github)

![GitHub Commit Activity](https://img.shields.io/github/commit-activity/m/WasteOfADrumBum/Team-Project-II)
![GitHub Last Commit](https://img.shields.io/github/last-commit/WasteOfADrumBum/Team-Project-II)

![GitHubopen pull request](https://img.shields.io/github/issues-pr/WasteOfADrumBum/Team-Project-II)
![GitHub closed pull request](https://img.shields.io/github/issues-pr-closed/WasteOfADrumBum/Team-Project-II)

![GitHub Stars](https://img.shields.io/github/stars/WasteOfADrumBum/Team-Project-II?style=social)

- [Project Repo](https://github.com/WasteOfADrumBum/Team-Project-II)

## Test

[![Build Status](https://travis-ci.com/WasteOfADrumBum/Team-Project-II.svg?branch=master)](https://travis-ci.com/WasteOfADrumBum/Team-Project-II)

![GitHub open issues](https://img.shields.io/github/issues/WasteOfADrumBum/Team-Project-II)
![GitHub closed issues](https://img.shields.io/github/issues-closed/WasteOfADrumBum/Team-Project-II)

## Licence

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Contributors

![GitHub contributors](https://img.shields.io/github/contributors/WasteOfADrumBum/Team-Project-II)
![GitHub Forks](https://img.shields.io/github/forks/WasteOfADrumBum/Team-Project-II?label=Fork)
![GitHub Watchers](https://img.shields.io/github/watchers/WasteOfADrumBum/Team-Project-II?label=Watch)

| <img src="https://avatars0.githubusercontent.com/u/66432859?v=460" width="50" />          | <img src="https://avatars0.githubusercontent.com/u/66880369?v=460" width="50" /> | <img src="https://avatars0.githubusercontent.com/u/65187093?v=460" width="50" />     |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Joshua M. Small](https://github.com/WasteOfADrumBum)                                     | [Jinhi Ahn](https://github.com/JinhiA)                                           | [Jarrod Bataille](https://github.com/jtbataille)                                     |
| <JMSmall89@gmail.com>                                                                     | <ahn.jinhi@gmail.com>                                                            | <jtbataille@gmail.com>                                                                  |
| ![GitHub Followers](https://img.shields.io/github/followers/WasteOfADrumBum?label=Follow) | ![GitHub Followers](https://img.shields.io/github/followers/JinhiA?label=Follow) | ![GitHub Followers](https://img.shields.io/github/followers/jtbataille?label=Follow) |
