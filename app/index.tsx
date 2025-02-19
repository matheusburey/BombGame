import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";

export default function App() {
  function handlePressAlone() {
    router.push("playAlone");
  }

  function handlePressWithFriends() {
    router.push("playWithFriends");
  }

  return (
    <View className="flex-1 m-12 mt-40">
      <Logo />

      <Text className="text-center text-2xl font-body mt-24">
        Escolha um modo de jogo:
      </Text>
      <TouchableOpacity
        onPress={handlePressAlone}
        activeOpacity={0.7}
        className="items-center bg-gray-600 p-4 rounded-lg mt-12"
      >
        <Text className="text-2xl font-alt text-white">Jogar solo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePressWithFriends}
        activeOpacity={0.7}
        className="items-center bg-gray-600 p-4 rounded-lg mt-12"
      >
        <Text className="text-2xl font-alt text-white">Jogar com amigos</Text>
      </TouchableOpacity>
    </View>
  );
}
