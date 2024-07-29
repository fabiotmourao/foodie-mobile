import { Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from "./constants/icons";

import Home from './screens/home/home';
import Favoritos from './screens/favoritos/favotiros';
import Pedidos from './screens/pedidos/pedidos';
import Perfil from './screens/perfil/perfil';



const Tab = createBottomTabNavigator();

function RoutesAuth() {
    return <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen name="home" component={Home} options={{ 
                headerShown: false,
                tabBarIcon: ({ focused }) => { 
                    return <Image source={ icons.abaHome} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}/>                   
                }
            }}/>

            <Tab.Screen name="favoritos" component={Favoritos} options={{ 
                title: "Favoritos",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                tabBarIcon: ({ focused }) => {
                    return <Image source={ icons.abafavorito } style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}/>                   
                }
            }}/>
            
            <Tab.Screen name="pedidos" component={Pedidos} options={{ 
                title: "Meus Pedidos",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                tabBarIcon: ({ focused }) => { 
                    return <Image source={ icons.abaPedido } style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}/>                   
                }
            }}/>

            <Tab.Screen name="perfil" component={Perfil} options={{  
                title: "Perfil",
                headerTitleAlign: "center",
                headerShadowVisible: false,
                tabBarIcon: ({ focused }) => {
                    return <Image source={ icons.abaPerfil} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }}/>
                }
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
}



export default RoutesAuth;