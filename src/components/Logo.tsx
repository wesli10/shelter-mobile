import { Image, View } from "react-native";

export function Logo() {
  return (
    <View className="justify-center items-center">
      <Image
        className="mt-20"
        style={{ width: 150, height: 120 }}
        source={require("../assets/shelterboy.png")}
      />
    </View>
  );
}
