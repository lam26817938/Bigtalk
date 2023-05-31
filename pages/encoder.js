import { StyleSheet, Text, View, TextInput, Linking, Head } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-native-elements';


const Encoder = () =>{
    const navigate = useNavigate();
    return(
        <View style={styles.container}>
        <div  style={styles.back}>
        <Button onPress={() => navigate(-1)} icon={{ name: 'arrow-left', type: 'font-awesome' }}>
        &lt; Back
      </Button>
      </div>
      <Text style={{ marginBottom: 10, fontSize:40 }}>
                Confidential!
              </Text>
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
      back: {
        position: 'absolute',
        top: 50,
        left: 100,
      },
});

export default Encoder
