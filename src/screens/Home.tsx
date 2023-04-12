import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Header } from "../components/Header";
import { ListGuilds } from "../components/ListGuilds";

interface Params {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  guilds: Array<String>;
}

export function Home() {
  const { navigate } = useNavigation();
  const route = useRoute();
  const { username, avatar, id, discriminator, guilds } =
    route.params as Params;
  const user = {
    id: id,
    username: username,
    avatar: avatar,
    discriminator: discriminator,
  };

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Header user={user} />
        <ListGuilds guilds={guilds} />
      </ScrollView>
    </View>
  );
}
