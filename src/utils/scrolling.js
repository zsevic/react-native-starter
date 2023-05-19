import {Dimensions} from 'react-native';

export function scroll(ref, index = 0) {
  ref?.current?.scrollToIndex({index, animated: false});
}

export function scrollByOffset(ref, offsetValue) {
  const offset = !isNaN(offsetValue)
    ? offsetValue
    : Dimensions.get('window').height + 250;
  ref?.current?.scrollToOffset({
    offset,
    animated: false,
  });
}

export function scrollList(apartmentListLength, listRef) {
  if (apartmentListLength === 0) {
    scrollByOffset(listRef);
  } else {
    scroll(listRef);
  }
}
