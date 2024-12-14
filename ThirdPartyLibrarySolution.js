To resolve this, ensure that the third-party library is correctly linked.  The steps vary depending on the library, but generally include:

1. **Run the linking script:** Many libraries provide a script (e.g., `react-native link <library-name>`). Make sure you have the latest version of react-native-cli.
2. **Manual Linking:** If the script doesn't work or is unavailable, you might need to manually configure the native Android and iOS projects. This will typically involve adding dependencies in the relevant build files (`build.gradle` for Android and `Podfile` for iOS) and ensuring that the necessary native code is included.
3. **Clean and Rebuild:** After linking, clean the project and rebuild it.  This ensures that the changes are properly integrated.
4. **Check Library Documentation:** The library's documentation should provide precise instructions for integration and linking on both Android and iOS platforms.