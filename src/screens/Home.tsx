import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../components/Header";
import { GamesButton } from "../components/GamesButton";

interface Params {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  guilds: Array<String>;
  access_token: string;
}

export function Home() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { username, avatar, id, discriminator } = route.params as Params;
  const user = {
    id: id,
    username: username,
    avatar: avatar,
    discriminator: discriminator,
  };

  console.log(user.avatar);

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Header userAvatar={user.avatar} />
        <GamesButton />
      </ScrollView>
    </View>
  );
}
