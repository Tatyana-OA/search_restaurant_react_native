import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useYelpResults from "../hooks/useYelpResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useYelpResults();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? (
        <Text>Oops! An error occurred!</Text>
      ) : (
        <Text>We have found {results.length} results</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
