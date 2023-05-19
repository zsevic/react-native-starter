import analytics from '@react-native-firebase/analytics';

export const trackEvent = async (eventName, params) => {
  analytics()
    .logEvent(eventName, params)
    .catch(() => {});
};
