import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  TouchableHighlightProps,
  Text,
} from "react-native";

export function GamesButton({ ...rest }: TouchableHighlightProps) {
  const { navigate } = useNavigation();

  return (
    <View className="justify-between">
      <TouchableOpacity
        className="flex items-center justify-center mt-40 border-2 border-violet-300 h-16 w-full rounded-lg"
        activeOpacity={0.6}
        onPress={() => navigate("forca")}
        {...rest}
      >
        <Text className="text-white font-extrabold text-2xl">
          Jogo da Forca
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex items-center justify-center mt-5 border-2 border-violet-300 h-16 w-full rounded-lg"
        activeOpacity={0.6}
        {...rest}
      >
        <Text className="text-white font-extrabold text-2xl">TESTE 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex items-center justify-center  mt-5 border-2 border-violet-300 h-16 w-full rounded-lg"
        activeOpacity={0.6}
        {...rest}
      >
        <Text className="text-white font-extrabold text-2xl">TESTE 3</Text>
      </TouchableOpacity>
    </View>
  );
}