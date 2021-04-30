import { Formik } from "formik";
import React, { useEffect, useRef } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Button,
} from "react-native";
import AppForm from "./AppForm";
import AppFormField from "./AppFormField";
import SubmitButton from "./SubmitButton";

export default function App() {
  const inputs = {};

  const focusNextField = (id) => {
    inputs[id].focus();
  };
  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <AppForm
            initialValues={{ one: "" }}
            onSubmit={(values) => console.log(values)}
          >
            <View style={styles.outerContainer}>
              <View>
                <AppFormField placeholder="hello" name="test"></AppFormField>
              </View>
              <View>
                <AppFormField
                  name="one"
                  placeholder="one"
                  style={styles.textInput}
                  onSubmitEditing={() => {
                    focusNextField("two");
                  }}
                  returnKeyType="next"
                  ref={(input) => {
                    inputs["one"] = input;
                  }}
                />
              </View>
              <View>
                <AppFormField
                  name="two"
                  placeholder="two"
                  style={styles.textInput}
                  onSubmitEditing={() => {
                    focusNextField("three");
                  }}
                  returnKeyType={"next"}
                  ref={(input) => {
                    inputs["two"] = input;
                  }}
                />
              </View>
              <View>
                <AppFormField
                  name="three"
                  placeholder="three"
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    focusNextField("four");
                  }}
                  returnKeyType={"next"}
                  style={styles.textInput}
                  ref={(input) => {
                    inputs["three"] = input;
                  }}
                />
              </View>
              <View>
                <AppFormField
                  name="four"
                  placeholder="four"
                  blurOnSubmit={true}
                  onSubmitEditing={() => {
                    focusNextField("five");
                  }}
                  returnKeyType={"next"}
                  style={styles.textInput}
                  ref={(input) => {
                    inputs["four"] = input;
                  }}
                />
              </View>
              <View>
                <AppFormField
                  name="five"
                  placeholder="five"
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    focusNextField("six");
                  }}
                  returnKeyType={"next"}
                  style={styles.textInput}
                  ref={(input) => {
                    inputs["five"] = input;
                  }}
                />
              </View>
              <View>
                <AppFormField
                  name="six"
                  placeholder="six"
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    focusNextField("seven");
                  }}
                  returnKeyType={"next"}
                  style={styles.textInput}
                  ref={(input) => {
                    inputs["six"] = input;
                  }}
                />
              </View>
              <View>
                <AppFormField
                  name="seven"
                  placeholder="seven"
                  blurOnSubmit={false}
                  onSubmitEditing={() => {
                    focusNextField("eight");
                  }}
                  returnKeyType={"next"}
                  style={styles.textInput}
                  ref={(input) => {
                    inputs["seven"] = input;
                  }}
                />
              </View>
              <View>
                <AppFormField
                  name="eight"
                  placeholder="eight"
                  blurOnSubmit={true}
                  returnKeyType={"done"}
                  style={styles.textInput}
                  ref={(input) => {
                    inputs["eight"] = input;
                  }}
                />
              </View>
            </View>
            <SubmitButton title="Submit" />
          </AppForm>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    //justifyContent:'center',
    paddingTop: 220,
    alignItems: "center",
    flexDirection: "column",
  },
  textInput: {
    alignSelf: "stretch",
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
