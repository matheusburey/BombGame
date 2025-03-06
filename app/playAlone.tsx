import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Keyboard,
  Vibration,
} from "react-native";
import BombTimer from "../components/BombTimer";
import Logo from "../components/Logo";
import { useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import QUESTION from "../constants/questions";

export default function PlayWithFriends() {
  const [started, setStarted] = useState(false);
  const [bombTimeInSeconds, setBombTimeInSeconds] = useState(60);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(0);
  const [error, setError] = useState(false);

  const [pin, setPin] = useState(["", "", ""]);

  const input1 = useRef<any>();
  const input2 = useRef<any>();
  const input3 = useRef<any>();

  function validatePassword() {
    if (pin.join("") === answer.toString()) {
      router.replace("disarmed");
    } else {
      setError(true);
      Vibration.vibrate(1000);
    }
  }

  function handlePressPlay() {
    const sortedQuestion = QUESTION.sort(() => Math.random() - 0.5)[0];
    setQuestion(sortedQuestion.question);
    setAnswer(sortedQuestion.result);
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
            clearInterval(interval);
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
      <View className="items-center">
        <Text className="text-2xl font-body mt-9">
          {question && "Dica de senha:"}
        </Text>
        <Text className="text-2xl font-body">
          {question && "Quanto é " + question + "?"}
        </Text>
      </View>
      <View className="justify-evenly flex-row">
        <TextInput
          keyboardType="number-pad"
          editable={started}
          maxLength={1}
          ref={input1}
          onChangeText={(text) => {
            text && input2.current.focus();
            setPin([text, pin[1], pin[2]]);
          }}
          className="border rounded text-center text-xl mt-8 w-14"
        />
        <TextInput
          keyboardType="number-pad"
          editable={started}
          maxLength={1}
          ref={input2}
          onChangeText={(text) => {
            text && input3.current.focus();
            setPin([pin[0], text, pin[2]]);
          }}
          className="border rounded text-center text-xl mt-8 w-14"
        />
        <TextInput
          ref={input3}
          editable={started}
          onChangeText={(text) => {
            text && Keyboard.dismiss();
            setPin([pin[0], pin[1], text]);
          }}
          keyboardType="number-pad"
          maxLength={1}
          className="border rounded text-center text-xl mt-8 w-14"
        />
      </View>
      <Text className="text-2xl text-red-500 font-body text-center mt-8">
        {error && "Código invalido"}
      </Text>
      {started ? (
        <TouchableOpacity
          onPress={validatePassword}
          activeOpacity={0.7}
          className="items-center bg-gray-600 p-4 rounded-lg mt-12 w-full"
        >
          <Text className="text-2xl font-alt text-white">Desarmar</Text>
        </TouchableOpacity>
      ) : (
        <View className="justify-evenly flex-row">
          <TouchableOpacity
            onPress={handlePressPlay}
            activeOpacity={0.7}
            disabled={started}
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
        </View>
      )}
    </ScrollView>
  );
}
