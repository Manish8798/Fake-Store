import * as React from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Daily from './Daily';
import Weekly from './Weekly';
import Monthly from './Monthly';
import StepCountHeader from '../components/StepCounterHeader';

const renderScene = SceneMap({
  daily: () => <Daily />,
  weekly: () => <Weekly />,
  monthly: () => <Monthly />,
});

const routes = [
  {key: 'daily', title: 'Daily'},
  {key: 'weekly', title: 'Weekly'},
  {key: 'monthly', title: 'Monthly'},
];

const Health = ({navigation}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'white', height: 4, borderRadius: 10}}
      style={{
        backgroundColor: '#2070F0',
        borderBottomWidth: 1,
        borderBottomColor: '#2070F0',
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <Icon name="arrow-left" size={20} color={'white'} />
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            paddingLeft: 20,
            fontSize: 16,
          }}>
          Your Health Data
        </Text>
      </TouchableOpacity>
      <StepCountHeader />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2070F0',
  },
});

export default Health;
