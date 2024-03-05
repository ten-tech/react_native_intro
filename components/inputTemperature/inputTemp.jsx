import React from "react";
import { TextInput, Button, View, Text } from "react-native";
import { styles } from "../../App.style";

export const InputTemperatureHere = (defaultValue, onChangeNumber) => {
//   const [defaultValue, onChangeNumber] = React.useState("°F");
  return (
    <>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
        //   value={number}
          placeholder="°C"
          keyboardType="numeric" defaultValue="35" returnKeyType="done" maxLength={4} defaultValue={defaultValue}
        />
      </View>
      <View>
        <Button title="Converter" style={styles.button}/>
      </View>
    </>
  );
};
