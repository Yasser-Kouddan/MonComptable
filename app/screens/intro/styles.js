import { StyleSheet, Dimensions } from "react-native"

const H = Dimensions.get('screen').height
const W = Dimensions.get('screen').width

const authScreen = StyleSheet.create({
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 40,
        color: '#427AA2',
        position: 'absolute',
        top: H * 0.34
      },
      logo: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: H * 0.1

      },
      textinput: {
        paddingHorizontal: 15,
        marginVertical: 15,
        borderWidth: 2,
        borderColor: '#427AA2',
        borderRadius: 15,
        width: 270,
        height: 50,
        color: '#427AA2',
        fontWeight: '500'
      },
      inputField: {
        position: 'absolute',
        top: H * 0.42
      },
      buttonTitle: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: '600',
        color: 'white',  
      },
      button: {
        backgroundColor: '#A4BD01',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25,
        marginVertical: 12,
        borderRadius: 50,
        width: 160,
        height: 40,
      },
      buttonField: {
        position: 'absolute',
        top: H * 0.66
      },
      separator: {
        fontWeight: '500',
        fontFamily: 'Roboto',
        fontSize: 14,
        alignSelf: 'center'
      }
})

const background = StyleSheet.create({
    bg: {
      flex: 1,
      backgroundColor: '#EBF2FA',
      justifyContent: 'center',
      alignItems: 'center'
    },
  })


const intro = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: H * 0.1
    },
    cloud: {
        position: 'absolute',
        width: W * 0.9,
        height: H * 0.35,
    },
    image: {
        width: W * 0.5,
        height: H * 0.19
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 42,
        textAlign: 'center',
        color: '#427AA2'
    }
})



export { authScreen, background, intro }