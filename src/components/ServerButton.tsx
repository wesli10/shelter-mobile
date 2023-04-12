import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { View } from "react-native";

interface ServerProps {
  name: string;
  icon: string;
  id: string;
}

export function ServerButton({ name, icon, id }: ServerProps) {
  return (
    <TouchableOpacity
      className=" w-full border-2 px-4 py-2 border-violet-400 rounded-md mt-3 flex-row justify-between text-center"
      activeOpacity={0.7}
    >
      {icon !== null ? (
        <Image
          className="rounded-full"
          source={{
            uri: `https://cdn.discordapp.com/icons/${id}/${icon}.png`,
          }}
          style={{ width: 50, height: 50 }}
        />
      ) : (
        <View
          className="rounded-full bg-zinc-200 justify-center  "
          style={{ width: 50, height: 50 }}
        >
          <Text className="text-zinc-800 font-extrabold text-2xl text-center">
            {name.charAt(0)}
          </Text>
        </View>
      )}
      <Text className="text-lg text-violet-400 font-bold mt-3">{name}</Text>
    </TouchableOpacity>
  );
}
