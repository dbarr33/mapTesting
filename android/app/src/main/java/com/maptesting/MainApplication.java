package com.maptesting;

import android.support.annotation.Nullable;
import com.airbnb.android.react.maps.MapsPackage;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativenavigation.NavigationApplication;
import java.util.Arrays;
import java.util.List;
import com.imagepicker.ImagePickerPackage;

public class MainApplication extends NavigationApplication {

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(new MapsPackage(), new ImagePickerPackage());
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Nullable
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
