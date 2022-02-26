import { StatusBar } from "expo-status-bar";
import { FlatList, Text, StyleSheet } from "react-native";

const names = [
  {
    name: "John",
    id: "1",
  },
  {
    name: "Jane",
    id: "2",
  },
  {
    name: "Joe",
    id: "3",
  },
  {
    name: "Jack",
    id: "4",
  },
  {
    name: "Jill",
    id: "5",
  },
  {
    name: "John",
    id: "14",
  },
  {
    name: "Jane",
    id: "2452",
  },
  {
    name: "Joe",
    id: "342",
  },
  {
    name: "Jack",
    id: "445",
  },
  {
    name: "Jill",
    id: "54545",
  },
];

export default function FlatListDemo() {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.listStyle}
      keyExtractor={(item) => item.id}
      data={names}
      renderItem={(el) => <Text style={styles.textStyle}>{el.item.name}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    // padding: 30,
    width: 300,
    height: 50,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});
