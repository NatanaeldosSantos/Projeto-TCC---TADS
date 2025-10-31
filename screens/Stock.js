import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, Button } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { StockService } from "../database/StockService";
import styles from "../styles";

export default function Stock() {
  const [dados, setDados] = useState([]);
  const [load, setLoad] = useState(true);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      carregar();
    }, [])
  );

  const carregar = async () => {
    try {
      const result = await StockService.findAll();
      setDados(result);
      setLoad(false);
    } catch (error) {
      alert("Erro ao carregar estoque");
      console.log(error);
    }
  };

const excluir = (equip) => {
  Alert.alert(
    "Confirmar exclusão",
    `Deseja remover o equipamento "${equip.nome}" do estoque?`,
    [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sim",
        onPress: async () => {
          try {
            await StockService.delete(equip.id);
            alert("Equipamento removido do estoque");
            carregar();
          } catch (error) {
            alert("Erro ao excluir equipamento");
            console.log(error);
          }
        },
      },
    ]
  );
};


  return (
    <View style={styles.container}>

      <FlatList
        data={dados}
        keyExtractor={(item) => String(item.id)}
        refreshing={load}
        onRefresh={carregar}
        renderItem={({ item }) => (
          <TouchableOpacity
            onLongPress={() => excluir(item)}
            style={styles.celula_equips}
          >
            <FontAwesome6
              name='dolly'
              iconStyle="solid"
              size={30}
              color="#f38636ff"
              style={{ marginRight: 15 }}
            />
            <View style={styles.celula_interna}>
              <Text style={styles.texto_equips}>Nome: {item.nome}</Text>
              <Text style={styles.texto_equips}>Código: {item.codigo}</Text>
              <Text style={styles.texto_equips}>Laboratório: {item.laboratorio}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
