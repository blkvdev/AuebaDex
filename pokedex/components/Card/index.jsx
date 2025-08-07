import { View, Text, TouchableOpacity } from 'react-native';
import { POKEMON_TYPE_COLORS } from '../../utils/colors';
import { styles } from './styles';

export default function Card({ pokemon }) {
  return (
    <TouchableOpacity
    style={[styles.container,
        { backgroundColor: `${POKEMON_TYPE_COLORS[pokemon.Tipo[0].Nome]}`},
    ]}>
        <View style={styles.info}>
            <Text style={styles.numero}>#{pokemon.Numero}</Text>
        </View>
    </TouchableOpacity>
  )
}