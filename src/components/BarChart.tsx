import { Dimensions } from "react-native";
import { View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
};

// interface graphProps {
//     title?: string,
//     data?: {},
//     legend?: string
// }

export function BarGraph(){
    return (
        <View
            style={{
                flex:1
            }}
        >
            <BarChart
                style={{
                    marginVertical: 8,
                    // borderRadius: 16,
                }}
                data={data}
                width={screenWidth}
                height={220}
                yAxisSuffix=''
                yAxisLabel="$"
                chartConfig={{
                    // backgroundColor: undefined,
                    backgroundGradientFrom: "#FEFEFE",
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: "#FEFEFE",
                    backgroundGradientToOpacity: 0,
                    color: (opacity = 1) => `rgba(0, 50, 125, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 50, 125, ${opacity})`,
                    strokeWidth: 2, // optional, default 3
                    barPercentage: 0.5,
                    useShadowColorFromDataset: false // optional
                }}
                withInnerLines
                verticalLabelRotation={30}
            />
        </View>        
    )
}
