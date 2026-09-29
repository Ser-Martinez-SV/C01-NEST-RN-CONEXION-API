import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://172.22.26.192:3000';

export default function App() {
  const cargarMensaje = async () => {
    const respuesta = await fetch(
      API_URL + '/mensaje'
    );

    const datos = await respuesta.json();
    console.log(datos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Mi primera conexión</Text>

      <Button
        title="Conectar con Nest"
        onPress={cargarMensaje}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
