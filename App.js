import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, DotGothic16_400Regular, Stick_400Regular } from '@expo-google-fonts/dev';



export default function App() {
  let [fontsLoaded] = useFonts({
    DotGothic16_400Regular,
    Stick_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titulo1}>Rede social de TCC</Text>
        <Text style={styles.titulo2}>Vovê tem um projeto itegrador</Text>
        <Text style={styles.titulo2}>Quer envolver novas areas</Text>
        <Text style={styles.titulo2}>Então vamos encontrar os alunos aqui!</Text>
        <FlatList
          data={pessoas}
          renderItem={({ item }) =>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.curso}>{item.curso}</Text>
              <Text style={styles.periodo}>{item.periodo}</Text>
              <Image style={styles.img} source={item.img} />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5bc8af',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 40,
    
  },
  nome: {
    marginTop: 20,
    marginVertical: 10,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Stick_400Regular',
  },
  curso: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center'

  },
  periodo: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: 'center'

  },
  titulo1: {
    marginTop: 40,
    marginVertical: 10,
    fontSize: 35,
    fontFamily: 'DotGothic16_400Regular',
  },
  titulo2: {
    marginVertical: 10,
    fontSize: 16,
  },
  pessoas: {
    textAlign: 'center'
  },
});

const pessoas = [
  {
    uid: 159,
    nome: 'Danilo Soares',
    curso: 'Tecnico de informatica',
    periodo: 'Manhã',
    turma: 'TI10m',
    gosto: 'Hardware, front-end, Redes',
    bio: 'Curto a vida bibibiobobobobobodagjn jhb ssssssalsal',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid: 420,
    nome: 'Bruno Galeazzo',
    curso: 'Tecnico de informatica',
    periodo: 'Manhã',
    turma: 'TI10m',
    gosto: 'Hardware, Redes',
    bio: 'mais novo membro da conferencia mundial de pods no banheiro ',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid: 69,
    nome: 'sasuke',
    curso: 'ninja',
    periodo: 'manhã',
    turma: 'ti12',
    gosto: 'sofrer',
    bio: 'matar um certo alguem é meu sonho',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid: 10,
    nome: 'Washington barreto',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'Ti10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid: 850,
    nome: 'Daniel Lacerda',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'TI10m',
    gosto: 'Php, Css, Design Gráfico, Games',
    bio: 'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid: 171,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid: 420,
    nome: 'Caio elias',
    curso: 'Tecnico de informatica',
    periodo: 'Manhã',
    turma: 'TI10m',
    gosto: 'Hardware,Banco de dados,C#',
    bio: 'garoto de programa junior',
    img: require('./assets/bruno.jpg'),
  },
  {
    uid: 159,
    nome: 'Adriano Silva',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'TI10',
    gosto: 'Programação',
    bios: 'Engajando na empresa da Microsolft',
    img: require('./assets/bruno.jpg'),
  },
];
