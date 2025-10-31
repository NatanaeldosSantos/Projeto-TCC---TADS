import { StyleSheet, Text, View, Button, TextInput, ImageBackground, TouchableOpacity, focused} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import  {FontAwesome6}  from '@react-native-vector-icons/fontawesome6';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';


export default function Login(){

    const navigation= useNavigation();

    return(

        <ImageBackground style={styles.container} source={require('../assets/log_wall.png')} resizeMode='stretch'>

            <TouchableOpacity
            onPress={()=>navigation.navigate('Página Inicial')}
            style={styles.box_login}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']} 
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente_login}
            >
            <FontAwesome6 
            name='arrow-right-to-bracket'
            size={30}
            iconStyle='solid'
            color={focused ? '#f38636ff' : '#000000ff'}
            />
                <Text style={styles.boxTexto}>Entrar</Text>
            </LinearGradient>
            </TouchableOpacity>
        </ImageBackground>

    );
}