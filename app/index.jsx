import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The Numer 1</Text>
      <Text style={[styles.title, { fontSize: 16, color: "#000" }]}>
        Reading List App
      </Text>
      <View style={styles.btn}>
        <Text>Button</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 24,
    color: "purple",
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#eee",
    borderRadius: 8,
    boxShadow: "4px 4px rgba(0,0,0,0.2)",
  },
});
