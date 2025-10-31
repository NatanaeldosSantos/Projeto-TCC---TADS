import { StyleSheet } from "react-native";



export default StyleSheet.create({

  container: {
  flex: 1,
  backgroundColor: '#fff',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  padding: 5,
  },

  container_add: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap:'wrap',
  },

  texto:{
    color: '#000000ff',
    fontSize: 25,
  },

  box:{
  backgroundColor: '#009246',
  width: '42%',
  height: 250,
  borderRadius: 20,
  justifyContent:'center',
  alignItems:'center',
  margin: '4%',
  },

  box_add:{
    backgroundColor:'#009246',
    width: '80%',
    height: 100,
    borderRadius: 20,
    overflow:'hidden',
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 10,
  },

  boxGradiente: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxGradiente_sair: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

    boxGradiente_login: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

    box_sair: {
    height: 50,
    width: 100,
    marginRight: 15,
  },

  box_login:{
    backgroundColor:'#009246',
    width: '40%',
    height: 80,
    borderRadius: 20,
    overflow:'hidden',
    margin: 10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical: 10,
  },

  boxTexto: {
    color: "#000000ff",
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlign:'center',
    flexWrap: 'wrap',
    paddingTop: 5,
  },

  celula:{
    backgroundColor: '#f38636ff',
    padding: '15',
    width: '80%',
    height: 80,
    alignItems: 'center',
    borderWidth:  1,
    margin: '10',
    color: '#fff',
    borderColor: '#000000ff',
    fontSize: 20,

  },

  celula_equips:{
    backgroundColor: '#c8c6c6ff',
    padding: '15',
    width: '350',
    height:'80' ,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth:  1,
    margin: '5',
    borderColor: '#000',
    flexDirection: 'row',
  },

  celula_interna:{
    flex: 2,
    flexDirection:'column',

  },

  texto_equips:{
    color: '#000',
  },

  calendar: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },

});

export const drawerStyles = {
  drawer: {
    backgroundColor: "#fff",
    width: '65%',
  },
  colors:{
    active:'#f38636ff',
    inactive:'#26aa65ff',
  }
};