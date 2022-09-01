import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
    color: "#212121",
    height: 40,
    borderBottomColor: "#4a306d",
  },
  textInput: {
    borderColor: "#212121",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        styles={styles.textInput}
        placeholder="Escribe una tarea"
        selectionColor="#4a306d"
      />
      <Button title="Add" onPress={() => console.warn("click")} />
    </View>
  );
}
