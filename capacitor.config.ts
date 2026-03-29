import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.oyadabu.oyun',
  appName: 'OyadaBu',
  webDir: 'build',
  ios: {
    contentInset: 'always',
    backgroundColor: '#ffffff',
    scrollEnabled: false,
  },
  plugins: {
    Keyboard: { resize: 'none', style: 'light' },
    StatusBar: { style: 'dark', backgroundColor: '#ffffff' },
    SplashScreen: { launchShowDuration: 1500 },
  },
};

export default config;
