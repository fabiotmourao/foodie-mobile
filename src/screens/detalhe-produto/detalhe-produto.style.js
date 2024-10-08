import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    containerFoto: {
        alignItems: 'center',
    },
    produto: {
        height: 150,
    },
    containerBack2: {
        position: 'absolute',
        top: 30,
        left: 15,
    },
    back2: {
        width: 40,
        height: 40
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
    },
    headerTextos: {
        flex: 1,
    },
    nome: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    descricao: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.md
    },
    valor: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        marginBottom: 2,
        marginTop: 15
    },
    headerObservacao: {
        width: '100%',
        padding: 10,
    },
    multilineInput: {
        flex: 1,
        backgroundColor: COLORS.light_gray,
        padding: 10,
        color: COLORS.dark_gray,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: COLORS.gray,
        minHeight: 120,
        textAlignVertical: 'top',
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',

    },
    imgQtd: {
        width: 40,
        height: 40
    },
    qtd: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.dark_gray,
        width: 35,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    footerBtn: {
        flex: 1,
        marginLeft: 15,
        marginRight: 5
    }
}