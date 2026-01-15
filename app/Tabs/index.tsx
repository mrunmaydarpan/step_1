import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.row}>
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
      <View style={styles.row}>
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
      <View style={styles.row}>
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#0a84ff",
    borderRadius: 8,
  },
});