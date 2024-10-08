import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        paddingTop: 30
    },
    header: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
    },
    containerBack: {
        position: 'absolute',
        top: 7,
        left: 0,
    },
    back: {
        width: 30,
        height: 30
    },
    titulo: {
        fontSize: FONT_SIZE.md,
        color: COLORS.dark_gray,
        marginBottom: 2,
        textAlign: 'center'
    },  
    containerTotal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
        marginTop: 4
    }, 
    texto: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
    },
    textoTotal: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold'
    },
}