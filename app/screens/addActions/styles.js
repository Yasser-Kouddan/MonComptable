import { StyleSheet, Dimensions} from 'react-native'

const H = Dimensions.get("screen").height
const W = Dimensions.get("screen").width

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EBF2FA',
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center'
    },
    card: {
      backgroundColor: 'white',
      padding: 25,
      width: W * 0.8,
      height: H * 0.65,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 7,
    },
    label: {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: 21,
      fontWeight: '700'
    },
    menuCard: {
        backgroundColor: '#A4BD01',
        justifyContent: 'center',
        alignItems: 'center',
        width: W * 0.75,
        height: H * 0.1,
        marginVertical: H * 0.05,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {	width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
      },
  });