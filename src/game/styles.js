import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  view: { flex: 1, backgroundColor: "#333" },
  color_change_view: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  color_change_chevron: { fontSize: 20, fontWeight: "500" },
  color_change_text: { fontSize: 15, color: "#fff" },
  time_elapsed_view: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 0
  },
  time_elapsed_text: { fontSize: 15, color: "#fff" },
  board_view: { justifyContent: "center", alignItems: "center" },
  board_button_view: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  button_view: {
    width: 45,
    height: 45,
    margin: 5,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#666",
    justifyContent: "center",
    alignItems: "center"
  },
  button_number: { fontSize: 25, color: "#fff", fontWeight: "500" },
  button_remaining_number: {
    fontSize: 10,
    color: "#fff",
    position: "absolute",
    bottom: 0
  },
  edit_button_view: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  edit_view: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    margin: 10
  },
  sdk_item_view: {
    width: 33,
    height: 33,
    margin: 2,
    borderWidth: 1,
    borderColor: "#666",
    justifyContent: "center",
    alignItems: "center"
  },
  white: { color: "#fff" }
});
