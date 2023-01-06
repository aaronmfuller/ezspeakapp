import * as React from "react";
import { Audio } from "expo-av";
import { Button } from "@rneui/themed";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native-web";

export default function CarRideButton() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/CarRide.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={playSound}>
        <Image
          source={require("../assets/CarRide.png")}
          style={styles.buttonImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: "#303838",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 350,
    width: 450,
    resizeMode: "stretch",
  },
});
