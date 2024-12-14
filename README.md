# React Native Unresolved Native Module Error

This repository demonstrates a common error in React Native involving third-party libraries and their native modules.  The bug showcases the issue of an unresolved native module, which often occurs due to incorrect linking or configuration of the third-party library.

## Bug Description
The error arises when a React Native application tries to use a feature from a library that depends on native code (e.g., Android's Java/Kotlin or iOS's Objective-C/Swift).  If the native modules are not properly linked or integrated with your React Native project, you will encounter an error indicating that the module cannot be found.

## Solution
The solution involves correctly linking the native modules of the third-party library. This generally involves steps specific to the library's documentation, but often entails running scripts (like `react-native link`) or manually configuring the native projects (Android's `android/app/build.gradle` and iOS's `ios/<YourProject>/Podfile`).

## Steps to Reproduce
1. Clone the repository.
2. Attempt to run the application.
3. Observe the error message indicating the missing native module.