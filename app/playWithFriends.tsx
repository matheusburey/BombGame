import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BombTimer from "../components/bombTimer";
import Logo from "../components/Logo";
import { useRef } from "react";
import { router } from "expo-router";

export default function PlayWithFriends() {
  const input1 = useRef<any>();
  const input2 = useRef<any>();
  const input3 = useRef<any>();
  const input4 = useRef<any>();

  function validatePassword() {
    console.log({
      input1: input1.current.value,
      input2: input2.current.value,
      input3: input3.current.value,
      input4: input4.current.value,
    });
  }
  function handlePressPlay() {
    console.log("start");
  }

  function handlePressReturn() {
    router.back();
  }

  return (
    <ScrollView className="flex-1 m-4 mt-24">
      <Logo />
      <View className="flex-row justify-center">
        <BombTimer />
      </View>
      <View className="items-center">
        <Text className="text-2xl font-body mt-9">Dica de senha:</Text>
        <Text className="text-2xl font-body">2 + 3 - 4</Text>
      </View>
      <View className="justify-evenly flex-row">
        <TextInput
          keyboardType="number-pad"
          maxLength={1}
          ref={input1}
          onChangeText={(text) => {
            if (text.length === 1) input2.current.focus();
          }}
          className="border rounded text-center text-xl mt-8 w-14"
        />
        <TextInput
          keyboardType="number-pad"
          maxLength={1}
          ref={input2}
          onChangeText={(text) => {
            if (text.length === 1) input3.current.focus();
          }}
          className="border rounded text-center text-xl mt-8 w-14"
        />
        <TextInput
          ref={input3}
          onChangeText={(text) => {
            if (text.length === 1) input4.current.focus();
          }}
          keyboardType="number-pad"
          maxLength={1}
          className="border rounded text-center text-xl mt-8 w-14"
        />
        <TextInput
          keyboardType="number-pad"
          maxLength={1}
          ref={input4}
          onChangeText={(text) => {
            if (text.length === 1) validatePassword();
          }}
          className="border rounded text-center text-xl mt-8 w-14"
        />
      </View>
      <View className="justify-evenly flex-row">
        <TouchableOpacity
          onPress={handlePressPlay}
          activeOpacity={0.7}
          className="items-center bg-gray-600 p-4 rounded-lg mt-12"
        >
          <Text className="text-2xl font-alt text-white">Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressReturn}
          activeOpacity={0.7}
          className="items-center bg-gray-600 p-4 rounded-lg mt-12"
        >
          <Text className="text-2xl font-alt text-white">Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
