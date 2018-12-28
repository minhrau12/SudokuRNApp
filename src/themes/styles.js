import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  scrollview: { flex: 1, backgroundColor: "#333" },
  color_change_view: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  color_change_chevron: { fontSize: 20, fontWeight: "500" },
  title_view: {
    margin: 20,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  title_text: { fontSize: 20, color: "#fff", fontWeight: "300" },
  title_2nd_text: { fontSize: 15, color: "#fff", textAlign: "center" },
  history_item_view: { alignItems: "center", margin: 5, padding: 5 },
  history_item_text: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    paddingBottom: 5
  },
  history_button_view: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  white: { color: "#fff" }
});
