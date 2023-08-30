![Logo](/.github/logo.png)

## React-Native-Sample-App

This repository contains the Sample Implementation for the React-Native plugins for the [MoEngage](https://www.moengage.com) platform.

### SDK Installation
Install MoEngage's React Native plugin using the npm package manager.

| Plugin Name            | Plugin ID                      |  Version                                                                                                                                                 |
|------------------------|--------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Core Plugin            | react-native-moengage          | [![npm](https://img.shields.io/npm/v/react-native-moengage.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-moengage)                     |
| Inbox Plugin           | react-native-moengage-inbox    | [![npm](https://img.shields.io/npm/v/react-native-moengage-inbox.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-moengage-inbox)         |
| Geofence Plugin        | react-native-moengage-geofence | [![npm](https://img.shields.io/npm/v/react-native-moengage-geofence.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-moengage-geofence)   |
| Cards Plugin           | react-native-moengage-cards    | [![npm](https://img.shields.io/npm/v/react-native-moengage-cards.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-moengage-cards)         |

Core Plugin
```
$ npm install react-native-moengage       
```
Inbox Plugin
```
$ npm install react-native-moengage-inbox
```
Geofence Plugin
```
$ npm install react-native-moengage-geofence
```
Cards Plugin
```
$ npm install react-native-moengage-cards
```

After installing the plugin move on to platform specific configuration.

#### Android
Add `mavenCentral()` repository in the project-level `build.gradle` file.

```groovy
buildscript { 
  repositories { 
    mavenCentral() 
  } 
} 

allprojects { 
  repositories { 
    mavenCentral() 
  } 
}
```

In `android/app/build.gradle` add the following

```groovy
 dependencies {
    ...

    implementation("com.moengage:moe-android-sdk:${sdkVersion}")
    implementation("com.moengage:inbox-core:${sdkVersion}")
    implementation("com.moengage:geofence:${sdkVersion}")
    implementation("com.moengage:cards-core:${sdkVersion}")
    implementation("androidx.core:core:1.9.1")
    implementation("androidx.appcompat:appcompat:1.4.2")
    implementation("androidx.lifecycle:lifecycle-process:2.5.1")
}
```

Replace `sdkVersion` with the available version

| Artifact Name                             | Artifact ID          | Version                                                                                                     |
|-------------------------------------------|----------------------|-------------------------------------------------------------------------------------------------------------|
| MoEngage Android SDK                      | moe-android-sdk      | ![MavenBadge](https://maven-badges.herokuapp.com/maven-central/com.moengage/moe-android-sdk/badge.svg)      |
| MoEngage Inbox Core                       | inbox-core           | ![MavenBadge](https://maven-badges.herokuapp.com/maven-central/com.moengage/inbox-core/badge.svg)           |
| MoEngage Goefence Library                 | geofence             | ![MavenBadge](https://maven-badges.herokuapp.com/maven-central/com.moengage/geofence/badge.svg)             |
| MoEngage Cards Core                       | cards-core           | ![MavenBadge](https://maven-badges.herokuapp.com/maven-central/com.moengage/cards-core/badge.svg)           |

#### iOS
Install the native MoEngage iOS SDK by using CocoaPods as described here: https://docs.moengage.com/docs/sdk-integration#section-integration-through-cocoapods

NOTE :
Incase if you get errors in the test targets of the project, go to build settings of the test target and add -lc++ flag to Other Linker Flags as shown below :

![Build Settings](https://user-images.githubusercontent.com/15011722/31492360-4ca64ff8-af68-11e7-92f6-4743121b41d8.png)

Thats it!! SDK is successfully installed in the project, and ready to use.

For more info on how to use react-native-moengage, refer to our developer docs: https://developers.moengage.com/hc/en-us/categories/4404199274900-React-Native-SDK