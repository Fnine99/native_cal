export default interface ChartProps {
    data?: {
        labels: string[];
        datasets : {
            data: number[]
        }[];
    };
}