# Replace :  A E-Commerce Application

A Consumer to Consumer Model based E-Commerce application where people can trade their goods and also bargain on chat, after which one becomes seller and another one consumer. This application comes with many features mentioned below :

- Authentication with Signin / Signup screens.
- Allows users to list their item which don't won't to user anymore.
- Allows user to have their separate account to check their uploaded listings and receive the product enqueries made by customer.
- Allows users to send enquires to sellers on their particular Items.
- Account Screen / Signout.

## Third Party Libraries

### For Designing
- Airbnb - Lottie React Native
- Image - Expo Blur (Thumbnail) Expo Image Picker(Image).

### For Networking
- Data Supply - ApiSauce(Wrapper of Axios and Standardised Errors).

#### Offline
- Netinfo   
- React Native Expo Image Cache
- Expo Secure Store
- Async Storage


### For Navigation
- React Native Navigation.

### For Authentication
- Schema - Yup.
- Form Building- Formik.
- JWT Decode.

### After Production
- Bugsnag (Kinda Firebase Crashalytics).

## Installation

Within both the `/app` & `/server` directory install the npm packages with:

    npm install

## Running the application

### The App

Within `/app`

Run the following command to start the application. This will use [expo.io](https://expo.io/) to build the application ready to be tested on iOS or Android. You can use the Expo app on either the iOS or Google Play store. Alternatively you can run the application using the simulator.

    npm start

### The Backend

The backend is powered with internal storage where we just need to change the baseURL in (config/development.json) Configuration.

Within `/server/src/index.js`, Add your connection string to line 16.

## ngrok

If your testing on a real device and having issue connecting to the local json-server, then you may want to run ngrok. This will give you a real URL that points to the local version of json-server running on post 3000.

### To start ngrok

Run:

    npm run tunnel

Then within `/app/src/api/tracker.js`. Update `http://localhost:9000` with the "Forwarding" address that ngrok provided.

## ScreenShots

These all are the screenshots related to Trackoholic, ranging from SplashScreen to Account Screen. All Screens are designed in `@AdobeXD`.

![Alt text](https://raw.githubusercontent.com/damakvarshney/Replace/master/ScreenShots/Replace%20Project.png?raw=true "SplashScreen")
