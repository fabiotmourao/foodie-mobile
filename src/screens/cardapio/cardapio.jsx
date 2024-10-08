import { Image, View, TouchableOpacity, Text, ScrollView } from "react-native"
import { styles } from "./cardapio.style.js"
import { restaurante } from "../../constants/dados.js";
import icons from "../../constants/icons.js";
import Produto from "../../components/produto/produto.jsx";

function Cardapio(props) {
    return <View style={styles.container} >
        <View style={styles.containerFoto}>
            <Image source={restaurante.foto} style={styles.foto} resizeMode="contain" />

            <TouchableOpacity style={styles.containerBack2} onPress={() => props.navigation.goBack()}>
                <Image source={icons.back2} style={styles.back2} />
            </TouchableOpacity>
        </View>
        
        <View style={styles.header}>
            <View style={styles.headerTextos}>
                <Text style={styles.nome}>{restaurante.nome}</Text>
                <Text style={styles.taxa}>Taxa de entrega: R$ {restaurante.vlEntrega}</Text>
            </View>
            <Image source={icons.heartFull} style={styles.favorito} />
        </View>

        <ScrollView>
            <View style={styles.location}>
                <Image source={icons.location} style={styles.locationImd} />
                <Text style={styles.endereco}>{restaurante.endereco}</Text>
            </View>

            {
                restaurante.cardapio.map((item) => {
                    return <View style={styles.containerCardapio} key={item.idCategoria} >
                        <Text style={styles.categoriaText}>{item.categoria}</Text>

                        {
                            item.itens.map((prod) => {
                                return <Produto
                                    key={prod.idProduto}
                                    idProduto={prod.idProduto}
                                    foto={prod.foto}
                                    nome={prod.nome}
                                    descricao={prod.descricao}
                                    valor={prod.valor}
                                />
                            })
                        }
                    </View>
                })
            }
        </ScrollView>
    </View>
}
export default Cardapio;

