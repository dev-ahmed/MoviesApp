import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants';
import {metrics} from '../../../constants/metrics';
import {calcHeight} from '../../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moviesListContainer: {
    marginTop: calcHeight(10),
    height: metrics.screen_height - calcHeight(120),
    width: metrics.screen_width,
  },
});
export default styles;
