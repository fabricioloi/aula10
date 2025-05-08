import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const time = {
  nome: "Flamengo",
  escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  fundacao: "15 de novembro de 1895",
  estadio: "Maracanã",
  mascote: "Urubu",
  cores: ["Vermelho", "Preto"]
};

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>{time.nome}</Title>
          <Paragraph>Fundado em: {time.fundacao}</Paragraph>
          <Paragraph>Estádio: {time.estadio}</Paragraph>
          <Paragraph>Mascote: {time.mascote}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: time.escudo }} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
