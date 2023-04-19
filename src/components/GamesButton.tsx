import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  TouchableHighlightProps,
  Text,
  Modal,
} from "react-native";
import { useState } from "react";

export function GamesButton({ ...rest }: TouchableHighlightProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { navigate } = useNavigation();

  return (
    <View className="justify-between">
      <TouchableOpacity
        className="flex items-center justify-center mt-40 border-2 border-violet-300 h-16 w-full rounded-lg flex-row"
        activeOpacity={0.6}
        onPress={() => navigate("forca")}
        {...rest}
      >
        <Text className="text-white font-extrabold text-2xl ">Forca</Text>
      </TouchableOpacity>
    </View>
  );
}
