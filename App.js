import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  const [resultText, setResultText] = useState("");

  const buttonPressed = (text) => {
    console.log(text);

    const calculateResult = () => {
      const text = resultText;
    };

    if (text === "=") {
      return calculateResult();
    }

    setResultText((prevText) => prevText + text);
  };
  ///
  const operate = (operation) => {
    switch (operation) {
      case "Del":
        const text = resultText.split("");
        text.pop();
        setResultText(text.join(""));
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        const lastChar = resultText.split("").pop();
        if (operations.indexOf(lastChar) > 0) return;
        if (text == "") return;
        else setResultText((prevText) => prevText + operation);
    }
  };

  let rows = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [".", 0, "="],
  ];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          onPress={() => buttonPressed(nums[i][j])}
          style={styles.btn}
        >
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    rows.push(<View style={styles.row}>{row}</View>);
  }

  let operations = ["Del", "+", "-", "*", "/"];
  let ops = [];
  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        style={styles.btn}
        onPress={() => operate(operations[i])}
      >
        <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>121</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>{rows}</View>
        <View style={styles.operations}>{ops}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText: {
    fontSize: 35,
    color: "white",
  },
  calculationText: {
    fontSize: 23,
    color: "white",
  },

  result: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  calculation: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  btnText: {
    fontSize: 30,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  numbers: {
    flex: 3,
    backgroundColor: "lightblue",
  },
  operations: {
    flex: 1,
    backgroundColor: "black",
  },
  white: {
    color: "white",
  },
});
