import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const handlePressAlone = () => {
    console.log("Jogar solo");
  };

  const handlePressWithFriends = () => {
    console.log("Jogar com amigos");
  };

  return (
    <View className="flex-1 m-12">
      <View className="flex-row justify-center my-36">
        <Text className="text-6xl font-bold text-red-700">Bomb</Text>
        <Text className="text-6xl font-bold">Game</Text>
      </View>

      <Text className="text-center text-2xl font-bold">
        Escolha um modo de jogo:
      </Text>
      <TouchableOpacity onPress={handlePressAlone} activeOpacity={0.7} className="items-center bg-gray-600 p-4 rounded-lg mt-12">
        <Text className="text-2xl font-bold text-white">Jogar solo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressWithFriends} activeOpacity={0.7} className="items-center bg-gray-600 p-4 rounded-lg mt-12">
        <Text className="text-2xl font-bold text-white">Jogar com amigos</Text>
      </TouchableOpacity>
    </View>
  );
}
