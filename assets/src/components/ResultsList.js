import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultItem from "./ResultItem";

const ResultsList = ({ title, results, navigation }) => {
  return (
    results.length > 0 && (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal
          data={results}
          keyExtractor={(result) => result.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultItem result={item} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    )
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

// HOC allowing access to "navigation" prop without having to prop drill
export default withNavigation(ResultsList);
