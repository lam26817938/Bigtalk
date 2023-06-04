import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Linking, Head } from 'react-native';
import { Button } from 'react-native-elements';
import { Card } from 'react-native-elements';
import { useNavigate } from "react-router-dom";


const Home = () =>{

  const navigate = useNavigate();
  const gopeace = () => {
    Linking.openURL('https://sccapstone.github.io/peace_frontend/');
  };
  const goNaibot = () => {
    Linking.openURL('https://naibot-api.azurewebsites.net');
  };

    return (
        <View style={styles.container}>
          <div style={styles.top}></div>
          <Text style={styles.title}>🌸Lian's Portfolio🌸</Text>
          <Card containerStyle={styles.card}>
            <Card.Title>Personal Information</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                Many stuff related to me 
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={() => navigate(`/Info`)}
              />
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Title>MTK assingment</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                MediaTek frontend assignment
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={() => navigate(`/MTK`)}
              />
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Title>RA</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                USC Reserach Assistant - A web web crawler to get all products information from online retail for marketing purpose
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={() => navigate(`/RA`)}
              />
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Title>Peace</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                USC Capstone Project - a full stack website. Implemented autoencoder from deep learning
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={gopeace}
              />
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Title>Naibot</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                A stream chatbot - 一個擁有中文指令與金流功能的直播機器人
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={goNaibot}
              />
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Title>Itri-Line-GPT</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                My internship in Itri(Industrial Technology Research Institute). Modify chatGPT into a customer service with several feature 
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={() => navigate(`/Itri`)}
              />
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Title>Library</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                A Library system used by Zhongshan Elementary School
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={() => navigate(`/Library`)}
              />
          </Card>
          <Card containerStyle={styles.card}>
            <Card.Title>C++ Encoder</Card.Title>
            <Card.Divider />
              <Text style={{ marginBottom: 10 }}>
                A encoder convente data to C++ for IC design purpose made by Python.
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={() => navigate(`/Encoder`)}
              />
          </Card>
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F9D9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 220,
    backgroundColor: '#FFF',
    width: '60%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    position: 'absolute',
    top: 20,
    left: 100,
    margin: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF69B4',
    textShadowColor: '#FFF',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  button:{
    borderRadius: 10,
    backgroundColor: '#FFC1E0',
    padding: 10,
    marginTop: 20,
  },
  buttontext:{
    fontWeight: 'bold'
  },
  top:{
    height: 100,
  },
});

export default Home