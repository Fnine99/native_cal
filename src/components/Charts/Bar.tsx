import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Props from './chartprop'


const BarGraph = ({data}: Props ) => {
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={300}
        height={220}
        yAxisSuffix=''
        yAxisLabel='$'
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10,
            backgroundColor:'#fff'
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726'
          }
        }}
        style={styles.chart}
      />
    </View>
  );
};

export default BarGraph;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  chart:{
    marginVertical: 8,
    borderRadius: 8,
    // justifyContent:'center'
  }
});

