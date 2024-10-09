import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './screens/principal/principal';
import Cardapio from './screens/cardapio/cardapio';
import Busca from './screens/busca/busca';
import DetalheProduto from './screens/detalhe-produto/detalhe-produto';
import DetalhePedido from './screens/detalhe-pedido/detalhe-pedido';
import Checkout from './screens/checkout/checkout';
import { COLORS } from './constants/theme';

const Stack = createNativeStackNavigator();

function RoutesAuth() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="pricipal" component={Principal} options={{
                headerShown: false
            }} />

            <Stack.Screen name="checkout" component={Checkout} options={{
                headerShadowVisible: false,
                title: "Meu Pedido",
                headerBackTitle: "Voltar",
                headerTitleAlign: "center",
                headerBackTitle: "Voltar",
                headerRight: () => {
                   return <TouchableOpacity>
                        <Text style={{color: COLORS.red}}>
                            Limpar
                        </Text>
                    </TouchableOpacity>
                },
                animation: "slide_from_right",
            }}
            />

            <Stack.Screen name="detalhe-pedido" component={DetalhePedido} options={{
                headerShadowVisible: false,
                title: "Detalhes do Pedido",
                headerBackTitle: "Voltar",
                headerTitleAlign: "center",
                headerBackTitle: "Voltar",
                animation: "slide_from_right",

            }} />

            <Stack.Screen name="detalhe-produto" component={DetalheProduto} options={{
                headerShown: false
            }} />

            <Stack.Screen name="cardapio" component={Cardapio} options={{
                headerShown: false,
            }} />

            <Stack.Screen name="busca" component={Busca} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default RoutesAuth;