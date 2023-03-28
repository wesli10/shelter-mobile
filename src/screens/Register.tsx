import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { BackButton } from "../components/BackButton";
import colors from "tailwindcss/colors";

import { api } from "../lib/axios";

export function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleCreateUser() {
    try {
      if (name.length === 0 || email.length === 0) {
        Alert.alert("Novo Usúario", "Preencha os campos para prosseguir!");
      }
      console.log(name, email);
      await api.post("/users", { name, email });

      setName("");
      setEmail("");

      Alert.alert("Novo Usúario", "Registro realizado com sucesso!");
    } catch (error) {
      Alert.alert("Ops", "Não foi possivel se registrar!");
      console.log(error);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-white font-extrabold text-3xl">
          Registrar
        </Text>

        <TextInput
          placeholder="Nome"
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-lg mt-12 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-400"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={colors.zinc[400]}
          className="h-12 pl-4 rounded-lg mt-5 bg-zinc-900 text-white border-2 border-zinc-800 focus:border-violet-400"
          onChangeText={setEmail}
          value={email}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          className="w-full flex-row h-12 items-center justify-center bg-green-600 rounded-md mt-32"
          onPress={handleCreateUser}
        >
          <Text className="font-extrabold text-white ml-2 ">Confirmar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
