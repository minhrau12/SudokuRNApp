import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
  scrollview: { flex: 1, backgroundColor: "#333" },
  wholeview: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  chevron_style: { fontSize: 20, fontWeight: "500" },
  color_change_style: { fontSize: 15, color: "#fff" },
  title_view: {
    marginTop: 20,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  title_text: { fontSize: 20, color: "#fff", fontWeight: "300" },
  opt_view: { alignItems: "center", margin: 5, padding: 5 },
  opt_text: {
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
    paddingBottom: 5
  },
  opt_button_view: { width: 70, height: 70, borderWidth: 1, borderRadius: 100, justifyContent: "center", alignItems: "center" },
  opt_button_view_on: { width: 70, height: 70, borderWidth: 1, borderRadius: 100, justifyContent: "center", alignItems: "center",backgroundColor:"#f50"},
  white: { color: "#fff" },
  black: { color: "#333" },

});
