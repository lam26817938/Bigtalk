import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { useNavigate } from 'react-router-dom';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () =>{

  const navigate = useNavigate();
  const gopeace = () => {
    Linking.openURL('https://sccapstone.github.io/peace_frontend/');
  };
  const goNaibot = () => {
    Linking.openURL('https://naibot-api.azurewebsites.net');
  };

    return (
      <LinearGradient
      colors={['#4F9D9D', '#FF69B4']}
      style={styles.background}>
        <View style={styles.container}>

          <View style={styles.Left}>
          <Text style={styles.title}>🌸Lian's Portfolio🌸</Text>

        <Button
          title={<Text style={styles.buttontext}>Gamma Version!</Text>}
          buttonStyle={styles.largeButton}
          onPress={() => {
            // Handle button press
            navigate(`/Gamma`)
          }}
        />
        <div style={styles.top}></div>
        </View>
        <View style={styles.middle}>
        <div style={styles.top}></div>
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
                My internship in Itri(Industrial Technology Research Institute). Modify chatGPT into a customer service with several features 
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
                A encoder convert data to C++ for IC design purpose made by Python.
              </Text>
              <Button
                title={<Text style={styles.buttontext}>Go to Details</Text>}
                type="outline"
                icon={{ name: 'arrow-right', type: 'font-awesome' }}
                buttonStyle={styles.button}
                onPress={() => navigate(`/Encoder`)}
              />
          </Card>
          </View>
          <View style={styles.Right}></View>
          <StatusBar style="auto" />
        </View>
        </LinearGradient>
      );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    height: 220,
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 10,
  },
  title: {
    position: 'absolute',
    top: 40,
    left: 400,
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
  largeButton: {
    borderRadius: 10,
    backgroundColor: '#FFC1E0',
    width: 300,
    height: 200,
    marginBottom: 20,
    padding: 10,
    border: '2px solid #FF69B4', // 添加外框
  },
  Left:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Right:{
    flex: 1,
  },
});

export default Home