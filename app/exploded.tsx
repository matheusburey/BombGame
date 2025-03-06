import { Image, Text, TouchableOpacity, View } from "react-native";
import Logo from "../components/Logo";
import { router } from "expo-router";

export default function Exploded() {
  return (
    <View className="flex-1 p-4 pt-32 items-center bg-red-300">
      <Logo />
      <Text className="text-3xl font-body mt-9">Você Falhou!</Text>
      <Text className="text-3xl font-body my-9">A bomba explodiu!</Text>

      <Image
        className="items-center h-52 w-full"
        source={require("../assets/images/failure.jpg")}
        style={{ resizeMode: "contain" }}
      />
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.7}
        className="items-center bg-gray-600 p-4 rounded-lg mt-12 w-full"
      >
        <Text className="text-2xl font-alt text-white">Voltar para o início</Text>
      </TouchableOpacity>
    </View>
  );
}
