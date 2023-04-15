import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { Forca } from "../screens/games/Forca";

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="login">
      <Screen name="login" component={Login} />

      <Screen name="home" component={Home} />

      <Screen name="forca" component={Forca} />
    </Navigator>
  );
}
