import { View, Text } from 'react-native'
import { styles } from './styles'

export default function AddContact({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Ajouter un produit</Text>
            </View>
        </View>
    );
}
