import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/style";
import { getFormattedDate } from "../../util/date";

export default function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: "row",
    marginVertical: 8,
    padding: 12,
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
