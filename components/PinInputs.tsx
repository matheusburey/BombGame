import { useRef } from "react";
import { Keyboard, TextInput, View } from "react-native";

interface IPinInputsProps {
  started: boolean;
  pin: string[];
  setPin: (pin: string[]) => void;
}

export default function PinInputs({ started, pin, setPin }: IPinInputsProps) {
  const classTextInput = "border rounded text-center text-xl mt-8 w-14 h-14";
  const input1 = useRef<any>();
  const input2 = useRef<any>();
  const input3 = useRef<any>();

  return (
    <View className="justify-evenly flex-row">
      <TextInput
        keyboardType="number-pad"
        maxLength={1}
        className={classTextInput}
        value={pin[0]}
        editable={started}
        ref={input1}
        onChangeText={(text) => {
          text && input2.current.focus();
          setPin([text, pin[1], pin[2]]);
        }}
      />
      <TextInput
        keyboardType="number-pad"
        maxLength={1}
        className={classTextInput}
        editable={started}
        value={pin[1]}
        ref={input2}
        onChangeText={(text) => {
          text && input3.current.focus();
          setPin([pin[0], text, pin[2]]);
        }}
      />
      <TextInput
        keyboardType="number-pad"
        maxLength={1}
        className={classTextInput}
        editable={started}
        value={pin[2]}
        ref={input3}
        onChangeText={(text) => {
          text && Keyboard.dismiss();
          setPin([pin[0], pin[1], text]);
        }}
      />
    </View>
  );
}
