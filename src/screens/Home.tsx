import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../components/Logo";

export function Home() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Text className="text-zinc-400 text-2xl font-bold text-center mx-1">
        Shelter
      </Text>
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
        className="w-full flex-row h-12 items-center justify-center bg-violet-600 rounded-md mt-32"
      >
        <Feather name="user" size={28} />
        <Text className="font-extrabold text-white ml-2 ">Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate("login")}
        className="w-full flex-row h-12 items-center justify-center border-white border-2 rounded-md mt-4"
      >
        <Text className="font-extrabold text-white ml-2 ">Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}
