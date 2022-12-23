package com.moengage.sampleapp;

import android.content.Context;
import androidx.annotation.NonNull;
import androidx.lifecycle.DefaultLifecycleObserver;
import androidx.lifecycle.LifecycleOwner;
import com.moengage.push.amp.plus.MiPushHelper;
import com.xiaomi.channel.commonutils.android.Region;

public class ApplicationLifecycleObserver implements DefaultLifecycleObserver {

  private Context context;

  public ApplicationLifecycleObserver(Context context) {
    this.context = context;
  }

  @Override public void onCreate(@NonNull LifecycleOwner owner) {
    DefaultLifecycleObserver.super.onCreate(owner);
  }

  @Override public void onStart(@NonNull LifecycleOwner owner) {
    DefaultLifecycleObserver.super.onStart(owner);
    MiPushHelper.INSTANCE.initialiseMiPush(context, "5601804211309",
        "2882303761518042309", Region.Global);
  }

  @Override public void onResume(@NonNull LifecycleOwner owner) {
    DefaultLifecycleObserver.super.onResume(owner);
  }

  @Override public void onPause(@NonNull LifecycleOwner owner) {
    DefaultLifecycleObserver.super.onPause(owner);
  }

  @Override public void onStop(@NonNull LifecycleOwner owner) {
    DefaultLifecycleObserver.super.onStop(owner);
  }

  @Override public void onDestroy(@NonNull LifecycleOwner owner) {
    DefaultLifecycleObserver.super.onDestroy(owner);
  }
}
