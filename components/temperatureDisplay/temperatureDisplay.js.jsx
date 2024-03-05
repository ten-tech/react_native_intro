import { View } from "react-native";
export function temperatureDisplay(value, unit) {
    return(
        <View><Text style="styles.container">{value} {unit} </Text> </View>
    )
}