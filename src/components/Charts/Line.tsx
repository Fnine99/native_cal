import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Props from './chartprop';


const LineGraph = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={300}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'none',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LineGraph;