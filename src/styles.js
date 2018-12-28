import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  home: {
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
  logo_view: {
    marginTop: 50,
    justifyContent: "center",
    alignSelf: "center",
    padding: 10
  },
  logo_image: {
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 150
  },
  mode_view: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  color_change_text: { fontSize: 15, color: "#fff" },
  new_game_button_view: {
    height: 50,
    width: "80%",
    borderColor: "#fff",
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  new_game_button_text: { fontSize: 15, fontWeight: "300", color: "#fff" },
  bottom_button_view: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  bottom_item_view: {
    width: "80%",
    margin: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  info_modal_view: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#666"
  },
  info_modal_logo_view: {
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    padding: 10
  },
  info_modal_logo_image: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100
  },
  info_modal_title_view: { alignItems: "center", margin: 10, padding: 10 },
  info_modal_title_text: { fontSize: 20, color: "#fff" },
  info_modal_title_2nd_text: { fontSize: 15, color: "#fff" },
  info_modal_button_view: {
    height: 50,
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#fff"
  },
  info_modal_button_text: { fontSize: 15, color: "#fff" }
});
