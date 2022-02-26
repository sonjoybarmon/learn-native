import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FlatListDemo from "./src/screens/FlatListDemo";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListDemo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
  },
});
