import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-native-elements';

const Itri = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const handlerepo = () => {
    Linking.openURL('https://github.com/lam26817938/Itri-line_gpt');
  };

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <Button onPress={handleBack} icon={{ name: 'arrow-left', type: 'font-awesome' }}>
          &lt; Back
        </Button>
      </View>
      <Text style={{ marginBottom: 10, fontSize: 40 }}>
        Line official friend QRcode
      </Text>
      <Image source={require('../source/Itri.png')} style={styles.image} />
      <Text style={{ marginBottom: 10, fontSize: 40, color:'blue' }} onPress={handlerepo}>
        Link to repo
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F9D9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default Itri;