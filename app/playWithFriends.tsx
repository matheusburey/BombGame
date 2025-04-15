import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Vibration,
  TextInput,
} from "react-native";
import BombTimer from "../components/BombTimer";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import PinInputs from "../components/PinInputs";
import QUESTION from "../constants/questions";

export default function PlayWithFriends() {
  const [started, setStarted] = useState(false);
  const [bombTimeInSeconds, setBombTimeInSeconds] = useState(60);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const [pin, setPin] = useState(["", "", ""]);

  function validatePassword() {
    if (pin.join("") === answer.toString()) {
      router.replace("disarmed");
    } else {
      setErrorMessage("Código invalido");
      Vibration.vibrate(1000);
    }
  }

  function handlePressPlay() {
    const newPin = Number(pin.join(""));

    if (newPin < 1 || newPin > 999) {
      setErrorMessage("O código deve estar entre 1 e 999");
      Vibration.vibrate(1000);
      return;
    }
    setPin(["", "", ""]);
    setErrorMessage("");
    setAnswer(newPin);
    setStarted(true);
  }

  function handlePressReturn() {
    router.back();
  }

  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        setBombTimeInSeconds((prevTime) => {
          if (prevTime <= 1) {
            router.replace("exploded");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [started]);

  return (
    <ScrollView className="flex-1 m-4 mt-24">
      <Logo />
      <View className="flex-row justify-center">
        <BombTimer bombTimeInSeconds={bombTimeInSeconds} />
      </View>
      {started ? (
        <View className="items-center">
          <Text className="text-2xl font-body mt-9">
            {question && "Dica de senha:"}
          </Text>
          <Text className="text-2xl font-body">
            {question && "Quanto é " + question + "?"}
          </Text>
        </View>
      ) : (
        <View className="items-center">
          <TextInput
            placeholder="Digite a pergunta"
            className="border rounded text-xl mt-8 w-3/4 h-14"
            value={question}
            onChangeText={setQuestion}
          />
        </View>
      )}
      <PinInputs started={true} pin={pin} setPin={setPin} />
      <Text className="text-2xl text-red-500 font-body text-center mt-8">
        {errorMessage}
      </Text>
      <View className="justify-evenly flex-row">
        {started ? (
          <>
            <TouchableOpacity
              onPress={validatePassword}
              activeOpacity={0.7}
              className="items-center bg-gray-600 p-4 rounded-lg mt-12 w-full"
            >
              <Text className="text-2xl font-alt text-white">Desarmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.replace("exploded")}
              activeOpacity={0.7}
              className="items-center bg-gray-600 p-4 rounded-lg mt-12 w-full"
            >
              <Text className="text-2xl font-alt text-white">Desistir</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={handlePressPlay}
              activeOpacity={0.7}
              className="items-center bg-gray-600 p-4 rounded-lg mt-8"
            >
              <Text className="text-2xl font-alt text-white">Iniciar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handlePressReturn}
              activeOpacity={0.7}
              className="items-center bg-gray-600 p-4 rounded-lg mt-8"
            >
              <Text className="text-2xl font-alt text-white">Voltar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}
