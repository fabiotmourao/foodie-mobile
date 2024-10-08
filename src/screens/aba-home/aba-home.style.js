import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 12
    },
    headerBar: {
        height: 45,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
    },
    logo: {
        width: 140,
        height: 27,

    },
    cart: {
        width: 30,
        height: 30,
        color: COLORS.dark_gray,
    },
    busca: {
        marginBottom: 10
    }
}