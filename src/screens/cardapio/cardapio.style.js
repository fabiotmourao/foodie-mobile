import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    containerFoto: {
        alignItems: 'center',
    },
    foto: {
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
    favorito: {
        width: 40,
        height: 40,
    },
    headerTextos: {
        flex: 1,
    },
    nome: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        marginBottom: 2
    },
    taxa: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.md
    },
    location: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationImd: {
        width: 40,
        height: 40,
        margin: 10
    },
    endereco: {
        flex: 1,
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.md
    },
    containerCardapio: {
        padding: 10
    },
    categoriaText: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        padding: 2
    }
}