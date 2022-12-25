import { StyleSheet, Dimensions } from "react-native"

const H = Dimensions.get('screen').height
const W = Dimensions.get('screen').width

const stockScreen = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 40,
        color: '#427AA2',
        marginLeft: 25,
        marginTop: H * 0.03,
        marginBottom: H * 0.02
      },
      vertical: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: 4
      },
      cardCategorie: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#E3E6E9',
        width: 200,
        height: 90,
        borderRadius: 15,
        paddingHorizontal: 6,
        marginRight: 17
      },
      cardIcon: {
        width: 60,
        height: 60, 
        marginHorizontal: 8,
        borderRadius: 100
      },
      labelCategorie: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 14,
        flexShrink: 1,
      },
      section: {
        marginVertical: H * 0.015
      },
      sectionTitle: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 40,
        color: '#427AA2',     
        marginLeft: 18,
        marginBottom: H * 0.01
      },
      showcase: {
        backgroundColor: '#E3E6E9',
        height: H * 0.4,
        marginHorizontal: H * 0.035,
        borderRadius: 20
      },
})

const ruptureStock = StyleSheet.create({
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
})

const background = StyleSheet.create({
    bg: {
      flex: 1,
      backgroundColor: '#EBF2FA',
    },
  })

export {stockScreen, background, ruptureStock}