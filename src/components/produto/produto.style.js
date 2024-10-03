import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
    produto: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 10,
        backgroundColor: COLORS.white,
    },
    foto: {
        width: 80,
        height: 80,
        borderRadius: 6,
    },
    textos: {
        flex: 1,
        padding: 8
    },
    nome: {
        color: COLORS.dark_gray,
        marginBottom: 3,
        fontSize: FONT_SIZE.sm
    },
    descricao: {
        color: COLORS.medium_gray,
        fontSize: FONT_SIZE.sm
    },
    valor: {
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.sm,
        marginTop: 8
    },  
}