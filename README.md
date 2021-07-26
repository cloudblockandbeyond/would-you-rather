# Would You Rather?
Would You Rather project is a a web app that lets a user play the “Would You Rather?” game.
The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

Using this app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## Installation
The source code is hosted on GitHub. Clone the project using below mentioned github repository HTTPS URL:
```
$ git clone https://github.com/cloudblockandbeyond/would-you-rather.git
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Navigate to the project root directory. Install all of project's dependencies via npm/yarn using the following command:
```
$ cd would-you-rather
$ npm install
    (OR)
$ yarn install
```

Start the development server using the following command and then navigate to http://localhost:3000 in your browser:
```
$ npm start
    (OR)
$ yarn start
```

## Folder Structure

```bash
├── public
│   ├── logo.png # Would You Rather app logo
│   └── error404.png # 404 PageNotFound error image
└── src
    │──actions
    │   │──authedUser.js # actions related to state: authedUser
    │   │──questions.js # actions related to the state: questions
    │   │──shared.js # actions related to both parts of the state ( questions, users )
    │   └──users.js # actions related to the state: users
    │
    │──components
    │   │──PageNotFound.js # displays a generic 404 Error image and redirects to /error route
    │   │──LeaderBoard.js # displays the users in order of their score under the /leaderboard route
    │   │──SignIn.js # displays the Login UI on the home route when user is not authenticated
    │   │──Nav.js # displays the app navigation header
    │   │──NewQuestion.js # represents the form where the user may add a new poll under the /add route
    │   │──Question.js # represents the generic structure of a question present at home route
    │   │──QuestionPage.js # decides if a poll has been answered or not and displays the respected UI accordingly
    │   │──AnsweredQuestion.js # represents the generic structure of a poll that has been answered by the user
    │   │──UnansweredQuestion.js # represents the generic structure of a poll that user has yet not participated in
    │   │──Home.js # application's landing page which displays list of categories and their questions
    │   └──App.js # application's root component
    │   
    │──middlewares
    │   │──index.js # sums up all middleware included as a central hub to be included
    │   └──logger.js # logs action and new state to the console
    │
    │──reducers
    │     │──authedUser.js # reducer related to state: authedUser
    │     │──index.js # sums up all reducers included as a central hub to be included
    │     │──questions.js # reducers rrelated to state: questions
    │     └──users.js # reducers related to state: users
    │
    │──utils
    │   │──Data.js # Datastructure given by Udacity
    │
    │──index.css # common styling related to application
    │
    │──index.js # renders app onto the browser
    │
    │──store.js # creates the redux store using the combined reducer and middleware
```
