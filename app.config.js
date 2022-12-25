import 'dotenv/config'

export default {
  "expo": {
    "name": "MonComptableApp",
    "slug": "MonComptableApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "native",
      "backgroundColor": "#EBF2FA"
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
      "adaptiveIcon": {
        "foregroundImage": "./assets/logo.png",
        "backgroundColor": "#EBF2FA"
      }
    },
    "web": {
      "favicon": "./assets/logo.png"
    },
    "extra": {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    }
  }
}
