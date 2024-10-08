import { Image, View, TouchableOpacity, Text, TextInput } from "react-native"
import { styles } from "./detalhe-produto.style.js"
import icons from "../../constants/icons.js";
import Button from "../../components/button/button.jsx";

function DetalheProduto(props) {
    return <View style={styles.container} >
        <View style={styles.containerFoto}>
            <Image source={icons.produto} style={styles.produto} resizeMode="cover" />

            <TouchableOpacity style={styles.containerBack2} onPress={() => props.navigation.goBack()}>
                <Image source={icons.back2} style={styles.back2} />
            </TouchableOpacity>
        </View>
        
        <View style={styles.header}>
            <View style={styles.headerTextos}>
                <Text style={styles.nome}>Pizza Calabresa</Text>
                <Text style={styles.descricao}>
                    Massa artesanal ,mussarela, calabresa, cebola.
                    Serve de 2 a 4 pessoas. Molho e tomate, azeitonas, 100% natural 
                    e ingrediente seleconados.
                </Text>
                <Text style={styles.valor}>R$ 57,00</Text>
            </View>            
        </View>    

        <View style={styles.headerObservacao}>
            <Text style={styles.descricao}>Observações</Text>
            <TextInput style={styles.multilineInput}
                multiline={true}
                numberOfLines={5} />
        </View>    
        
        <View style={styles.footer}>
            <TouchableOpacity >
                <Image source={icons.menos} style={styles.imgQtd} />
            </TouchableOpacity>

            <Text style={styles.qtd}>1</Text>

            <TouchableOpacity >
                <Image source={icons.mais} style={styles.imgQtd} />
            </TouchableOpacity>

            <View style={styles.footerBtn}> 
                <Button texto="Inserir"/>
            </View>
        </View>  
    </View>
}
export default DetalheProduto;

