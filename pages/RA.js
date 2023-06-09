import { StyleSheet, Text, View, TextInput, Linking, Head } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-native-elements';


const RA = () =>{
    const navigate = useNavigate();
    return(
        <View style={styles.container}>
        <div  style={styles.back}>
        <Button onPress={() => navigate(-1)} icon={{ name: 'arrow-left', type: 'font-awesome' }}>
        &lt; Back
      </Button>
      </div>
      <Text style={{ marginBottom: 10, fontSize:40 }}>
                Sorry I signed the Non-disclosure agreement!{"\n\n"}
                The tools I use:{"\n"}
                *Python    *Data Analysis  *Selenium  *Git  *Linux{"\n"}
                *Network  *Project organize  *Html  *Parallel{"\n"}
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

export default RA
