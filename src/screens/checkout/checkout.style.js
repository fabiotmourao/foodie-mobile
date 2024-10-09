import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
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
    containerBtn: {
        marginTop: 20,
    }
}