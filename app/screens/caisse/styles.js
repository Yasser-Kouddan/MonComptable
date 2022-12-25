import { StyleSheet, Dimensions } from "react-native"

const H = Dimensions.get('screen').height
const W = Dimensions.get('screen').width

const caisseScreen = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 40,
        color: '#427AA2',
        marginLeft: 25,
        marginTop: H * 0.04,
        marginBottom: 35
      },
      stonks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 27
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      vertical: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 4
      },
      hr: {
        borderWidth:  0.7,
        width: 0,
        height: 70, 
        borderColor: '#427AA2'
      },
      h1: {
        fontWeight: '700',
        fontFamily: 'Roboto',
        fontSize: 16,
      },
      h2: {
        fontWeight: '300',
        fontFamily: 'Roboto',
        fontSize: 14,
      },
      section: {
       // flex: 1,
        justifyContent: 'flex-end',
        marginTop: H * 0.04,
        marginBottom: H * 0.03
      },
      sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 25
      },
      sectionTitle: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 40,
        color: '#427AA2',     
        marginLeft: 18,
        marginBottom: H * 0.03
      },
      logo: {
        width: 50,
        height: 50,
        borderRadius: 60,
      },
      productName: {
        fontFamily: 'Roboto',
        fontSize: 14,
        marginRight: 16,
        fontWeight: '700',
        lineHeight: 30,
      },
      productCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        marginVertical: 5,
      },
      price: {
        fontFamily: 'Roboto',
        marginRight: 8,
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 40,
        color: "#38E54D"
      },
      quantity: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 40,
        marginRight: 18,
      },
      showcase: {
        backgroundColor: '#E3E6E9',
        height: H * 0.42,
        marginHorizontal: 16,
        borderRadius: 20
      },
      showcaseHeader: {
        marginTop: 12,
        marginLeft: W * 0.2
      },
})

const background = StyleSheet.create({
    bg: {
      flex: 1,
      backgroundColor: '#EBF2FA',
    },
  })

export {caisseScreen, background}