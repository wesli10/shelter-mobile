import { View, Text } from "react-native";
import Winner from "../../assets/winner.svg";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export function WinnerScene() {
  const route = useRoute();
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-background justify-center items-center">
      <Text className="text-green-500 mb-28 font-extrabold text-2xl">
        PARÁBENS!!
      </Text>
      <Text className="color-white mb-12 text-xl font-extrabold"></Text>
      <Winner />
      <TouchableOpacity
        activeOpacity={0.6}
        className="border-2 rounded-2xl bg-green-500 p-5 mt-32 flex-row items-center"
        onPress={() => navigate("forca")}
      >
        <Text className="color-white text-xl font-extrabold mr-4">
          Jogar Novamente
        </Text>
        <Feather size={30} color={colors.white} name="refresh-ccw" />
      </TouchableOpacity>
    </View>
  );
}
