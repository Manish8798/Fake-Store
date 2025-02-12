import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

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
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={{alignItems: 'center'}}>
          <Text>🔥</Text>
          <Text>Total Steps</Text>
          <Text>2400</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>🎯</Text>
          <Text>Daily Goal</Text>
          <Text>2400</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text>🕔</Text>
          <Text>Activity</Text>
          <Text>37 mins</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});

export default Daily;
