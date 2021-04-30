import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "./config/styles";

function AppTextInput(
  {
    icon,
    width = "100%",
    name,
    placeholder,
    style,
    onSubmitEditing,
    returnKeyType,
    onChangeText,
    onBlur,
  },
  ref
) {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />
      <TextInput
        onChangeText={onChangeText}
        onBlur={onBlur}
        width={width}
        ref={ref}
        name={name}
        placeholder={placeholder}
        style={style}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        ref={ref}
      />
    </View>
  );
}

const forwaredInput = React.forwardRef(AppTextInput);

export default forwaredInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
  },
  textInput: {
    color: "grey",
    fontSize: 18,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
