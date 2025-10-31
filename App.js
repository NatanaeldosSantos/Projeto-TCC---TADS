import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, focused, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

import { Database } from './database/Database';
import Login from './screens/Login';
import Home from './screens/Home';
import Equips from './screens/Equips';
import Add from './screens/Add';
import Dates from './screens/Dates';
import Stock from './screens/Stock';

import  {FontAwesome6}  from '@react-native-vector-icons/fontawesome6';
import styles from './styles';
import { drawerStyles } from './styles';

const Drawer= createDrawerNavigator();

export default function App() {

  useEffect(() => {
    Database.initDb().then(
      ()=> console.log("Banco Inicilializado!")
    ) 
    
    //Database.ReinitDb().then(()=> console.log("Banco Reinicialiado!"))
  })

  return (


    <NavigationContainer>

      <Drawer.Navigator
        screenOptions={{
          drawerStyle: drawerStyles.drawer,
          drawerActiveTintColor: drawerStyles.colors.active,
          drawerInactiveTintColor: drawerStyles.colors.inactive,
        }}
      >
        <Drawer.Screen name='Login' component={Login}
        options={{
          drawerItemStyle:{display:'none'},
          headerShown: false
        }}
        />

        <Drawer.Screen name="Página Inicial" component={Home}
        options={({navigation})=>({
          drawerIcon:({focused})=>
            <FontAwesome6 
              name='house'
              size={20}
              iconStyle='solid'
              color={focused ? '#f38636ff' : '#26aa65ff'}
            />,
          headerTintColor:'#fff',
          headerStyle:{backgroundColor:'#f38636ff'},
          headerRight: () => (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Login')}
            style={styles.box_sair}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente_sair}
            >
                <Text style={styles.boxTexto}>Sair</Text>
            </LinearGradient>
            </TouchableOpacity>
          ),
        })}
        />

        <Drawer.Screen name="Adicionar Equipamento" component={Add}
        options={({navigation})=>({
          drawerIcon:({focused})=>
            <FontAwesome6 
              name='plus'
              size={20}
              iconStyle='solid'
              color={focused ? '#f38636ff' : '#26aa65ff'}
            />,
          headerTintColor:'#fff',
          headerStyle:{backgroundColor:'#f38636ff'},
          headerRight: () => (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Login')}
            style={styles.box_sair}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente_sair}
            >
                <Text style={styles.boxTexto}>Sair</Text>
            </LinearGradient>
            </TouchableOpacity>
          ),
        })}
        />
        
        <Drawer.Screen name="Lista de Equipamentos" component={Equips}
        options={({navigation})=>({
          drawerIcon:({focused})=>
            <FontAwesome6 
              name='list-ul'
              size={20}
              iconStyle='solid'
              color={focused ? '#f38636ff' : '#26aa65ff'}
            />,
          headerTintColor:'#fff',
          headerStyle:{backgroundColor:'#f38636ff'},
          headerRight: () => (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Login')}
            style={styles.box_sair}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']} 
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente_sair}
            >
                <Text style={styles.boxTexto}>Sair</Text>
            </LinearGradient>
            </TouchableOpacity>
          ),
        })}
        />

        <Drawer.Screen name="Agendamentos" component={Dates}
        options={({navigation})=>({
          drawerIcon:({focused})=>
            <FontAwesome6 
              name='calendar-days'
              size={20}
              iconStyle='solid'
              color={focused ? '#f38636ff' : '#26aa65ff'}
            />,
          headerTintColor:'#fff',
          headerStyle:{backgroundColor:'#f38636ff'},
          headerRight: () => (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Login')}
            style={styles.box_sair}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente_sair}
            >
                <Text style={styles.boxTexto}>Sair</Text>
            </LinearGradient>
            </TouchableOpacity>
          ),
        })}
        />

        <Drawer.Screen name="Estoque" component={Stock}
        options={({navigation})=>({
          drawerIcon:({focused})=>
            <FontAwesome6 
              name='box-archive'
              size={20}
              iconStyle='solid'
              color={focused ? '#f38636ff' : '#26aa65ff'}
            />,
          headerTintColor:'#fff',
          headerStyle:{backgroundColor:'#f38636ff'},
          headerRight: () => (
            <TouchableOpacity
            onPress={()=> navigation.navigate('Login')}
            style={styles.box_sair}
            activeOpacity={0.7}
            
            >
            <LinearGradient
                colors={['#009246', '#00FF7Aff']} 
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.boxGradiente_sair}
            >
                <Text style={styles.boxTexto}>Sair</Text>
            </LinearGradient>
            </TouchableOpacity>
          ),
        })}
        />

      </Drawer.Navigator>

    </NavigationContainer>

  );
}
