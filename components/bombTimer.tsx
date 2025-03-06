import { ImageBackground, Text } from "react-native";

interface BombTimerProps {
  bombTimeInSeconds: number;
}

export default function BombTimer({ bombTimeInSeconds }: BombTimerProps) {
  const minutes = Math.floor(bombTimeInSeconds / 60).toString().padStart(2, "0");
  const seconds = (bombTimeInSeconds % 60).toString().padStart(2, "0");
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
      <Text className="text-white text-2xl font-bold">{minutes}:{seconds}</Text>
    </ImageBackground>
  );
}
