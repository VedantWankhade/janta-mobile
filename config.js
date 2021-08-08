import Constants from 'expo-constants';

// get the localhost ip address at runtime using the Expo manifest
// this enables both simulator and physical device debugging with our local api
let localhost;
if (Constants.manifest.debuggerHost) {
  localhost = Constants.manifest.debuggerHost.split(':').shift();
}

// set environment variables
const ENV = {
  dev: {
    // API_URI: `http://${localhost}:4000/api`  this is the proper method but it's not working
    // dont forget to use ngrok and change tehe below url each time
    API_URI: `https://4eb1804798ca.ngrok.io/api`  // temporary solution | using ngrock to expose localhost 4000 port
  },
  prod: {
    // update the API_URI value with your publicly deployed API address
    API_URI: 'https://janta-api.herokuapp.com/api'
  }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
  // __DEV__ is set to true when react-native is running locally in dev mode
  // __DEV__ is set to false when our app is published
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
