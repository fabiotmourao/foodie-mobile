import { View, FlatList,Text, Image } from "react-native";
import { pedidos } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import { styles } from "./aba-pedidos.style.js";
import Pedido from "../../components/pedido/pedido.jsx";
import { useLinkProps } from "@react-navigation/native";


function AbaPedidos(props) {
    function renderPedidos() {  
        props.navigation.navigate("detalhe-pedido");
    }

    return <View style={styles.container}>
            <FlatList data={pedidos}
                keyExtractor={(pedido) => pedido.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Pedido logotipo={item.logotipo}
                        nome={item.nome}
                        valor={item.vl_total}
                        dt_pedido={item.dt_pedido}
                        status={item.status}
                        onClickPedido={renderPedidos}
                    />
                }}

                contentContainerStyle={styles.containerList}

                ListEmptyComponent={() => {
                    return <View style={styles.empty}>
                        <Image source={icons.empty}/>
                        <Text  style={styles.emptyText}>Nenhum favorito encontrado!</Text>
                    </View>
                }}
            />
    </View>
}

export default AbaPedidos;