import { useRef } from "react";
import { Keyboard, TextInput, View } from "react-native";

interface IPinInputsProps {
  started: boolean;
  pin: string[];
  setPin: (pin: string[]) => void;
}

export default function PinInputs({ started, pin, setPin }: IPinInputsProps) {
  const input1 = useRef<any>();
  const input2 = useRef<any>();
  const input3 = useRef<any>();

  return (
    <View className="justify-evenly flex-row">
      <TextInput
        keyboardType="number-pad"
        value={pin[0]}
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
        value={pin[1]}
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
        value={pin[2]}
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
  );
}
