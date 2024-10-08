import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./pedido.style.js";
import icons from "../../constants/icons.js"

function Pedido(props) {
    return <TouchableOpacity style={styles.pedidorow} onPress={() => props.onClickPedido()}>
        <Image  source={props.logotipo} style={styles.logotipo}/>
        <View style={styles.textos}>
            <Text style={styles.nome}>{props.nome}</Text>

            <View style={styles.containervalor}>
                <Text style={styles.valor}>
                   {
                        new Intl.NumberFormat("pt-br", 
                            {style: "currency",
                                currency: "BRL"
                            }
                        ).format(props.valor)
                    }
                </Text>
                <Text style={styles.valor}>{props.dt_pedido}</Text>
            </View>

            <Text style={styles.status}>{props.status}</Text>
        </View>
    </TouchableOpacity>
}

export default Pedido;