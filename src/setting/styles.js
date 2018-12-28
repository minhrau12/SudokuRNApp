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
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  title_text: { fontSize: 20, color: "#fff", fontWeight: "300" },
  center: { alignItems: "center" },
  setting_button_view: {
    width: "70%",
    height: 50,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#fff"
  },
  setting_button_text: { paddingLeft: 20, fontSize: 15, color: "#fff" }
});
