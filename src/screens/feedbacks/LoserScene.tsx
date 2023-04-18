import { View, Text } from "react-native";
import Loser from "../../assets/loser.svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

interface LoserSceneParams {
  word: string;
}

export function LoserScene() {
  const route = useRoute();
  const { navigate } = useNavigation();
  const { word } = route.params as LoserSceneParams;

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <Text className="text-red-500 mb-28 font-extrabold text-2xl">ERROU!</Text>
      <Text className="color-white mb-12 text-xl font-extrabold">
        A palavra era: {word}
      </Text>
      <Loser />
      <TouchableOpacity
        activeOpacity={0.6}
        className="border-2 rounded-2xl bg-red-500 p-5 mt-32 flex-row items-center"
        onPress={() => navigate("forca")}
      >
        <Text className="color-white text-xl font-extrabold mr-4">
          Tentar Novamente
        </Text>
        <Feather size={30} color={colors.white} name="refresh-ccw" />
      </TouchableOpacity>
    </View>
  );
}
