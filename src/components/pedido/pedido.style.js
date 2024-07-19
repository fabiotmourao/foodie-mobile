import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    pedidorow: {
        flexDirection: "row",
        marginBottom:10,
        marginTop:10
    },
    logotipo: {
        width: 80,
        height: 80,
        borderRadius: 6
    },
    textos: {
        flex:1,
        padding: 8,
    },
    containervalor: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    valor: {
        color: COLORS.medium_gray,
        fontSeize: FONT_SIZE.sm,
    },
    status: {
        color: COLORS.green,
    },


}