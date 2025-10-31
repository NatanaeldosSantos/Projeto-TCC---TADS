import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { Equipamento } from "../model/Equipamento";
import { EquipamentoService } from "../database/EquipamentoService";
import { StockService } from "../database/StockService";
import styles from "../styles";

export default function Equips() {
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
      const result = await EquipamentoService.findAll();
      setDados(result);
      setLoad(false);
    } catch (error) {
      alert("Erro ao carregar dados");
      console.log(error);
    }
  };

  const editar = (item) => {
    Alert.alert(
      "Confirmação",
      "Deseja realmente editar este equipamento?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => navigation.navigate("Adicionar Equipamento", { equipamento: item }),
        },
      ]
    );
  };

  const enviarParaEstoque = (equipamento) => {
    Alert.alert(
      "Confirmação",
      "Deseja enviar este equipamento para o estoque?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            try {
              await EquipamentoService.delete(equipamento);
              await StockService.addToStock(equipamento);
              alert("Equipamento enviado para o estoque");
              carregar();
            } catch (error) {
              alert("Erro ao enviar para o estoque");
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
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => editar(item)}
            onLongPress={() => enviarParaEstoque(item)}
            style={styles.celula_equips}
          >
            <FontAwesome6
              name='flask-vial'
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
        onRefresh={() => carregar()}
        refreshing={load}
      />
    </View>
  );
}
