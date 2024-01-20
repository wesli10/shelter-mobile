import { View, TouchableOpacity, Text, Image } from "react-native";
import { BackButton } from "./BackButton";

type Props = {
  userAvatar: string;
};
export function Header({ userAvatar }: Props) {
  console.log(userAvatar);
  return (
    <View className="w-full flex-row items-center ">
      <TouchableOpacity
        className="flex-row justify-between items-center"
        activeOpacity={0.7}
      >
        <BackButton />
      </TouchableOpacity>
      <Text>test</Text>
      <Image source={{ uri: userAvatar }} />
    </View>
  );
}
