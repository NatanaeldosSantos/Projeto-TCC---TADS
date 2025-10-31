import { StyleSheet, Text, View, Button, focused, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../styles';
import  {FontAwesome6}  from '@react-native-vector-icons/fontawesome6';



export default function Home(){

    const navigation= useNavigation();

    return(

        <View style={styles.container}>

            <TouchableOpacity
            onPress={()=> navigation.navigate('Adicionar Equipamento')}
            style={styles.box}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']} 
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente}
            >
            <FontAwesome6 
            name='plus'
            size={30}
            iconStyle='solid'
            color={focused ? '#f38636ff' : '#000000ff'}
            />
                <Text style={styles.boxTexto}>Adicionar Equipamento</Text>
            </LinearGradient>
            </TouchableOpacity>


            
            <TouchableOpacity
            onPress={()=> navigation.navigate('Lista de Equipamentos')}
            style={styles.box}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']} 
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente}
            >
            <FontAwesome6 
            name='list-ul'
            size={30}
            iconStyle='solid'
            color={focused ? '#f38636ff' : '#000000ff'}
            />
                <Text style={styles.boxTexto}>Lista de Equipamentos</Text>
            </LinearGradient>
            </TouchableOpacity>

            

            <TouchableOpacity
            onPress={()=> navigation.navigate('Agendamentos')}
            style={styles.box}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']} 
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente}
            >
            <FontAwesome6 
            name='calendar-days'
            size={30}
            iconStyle='solid'
            color={focused ? '#f38636ff' : '#000000ff'}
            />
                <Text style={styles.boxTexto}>Agendamentos</Text>
            </LinearGradient>
            </TouchableOpacity>



            <TouchableOpacity
            onPress={()=> navigation.navigate('Estoque')}
            style={styles.box}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']} 
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente}
            >
            <FontAwesome6 
            name='box-archive'
            size={30}
            iconStyle='solid'
            color={focused ? '#f38636ff' : '#000000ff'}
            />
                <Text style={styles.boxTexto}>Estoque</Text>
            </LinearGradient>
            </TouchableOpacity>



        </View>

    );
}