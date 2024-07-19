import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registro.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";


function Registro(props) {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    return <>
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            
                <Header texto="Criar sua conta." />

                <View style={styles.formGroup}>
                    <View style={styles.form}>
                        <TextBox label="Nome Completo" onChangeText={(texto) => setNome(texto)} value={nome}/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="E-mail" onChangeText={(texto) => setEmail(texto)} value={email}/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Escolha uma senha" isPassword={true} onChangeText={(texto) => setSenha(texto)} value={senha}/>
                    </View>

                    <View style={styles.form}>
                        <TextBox label="Confirme a senha" isPassword={true} onChangeText={(texto) => setConfirmarSenha(texto)} value={confirmarSenha}/>
                    </View>

                    <View style={styles.form} >
                        <Button texto="Próximo passo" onPress={() => props.navigation.navigate("registro2")}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    </>
}

export default Registro;