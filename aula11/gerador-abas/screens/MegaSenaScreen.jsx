import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';

const MegaSenaScreen = () => {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const jogo = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 60) + 1
    ).sort((a, b) => a - b);
    setJogosMegaSena([...jogosMegaSena, jogo]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo da Mega Sena
      </Button>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginVertical: 8 }}>
            <Card.Content>
              <Text>Jogo: {item.join(', ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default MegaSenaScreen;
