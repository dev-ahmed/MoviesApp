import {StyleSheet} from 'react-native';
import {metrics} from '../../../constants/metrics';
import {calcFont, calcHeight, calcWidth} from '../../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    height: calcHeight(200),
    width: metrics.screen_width - calcWidth(20),
  },
  details: {
    padding: calcWidth(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    marginBottom: calcHeight(10),
  },
  title: {
    fontSize: calcFont(20),
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: calcFont(15),
  },
  marginTop10: {
    marginTop: calcHeight(10),
  },
});
export default styles;
