import { ScrollView, Text, View } from "react-native";
import { ServerButton } from "./ServerButton";

interface Params {
  guilds: Array<any>;
}

type GuildTypes = {
  name: string;
  id: string;
  icon: string;
};

export function ListGuilds({ guilds }: Params) {
  const servers: any = [];
  guilds.map((server) => {
    servers.push({
      name: server.name,
      id: server.id,
      icon: server.icon,
    });
  });

  return (
    <View className="flex-col items-center mt-12 w-full">
      <ScrollView
        className="w-full"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        {servers.map((server: GuildTypes) => (
          <View key={server.id}>
            <ServerButton
              id={server.id}
              icon={server.icon}
              name={server.name}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
