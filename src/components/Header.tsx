import { View, Image, TouchableOpacity, Text } from "react-native";

export type UserProps = {
  id: string;
  avatar: string;
  discriminator: string;
  username: string;
};

type Props = {
  user: UserProps;
};

export function Header({ user }: Props) {
  return (
    <View className="w-full flex-row items-center ">
      <TouchableOpacity
        className="flex-row justify-between items-center"
        activeOpacity={0.7}
      >
        <Image
          className="rounded-full"
          source={{
            uri: `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`,
          }}
          style={{ width: 45, height: 45 }}
        />
      </TouchableOpacity>
      <Text className="text-zinc-200 text-2xl font-extrabold text-center mx-1 ml-14 justify-center">
        Servidores
      </Text>
    </View>
  );
}
