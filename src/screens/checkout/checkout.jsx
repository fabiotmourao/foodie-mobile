import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { styles } from "./checkout.style.js";
import icons from "../../constants/icons.js";
import { pedido } from "../../constants/dados.js";
import Produto from "../../components/produto/produto.jsx";
import Button from "../../components/button/button.jsx";

function Checkout(props) {
    function clickDelete() {
        props.onClickDelete();
    } 
    return <View style={styles.container}>
        <FlatList data={pedido.itens}
            keyExtractor={(item) => item.idItem}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Produto key={item.idItem}
                    foto={item.foto}
                    nome={item.nome}
                    descricao={item.descricao}
                    valor={item.vlTotal}
                    onClickDelete={clickDelete}
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

        <View style={styles.containerBtn}>
            <Button texto="Finalizar pedido"/> 
        </View>

    </View>
}

export default Checkout;