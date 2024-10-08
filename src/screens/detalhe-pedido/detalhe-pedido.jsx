import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./detalhe-pedido.style.js";
import icons from "../../constants/icons.js";
import { pedido } from "../../constants/dados.js";
import Produto from "../../components/produto/produto.jsx";

function DetalhePedido() {
    return <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.containerBack}>
                <Image source={icons.back} style={styles.back} />
            </TouchableOpacity>

            <Text style={styles.titulo}>Detalhes do pedido</Text>
        </View>

        <FlatList data={pedido.itens}
            keyExtractor={(item) => item.idItem}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Produto key={item.idItem}
                    foto={item.foto}
                    nome={item.nome}
                    descricao={item.descricao}
                    valor={item.vlTotal}
                />
            }}
        />

        <View>
            <View style={styles.containerTotal}>
                <Text style={styles.textoTotal}>Resumo dos valores</Text>
            </View>

            <View style={styles.containerTotal}>
                <Text style={styles.texto}>Subtotal</Text>
                <Text style={styles.texto}>R$ 57,00</Text>
            </View> 

            <View style={styles.containerTotal}>
                <Text style={styles.texto}>Taxa de entrega</Text>
                <Text style={styles.texto}>R$ 5,00</Text>
            </View> 

            <View style={styles.containerTotal}>
                <Text style={styles.textoTotal}>Total</Text>
                <Text style={styles.textoTotal}>R$ 63,00</Text>
            </View> 
        </View>

    </View>
}

export default DetalhePedido;