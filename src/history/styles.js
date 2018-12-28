import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: "#333"
  },
  color_change_view: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  color_change_chevron: { fontSize: 20, fontWeight: "500" },
  color_change_text: { fontSize: 15, color: "#fff" },
  title_view: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  title_text: { fontSize: 20, color: "#fff", fontWeight: "300" },
  mode_change_view: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  mode_view: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  mode_item_view: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  mode_item_text: { fontSize: 13, color: "#fff", paddingRight: 2 },
  mode_level_view: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#666",
    margin: 2
  }
});
