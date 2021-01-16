import {Dimensions} from 'react-native';
import {calcWidth} from '../utils/normalize';

const {width, height} = Dimensions.get('screen');

enum metrics {
  screen_width = width,
  screen_height = height,
}

export {metrics};
