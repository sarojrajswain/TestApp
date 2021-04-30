import React from "react";
import { render } from "react-dom";
import { StyleSheet, View, TextInput, AppRegistry } from "react-native";

const App = () => {
  focusNextField = (id) => {
    this.inputs[id].focus();
  };

  return (
    <View style={styles.outerContainer}>
      <TextInput
        placeholder="one"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          this.focusNextField("two");
        }}
        returnKeyType={"next"}
        style={styles.textInput}
        ref={(input) => {
          this.inputs["one"] = input;
        }}
      />
      <TextInput
        placeholder="two"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          this.focusNextField("three");
        }}
        returnKeyType={"next"}
        style={styles.textInput}
        ref={(input) => {
          this.inputs["two"] = input;
        }}
      />
      <TextInput
        placeholder="three"
        blurOnSubmit={false}
        onSubmitEditing={() => {
          this.focusNextField("four");
        }}
        returnKeyType={"next"}
        style={styles.textInput}
        ref={(input) => {
          this.inputs["three"] = input;
        }}
      />
      <TextInput
        placeholder="four"
        blurOnSubmit={true}
        returnKeyType={"done"}
        style={styles.textInput}
        ref={(input) => {
          this.inputs["four"] = input;
        }}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 20,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginVertical: 10,
  },
});
