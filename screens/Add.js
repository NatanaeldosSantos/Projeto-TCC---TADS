import { Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Equipamento } from '../model/Equipamento';
import { EquipamentoService } from '../database/EquipamentoService';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import styles from '../styles';

export default function Add() {
  const [formEquipamento, setformEquipamento] = useState({});
  const route = useRoute();

  useEffect(() => {
    if (route.params && route.params.equipamento) {
      setformEquipamento(route.params.equipamento);
    }
  }, [route.params]);

  const salvar = async () => {
    if (formEquipamento.id) {
      const upEquipamento = new Equipamento(formEquipamento);
      await EquipamentoService.update(upEquipamento);
      alert('Equipamento Atualizado');
    } else {
      const novoEquipamento = new Equipamento(formEquipamento);
      await EquipamentoService.create(novoEquipamento);
      alert('Equipamento Cadastrado');
    }
    limpar();
  };

  const limpar = () => {
    setformEquipamento({});
  };

  return (
    <KeyboardAvoidingView style={styles.container_add}>
      <Text style={styles.texto}>Cadastrar Equipamento</Text>

      <TextInput
        placeholder="Nome do Equipamento"
        style={styles.celula}
        onChangeText={valor =>
          setformEquipamento({ ...formEquipamento, nome: valor })
        }
        value={formEquipamento.nome}
      />
      <TextInput
        placeholder="Patrimônio(Código)"
        style={styles.celula}
        onChangeText={valor =>
          setformEquipamento({ ...formEquipamento, codigo: valor })
        }
        value={formEquipamento.codigo}
      />
      <TextInput
        placeholder="Laboratório"
        style={styles.celula}
        onChangeText={valor =>
          setformEquipamento({ ...formEquipamento, laboratorio: valor })
        }
        value={formEquipamento.laboratorio}
      />

      <TouchableOpacity
        onPress={salvar}
        style={styles.box_add}
        activeOpacity={0.7}
      >
        <LinearGradient
          colors={['#009246', '#00FF7Aff']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.boxGradiente}
        >
          <FontAwesome6
            name='floppy-disk'
            size={30}
            color="#000000"
          />
          <Text style={styles.boxTexto}>Salvar</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={limpar}
        style={styles.box_add}
        activeOpacity={0.7}
      >
        <LinearGradient
          colors={['#009246', '#00FF7Aff']}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.boxGradiente}
        >
          <FontAwesome6
            name='eraser'
            iconStyle='solid'
            size={30}
            color="#000000"
          />
          <Text style={styles.boxTexto}>Limpar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
