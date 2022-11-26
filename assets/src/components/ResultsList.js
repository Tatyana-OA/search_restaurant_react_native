import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultItem from "./ResultItem";

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ResultItem result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 15,
    fontWeight: "bold",
  },
});

export default ResultsList;
