# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# *Mock-Twitter-Project Part I

**Mock-Twitter-Project** is an web app that allows a user to view and post a tweet this is a project that is inspired by twitter so it is designed to almost look like it. 

## User Stories

The following **required** functionality is completed:

- [x] User can **compose and post a tweet.**
- [x] User can **sign in through a fake login.**
- [x] User can **view tweets submitted which are displayed on the page.**

The following **additional** features are implemented:
- [x] App is using similar **"Twitter branded" colors and styles**

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/DelvonRH/Mock-Twitter-Project/blob/main/Walkthroughs/Mock-Twitter-Walkthrough%231.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Notes / Bugs

DISCLAIMER: **This App is currently not deployed in this version!**

This version of the Mock-Twitter-Project is currently unable to post because of a bug with the disabled tweet button. It is very challenging to make this web application responsive; however, because this is the first version, it is still a work in progress. Some items on the screen do not scale with different sizes, which makes the page look weird. This version of the project does not have any persistence, so refreshing the page deletes, everything.

## Open-source libraries used

- [React](https://reactjs.org/) - A Javascript library for building user interfaces

## Link to Github Profile

https://github.com/DelvonRH

# *Mock-Twitter-Project Part II*

**Mock-Twitter-Project** is an web app that allows a user to view and post a tweet this is a project that is inspired by twitter so it is designed to almost look like it. 

## User Stories

The following **required** functionality is completed:

- [x] Users post are **read from firestore real-time database.**
- [x] User can **sign in through a login using authentication from firestore.**
- [x] User can **register through a form and is saved using authentication from firestore.**
- [x] User can **logout using firestore.**

The following **additional** features are implemented:
- [x] App is using similar **"Twitter branded" colors and styles**

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [LiceCap](http://www.cockos.com/licecap/).

## Notes / Bugs

DISCLAIMER: **This App is currently not deployed in this version!**

This version of the Mock-Twitter-Project currently has a bug with the logout. When the user wants to logout the time that it takes to successfully logout causes a bug in which the screen turns black. This is because the user is logged out before navigated back to the home screen. Styling has been difficult because the correct bootstrap classes has'nt been impplemented as I would have liked leaving a nonresponsive webpage still

## Open-source libraries used

- [React](https://reactjs.org/) - A Javascript library for building user interfaces

## Link to Github Profile

https://github.com/DelvonRH
