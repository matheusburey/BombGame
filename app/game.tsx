import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 m-12">
      <View className="flex-row justify-center my-36">
        <Text className="text-6xl font-bold text-red-700">Bomb</Text>
        <Text className="text-6xl font-bold">Game</Text>
      </View>
    </View>
  );
}
