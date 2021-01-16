import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants';
import {metrics} from '../../../constants/metrics';
import {calcHeight, calcWidth} from '../../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    width: metrics.screen_width - calcWidth(20),
    height: calcHeight(40),
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: calcWidth(15),
    justifyContent: 'center',
    paddingStart: calcWidth(20),
  },
  text: {
    color: Colors.black,
  },
});
export default styles;
