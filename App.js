import hotBackGround from "./assets/hot.png";
import { Text, View, ImageBackground, Platform } from "react-native";
import { styles } from "./App.style";
import { InputTemperatureHere } from "./components/inputTemperature/inputTemp";
import { TemperatureDisplay } from "./components/temperatureDisplay/temperatureDisplay.js";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState(100);
  const [currentUnit, setCurrentUnit] = useState("°F");
  console.log(Platform.OS);
  return (
    <ImageBackground style={styles.container} source={hotBackGround}>
      <View style={styles.workspace}>

        <Text style={styles.text30}>Temperature</Text>

        <TemperatureDisplay value={inputValue} unit= {currentUnit} />

        <View>
          <TemperatureDisplay value="12" unit="°C" />
        </View>
        <InputTemperatureHere />
      </View>

      {Platform.OS === "android" ? (
        <Text style={{ fontSize: 10, alignItems: "center" }}>
          Materiel Android
        </Text>
      ) : (
        <Text style={{ fontSize: 30 }}>Matriel IOS</Text>
      )}
    </ImageBackground>
  );
}
