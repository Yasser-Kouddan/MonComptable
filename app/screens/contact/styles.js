import { StyleSheet, Dimensions } from "react-native"

const H = Dimensions.get('screen').height
const W = Dimensions.get('screen').width

const contactScreen = StyleSheet.create({
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
    contactCarousel: {
        width: W ,
        height: H * 0.6,
        marginTop: H * 0.01,
        paddingVertical : H *0.02
    }
})

const background = StyleSheet.create({
    bg: {
      flex: 1,
      backgroundColor: '#EBF2FA',
    },
  })

const searchBar = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    searchInput:{
        width: W * 0.7,
        height: 40,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#808080",
        backgroundColor: '#E3E3E3',
        paddingHorizontal: 25
    },
})


const contactCard = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: W * 0.08,
        marginVertical: H * 0.012,
        justifyContent: "space-between"
    },
    nameContainer: {
        flexDirection: "row"
    },
    iconContainer: {
        backgroundColor: '#D9D9D9',
        width: 45,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: W * 0.05
    },
    iconText: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 22,
    },
    titleContainer: {
        flexDirection: 'column',
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: '700',
    },
    subtitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '500',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'flex-end'
    },
    callButton: {
        backgroundColor: '#A4BD01',
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: W * 0.03
    },
    infoButton: {
        backgroundColor: '#DADADA',
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

})




export { contactScreen, background, searchBar, contactCard }