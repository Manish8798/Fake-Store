import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Daily = ({navigation}) => {
  const data = [
    {value: 0},
    {value: 0},
    {value: 150},
    {value: 180},
    {value: 790},
    {value: 70},
  ];
  const layout = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="chevron-left"
        size={20}
        style={{padding: 10, position: 'absolute'}}
        color={'gray'}
      />
      <Text
        style={[styles.normalTxt, {fontWeight: 'bold', alignSelf: 'center'}]}>
        27 October
      </Text>
      <ScrollView>
        <View style={{paddingTop: 20}}>
          <BarChart
            data={data}
            barBorderTopLeftRadius={10}
            barBorderTopRightRadius={10}
            barWidth={10}
            xAxisColor={'gray'}
            yAxisColor={'gray'}
            showXAxisIndices
            xAxisLabelTexts={['4 AM', '8 AM', '12 PM', '4 PM', '8 PM', '12 AM']}
            xAxisLabelTextStyle={{color: 'gray', fontSize: 10}}
            // yAxisLabelTexts={["0", "200", "400", "600", "800"]}
            // width={layout.width}
            yAxisTextStyle={{color: 'gray', fontSize: 10}}
            stepHeight={80}
            spacing={40}
            dashGap={0}
            maxValue={800}
            stepValue={200}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text>🔥</Text>
            <Text style={styles.normalTxt}>Total Steps</Text>
            <Text style={styles.boldTxt}>2400</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>🎯</Text>
            <Text style={styles.normalTxt}>Daily Goal</Text>
            <Text style={styles.boldTxt}>10000</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>🕔</Text>
            <Text style={styles.normalTxt}>Activity</Text>
            <Text style={styles.boldTxt}>37 mins</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  normalTxt: {
    color: 'gray',
    fontSize: 14,
    paddingTop: 10,
  },
  boldTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Daily;
