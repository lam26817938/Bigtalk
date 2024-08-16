import { StyleSheet, Text, View, TextInput, Linking, Head } from 'react-native';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-native-elements';
import Iframe from 'react-iframe';


const Gamma = () =>{

    return(
        <View style={styles.container}>
        <Iframe
        url="https://gamma.app/embed/cvpw21igxp8gw9s"
        width="100%"
        height="100%"
        allowFullScreen
        title="Lian's Portfolio"
      />
      </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden', // 禁用垂直滚动
    },
  });

export default Gamma
