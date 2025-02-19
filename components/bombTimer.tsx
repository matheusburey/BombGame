import { ImageBackground, Text, View } from "react-native";

export default function BombTimer() {
  return (
    <ImageBackground
      source={require("../assets/images/bomb.png")}
      resizeMode="cover"
      style={{
        minHeight: 200,
        width: 450,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 16,
        paddingLeft: 14,
      }}
    >
      <Text className="text-white text-2xl font-bold">00:00</Text>
    </ImageBackground>
  );
}
