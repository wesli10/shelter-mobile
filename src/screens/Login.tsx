import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { Logo } from "../components/Logo";
import * as AuthSession from "expo-auth-session";
import { UserProps } from "../components/Header";
import { useState } from "react";

type AuthResponse = {
  params: {
    access_token: string;
    token_type: string;
  };
  type: string;
};

export function Login() {
  const { navigate } = useNavigation();

  async function handleDiscordLogin() {
    try {
      const client_id = "1090401757378654358";
      const redirect_uri = "https://auth.expo.io/@wesli10/shelter-app";
      const authUrl = `https://discord.com/oauth2/authorize?response_type=token&client_id=${client_id}&scope=identify%20%20guilds%20guilds.join&state=15773059ghq9183habn&redirect_uri=${redirect_uri}&prompt=consent`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await fetch("https://discord.com/api/users/@me", {
          headers: {
            Authorization: `Bearer ${params.access_token}`,
          },
        });

        const user: UserProps = await response.json();

        const list = await fetch("https://discord.com/api/users/@me/guilds", {
          headers: {
            Authorization: `Bearer ${params.access_token}`,
          },
        });

        const guilds: [] = await list.json();

        navigate("home", {
          id: user.id,
          avatar: user.avatar,
          discriminator: user.discriminator,
          username: user.username,
          guilds: guilds,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Text className="text-zinc-400 text-2xl font-bold text-center mx-1">
        Shelter
      </Text>
      <Logo />
      <TouchableOpacity
        activeOpacity={0.7}
        className="w-full flex-row h-12 items-center justify-center bg-violet-600 rounded-md mt-32"
        onPress={handleDiscordLogin}
      >
        <FontAwesome name="discord" color="white" size={28} />
        <Text className="font-extrabold text-white ml-2 ">
          Entrar com Discord
        </Text>
      </TouchableOpacity>
    </View>
  );
}
