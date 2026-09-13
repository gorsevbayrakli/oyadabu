import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // NOTE: appId is left untouched — it is the App Store / signing identity
  // already wired into codemagic.yaml and the Xcode project.
  appId: 'app.oyadabu.oyun',
  appName: 'VeYa',
  webDir: 'build',
  ios: {
    contentInset: 'always',
    backgroundColor: '#0d1117',
    scrollEnabled: true,
  },
  plugins: {
    // VeYa is a dark-themed app: light status bar glyphs on a dark ground.
    Keyboard: { resize: 'none', style: 'dark' },
    StatusBar: { style: 'light', backgroundColor: '#0d1117' },
    SplashScreen: { launchShowDuration: 1500, backgroundColor: '#0d1117' },
  },
};

export default config;
