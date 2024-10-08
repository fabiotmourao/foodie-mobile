import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './screens/principal/principal';
import Cardapio from './screens/cardapio/cardapio';
import Busca from './screens/busca/busca';
import DetalheProduto from './screens/detalhe-produto/detalhe-produto';
import DetalhePedido from './screens/detalhe-pedido/detalhe-pedido';

const Stack = createNativeStackNavigator();

function RoutesAuth() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="detalhePedido" component={DetalhePedido} options={{
                headerShown: false
            }} />   

            <Stack.Screen name="detalheProduto" component={DetalheProduto} options={{
                headerShown: false
            }} />

            <Stack.Screen name="pricipal" component={Principal} options={{
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