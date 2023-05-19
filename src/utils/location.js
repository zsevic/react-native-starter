export const getLocationUrl = ({latitude = null, longitude = null} = {}) => {
  if (!latitude || !longitude) {
    return;
  }

  return `https://www.google.com/maps/place/${latitude},${longitude}`;
};
