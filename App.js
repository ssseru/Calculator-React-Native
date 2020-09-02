import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function App() {
  const [resultText, setResultText] = useState("");
  const [calculationText, setCalculationText] = useState("");

  const validate = () => {
    const text = resultText;
    switch (text.slice(-1)) {
      case "+":
      case "-":
      case "*":
      case "/":
        return false;
    }
    return true;
  };

  const calculateResult = () => {
    const text = resultText;
    setCalculationText(eval(text));
  };

  const buttonPressed = (text) => {
    if (text === "=") {
      return validate() && calculateResult();
    }

    setResultText((prevText) => prevText + text);
  };

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
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [".", 0, "="],
  ];
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          key={nums[i][j]}
          onPress={() => buttonPressed(nums[i][j])}
          style={styles.btn}
        >
          <Text style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>
      );
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>
    );
  }

  const longPress = (op) => {
    switch (op) {
      case "Del":
        setCalculationText("");
        setResultText("");
    }
  };

  let operations = ["Del", "+", "-", "*", "/"];
  let ops = [];
  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        key={ops[i]}
        style={styles.btn}
        onLongPress={() => longPress(operations[i])}
        onPress={() => operate(operations[i])}
      >
        <Text style={[styles.btnText, styles.white]}>{operations[i]}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>rn-calculatorApp</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calculationText}</Text>
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
  heading: {
    backgroundColor: "#D8B0A8",
  },
  resultText: {
    fontSize: 35,
    color: "black",
  },
  calculationText: {
    fontSize: 23,
    color: "black",
  },

  result: {
    flex: 2,
    backgroundColor: "#D8B0A8",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  calculation: {
    flex: 1,
    backgroundColor: "#D8B0A8",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttons: {
    flex: 7,
    flexDirection: "row",
  },
  btnText: {
    fontSize: 30,
    color: "white",
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
    backgroundColor: "#434343",
  },
  operations: {
    flex: 1,
    backgroundColor: "#636363",
  },
  white: {
    color: "white",
  },
});
