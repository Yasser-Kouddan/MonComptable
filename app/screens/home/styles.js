import { StyleSheet, Dimensions } from "react-native";

const H = Dimensions.get("screen").height
const W = Dimensions.get("screen").width

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
        width: 54,
        height: 54,
        borderRadius: 50
    },
    productName: {
      fontFamily: 'Roboto',
      fontSize: 18,
      marginRight: W * 0.02,
      fontWeight: '700',
      lineHeight: 40,
    },
    productCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      paddingHorizontal: W * 0.03,
      marginVertical: H * 0.0005,
      marginHorizontal: W * 0.02
    },
    shortage: {
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 35,
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
      height: H * 0.2,
      marginHorizontal: H * 0.04,
      borderRadius: 20
    },
    section: {
      flex: 1,
      justifyContent: 'flex-end',
      marginTop: H * 0.02,
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

const profilStyles = StyleSheet.create({
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
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  avatar_cadre: {
    width: 105,
    height: 105,
    borderRadius: 200,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: H * 0.04,
  },
  signout: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: H * 0.02,
    marginRight: W * 0.05,
    backgroundColor: '#EBF2FA',
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  avatar_bg: {
    backgroundColor: '#427AA2',
    width: W * 0.85,
    height: H * 0.11,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    position: 'absolute',
    top: 0
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 24,
    position: 'absolute',
    top: H * 0.18,
  },
  infoCard: {
    width: W * 0.75,
    height: H * 0.6,
    position: 'absolute',
    top: H * 0.18,
    paddingLeft: W * 0.04,
    marginVertical: H * 0.03,
  },
  infoCardTitle: {
    fontSize: 21, 
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginTop: H * 0.03,
    marginBottom: H * 0.001
  }, 
  infoCardSubtitle: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '600',
    marginLeft: W * 0.06,
    marginTop: H * 0.005,
  },
  premiumButton: {
    width: W * 0.5,
    height: H * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginVertical: H * 0.05,
    marginLeft: W * 0.1,
    // Shadow and elevation
    shadowColor: "#00000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
  premiumTitle: {
    fontFamily: "Roboto",
    fontWeight: "600",
    color: "white",
    fontSize: 20
  },
});


export { background, homeScreen, profilStyles }