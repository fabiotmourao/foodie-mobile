import { View, FlatList, Image, Text } from "react-native";
import { styles } from "./busca.style.js";
import { restaurantes } from "../../constants/dados.js";
import Restaurante from "../../components/restaurante/restaurante.jsx";
import icons from "../../constants/icons.js";

function Busca() {
    return <View style={styles.container}>
            <FlatList data={restaurantes}
                keyExtractor={(restaurante) => restaurante.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return <Restaurante 
                        nome={item.nome}
                        endereco={item.endereco}
                        logotipo={item.logotipo}
                        icone={icons.heartFull}
                    />
                }}

                contentContainerStyle={styles.containerList}

                ListEmptyComponent={() => {
                    return <View style={styles.empty}>
                        <Image source={icons.empty}/>
                        <Text  style={styles.emptyText}>Nenhum restaurante encontrado!</Text>
                    </View>
                }}
            />
        </View>
}

export default Busca;