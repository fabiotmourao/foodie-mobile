import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/login/login';
import Registro from './screens/registro/registro';
import Registro2 from './screens/registro2/registro2';
import Home from './screens/home/home';
import Favoritos from './screens/favoritos/favotiros';
import Pedidos from './screens/pedidos/pedidos';
import Perfil from './screens/perfil/perfil';


const Stack = createNativeStackNavigator();

function Routes() {
  return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="perfil" component={Perfil} options={{ 
                headerShadowVisible: false,
                title: "Meu Perfil",
                headerTitleAlign: "center"

            }}/>

            <Stack.Screen name="pedidos" component={Pedidos} options={{ 
                headerShadowVisible: false,
                title: "Meus Pedidos",
                headerTitleAlign: "center"

            }}/>

            <Stack.Screen name="favoritos" component={Favoritos} options={{ 
                headerShadowVisible: false,
                title: "Favoritos",
                headerTitleAlign: "center"

            }}/>

            <Stack.Screen name="home" component={Home} options={{ headerShown: false }}/>

            <Stack.Screen name="registro" component={Registro} options={{ 
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />
            <Stack.Screen name="registro2" component={Registro2} options={{ 
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />
            <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;