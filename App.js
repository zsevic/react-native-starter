import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import {SPLASH_SCREEN_TIMEOUT} from './src/constants';
import {AppWrapper} from './src/context';
import {theme} from './src/theme';

// import * as Sentry from '@sentry/react-native';
import {Navigation} from './src/components/navigation';

// Sentry.init({
//   dsn: '',
// });

const App = () => {
  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), SPLASH_SCREEN_TIMEOUT);
  }, []);

  return (
    <PaperProvider theme={theme}>
      <AppWrapper>
        <Navigation />
      </AppWrapper>
    </PaperProvider>
  );
};

export default App;
