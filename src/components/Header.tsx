import { View, Image, TouchableOpacity, Text } from "react-native";
import { BackButton } from "./BackButton";

type Props = {
  title: string;
};
export function Header({ title }: Props) {
  return (
    <View className="w-full flex-row items-center ">
      <TouchableOpacity
        className="flex-row justify-between items-center"
        activeOpacity={0.7}
      >
        <BackButton />
      </TouchableOpacity>
      <Text className="text-zinc-200 text-2xl font-extrabold text-center flex-1 mr-6 justify-center">
        {title}
      </Text>
    </View>
  );
}
