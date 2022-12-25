import { StyleSheet, Dimensions } from "react-native";

const H = Dimensions.get("screen").height
const W = Dimensions.get("screen").width

console.log("height: "+H)

const background = StyleSheet.create({
    bg: {
      flex: 1,
      backgroundColor: '#EBF2FA',
    },
  })

const homeScreen = StyleSheet.create({
    title: {
      fontFamily: 'Roboto',
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 30,
      color: '#427AA2',
      marginLeft: 18,
      marginBottom: H * 0.01
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    productName: {
      fontFamily: 'Roboto',
      fontSize: 14,
      marginRight: 16,
      fontWeight: '700',
      lineHeight: 40,
    },
    productCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-evenly",
      marginVertical: 6,
      marginHorizontal: 8
    },
    shortage: {
      fontFamily: 'Roboto',
      fontSize: 19,
      fontWeight: '700',
      lineHeight: 40,
      color: 'red'
    },
    showcaseAnalytics: {
      backgroundColor: '#E3E6E9',
      height: H * 0.28,
      marginHorizontal: 24,
      borderRadius: 20
    },
    showcaseShortage: {
      backgroundColor: '#E3E6E9',
      height: H * 0.24,
      marginHorizontal: H * 0.035,
      borderRadius: 20
    },
    section: {
      flex: 1,
      justifyContent: 'flex-end',
      marginTop: H * 0.04,
      marginBottom: H * 0.03
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: H * 0.04,
      marginBottom: H * 0.08
    },
    avatar: {
      width: 40,
      height:40,
      borderRadius: 50,
    }
})


export { background, homeScreen }