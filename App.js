import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfessorScreen from "./screens/ProfessorScreen";
import HomeScreen from "./screens/HomeScreen";
import MarcarPresenca from "./screens/MarcarPresenca";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">

        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Bem-vindo" }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Login Professora" }} />
        <Stack.Screen name="Professor" component={ProfessorScreen} options={{ title: "Painel Professora" }} />
        <Stack.Screen name="Aluno" component={MarcarPresenca} options={{ title: "Marcar Presença" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Chamada ao Vivo" }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
