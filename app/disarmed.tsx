import { Image, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { router } from "expo-router";

export default function Disarmed() {
  return (
    <View className="flex-1 m-4 mt-32 items-center">
      <Logo />
      <Text className="text-3xl font-body mt-9">Parabéns!!!</Text>
      <Text className="text-3xl font-body my-9">A bomba foi desarmada!</Text>
      <Image
        className="items-center h-52 w-full"
        source={require("../assets/images/success.webp")}
      />
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.7}
        className="items-center bg-gray-600 p-4 rounded-lg mt-12 w-1/2"
      >
        <Text className="text-2xl font-alt text-white">Jogar solo</Text>
      </TouchableOpacity>
    </View>
  );
}
