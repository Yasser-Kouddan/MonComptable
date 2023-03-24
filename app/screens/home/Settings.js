import { Text, View, StyleSheet, Dimensions} from 'react-native'

export default function Settings(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
              <Text>SICK</Text>
            </View>
        </View>
    )
}

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
      justifyContent: 'center',
      alignItems: 'center',
      width: W * 0.85,
      height: H * 0.65,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    label: {
      color: 'white',
      fontFamily: 'Roboto',
      fontSize: 21,
      fontWeight: '700'
    }
  });