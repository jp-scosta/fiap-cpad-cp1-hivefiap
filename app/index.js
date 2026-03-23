import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  const andares = [1, 2, 3, 4, 5, 6, 7];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha um andar</Text>

      {andares.map((andar) => (
        <Link key={andar} href={`/salas-default?andar=${andar}`} asChild>
          <TouchableOpacity style={styles.botaoAndar}>
            <Text style={styles.textoBotao}>Andar {andar}</Text>
          </TouchableOpacity>
        </Link>
      ))}

      <Link href="/lab-maker" asChild>
        <TouchableOpacity style={styles.botaoAndar}>
          <Text style={styles.textoBotao}>Lab Maker</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center" },
  titulo: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 30 },
  botaoAndar: { width: 200, padding: 15, marginVertical: 8, borderRadius: 10, backgroundColor: "#ED145B", alignItems: "center" },
  textoBotao: { fontSize: 16, fontWeight: "bold", color: "#000" },
});