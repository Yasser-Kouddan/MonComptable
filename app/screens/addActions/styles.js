import { StyleSheet, Dimensions} from 'react-native'

const H = Dimensions.get("screen").height
const W = Dimensions.get("screen").width

const menuStyles = StyleSheet.create({
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

  const mainStyles = StyleSheet.create({
      container: {
        backgroundColor: '#EBF2FA',
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
      },
      card: {
        backgroundColor: 'white',
        paddingTop: H * 0.03,
        paddingLeft: W * 0.06,
        width: W * 0.9,
        height: H * 0.65,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      },
      entryView: {
        marginLeft: W * 0.05,
        height: H * 0.55,
      },
      title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 30,
        //color: '#427AA2',
        marginBottom: H * 0.01
      },
      addButton: {
        width: 80,
        height: 40,
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: "#A4BD01",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: W * 0.25
      },
      titleButton: {
        color: 'white',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: '700'
      },
      textInput: {
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 20,
        paddingVertical: 7,
        marginVertical: 12,
        width: W * 0.7,
      }
    });

export { mainStyles, menuStyles}