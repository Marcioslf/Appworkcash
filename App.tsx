const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import NotificationBell1395Svgrepo from "./components/NotificationBell1395Svgrepo";
import AppworkcashAlpha from "./components/AppworkcashAlpha";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import VerificaoEMail from "./screens/VerificaoEMail";
import EsqueceuASenhaemail from "./screens/EsqueceuASenhaemail";
import TelaIncial from "./screens/TelaIncial";
import DetalheDaConta from "./screens/DetalheDaConta";
import Notificao from "./screens/Notificao";
import Configurao from "./screens/Configurao";
import Img from "./screens/Img";
import IconChevronBottom from "./components/IconChevronBottom";
import SolicitarSaque from "./screens/SolicitarSaque";
import TransioParaSaqueOk from "./screens/TransioParaSaqueOk";
import TransferenciaOK from "./screens/TransferenciaOK";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Urbanist-Light": require("./assets/fonts/Urbanist-Light.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cadastro"
              component={Cadastro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificaoEMail"
              component={VerificaoEMail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EsqueceuASenhaemail"
              component={EsqueceuASenhaemail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaIncial"
              component={TelaIncial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalheDaConta"
              component={DetalheDaConta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notificao"
              component={Notificao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Configurao"
              component={Configurao}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Img"
              component={Img}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SolicitarSaque"
              component={SolicitarSaque}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransioParaSaqueOk"
              component={TransioParaSaqueOk}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransferenciaOK"
              component={TransferenciaOK}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
