import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants';
import {metrics} from '../../../constants/metrics';
import {calcFont, calcHeight, calcWidth} from '../../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    height: calcHeight(100),
    width: metrics.screen_width - calcWidth(20),
    justifyContent: 'center',
    alignSelf: 'center',
    padding: calcWidth(5),
    overflow: 'hidden',
    borderRadius: 15,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  title: {
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  overview: {
    marginTop: calcHeight(10),
    fontSize: calcFont(14),
    fontWeight: 'bold',
  },
});
export default styles;
