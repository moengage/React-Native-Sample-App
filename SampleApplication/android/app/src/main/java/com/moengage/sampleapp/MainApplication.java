package com.moengage.sampleapp;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.moengage.core.DataCenter;
import com.moengage.core.LogLevel;
import com.moengage.core.MoEngage;
import com.moengage.core.config.LogConfig;
import com.moengage.core.config.NotificationConfig;
import com.moengage.react.MoEInitializer;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.moengage.pushbase.MoEPushHelper;
import androidx.lifecycle.ProcessLifecycleOwner;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          return new PackageList(this).getPackages();
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());

    // Configure MoEngage SDK
    MoEngage.Builder moEngage =
        new MoEngage.Builder(this, "YOUR_APP_ID", DataCenter.DATA_CENTER_1 /*[YOUR_DATA_CENTER]*/)
            .configureLogs(new LogConfig(LogLevel.VERBOSE))
            .configureNotificationMetaData(
                new NotificationConfig(
                    R.drawable.small_icon, /* Small Icon */
                    R.drawable.large_icon,  /* Large Icon */
                    R.color.notification_color,  /* Notification Color */
                    true,  /* True, to show multiple notification in notification drawer */
                    true, /* True, to synthesize back-stack for the notification's click action */
                    true /* True, to show notification large icon on Lollipop and above devices */
                )
            );

    // Initialize MoEngage SDK
    MoEInitializer.INSTANCE.initializeDefaultInstance(
        getApplicationContext(),
        moEngage,
        false
    );

    ProcessLifecycleOwner.get()
        .getLifecycle()
        .addObserver(new ApplicationLifecycleObserver(this.getApplicationContext()));

    MoEPushHelper.getInstance().setUpNotificationChannels(this.getApplicationContext());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context instance of [Context]
   * @param reactInstanceManager instance of [ReactInstanceManager]
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.moengage.sampleapp.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
