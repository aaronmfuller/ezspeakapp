import { useState, useEffect } from "react";
import { Audio } from "expo-av";
import { Button } from "@rneui/themed";

export default function MoreButton() {
  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/More.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <Button
      buttonStyle={{ 
        height: 350,
    width: 450
   }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F",
      }}
      disabledTitleStyle={{ color: "#ffff66" }}
      color={"#ffff66"}
      iconContainerStyle={{ background: "#ffff66" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={playSound}
      title="MORE"
      titleProps={{}}
      titleStyle={{ marginHorizontal: 2, color: "#000", fontSize: 150 }}
    />
  );
}
