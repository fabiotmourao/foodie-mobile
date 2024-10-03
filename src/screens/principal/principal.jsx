import { Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from "../../constants/icons";

import AbaHome from '../../screens/aba-home//aba-home';
import AbaFavoritos from '../../screens/aba-favoritos/aba-favoritos';
import AbaPedidos from '../../screens/aba-pedidos/aba-pedidos'; 
import AbaPerfil from '../../screens/aba-perfil/aba-perfil';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function Principal() {
    return <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
        <Tab.Screen name="home" component={AbaHome} options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abaHome} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />

        <Tab.Screen name="favoritos" component={AbaFavoritos} options={{
            title: "Favoritos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abafavorito} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />

        <Tab.Screen name="pedidos" component={AbaPedidos} options={{
            title: "Meus Pedidos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abaPedido} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />

        <Tab.Screen name="perfil" component={AbaPerfil} options={{
            title: "Perfil",
            headerTitleAlign: "center",
            headerShadowVisible: false,
            tabBarIcon: ({ focused }) => {
                return <Image source={icons.abaPerfil} style={{ width: 25, height: 25, opacity: focused ? 1 : 0.3 }} />
            }
        }} />
    </Tab.Navigator>
}

export default Principal;