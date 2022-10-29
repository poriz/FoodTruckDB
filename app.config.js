export default {
  "expo": {
    "name": "project2",
    "slug": "project2",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/cat_.png",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "package": "com.comeonfoodtruck.comeonfoodtruck", 
      "config": {"googleMaps": {"apiKey":"AIzaSyDJv0qwg33vwmMVOr2dPNosfx1iU54vOJo"}},
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.poriz.pj3"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    
  
  }
}
