import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Icon } from "react-native-elements";
import { _ } from "lodash";
import styles from "./styles";
import Sudoku from "./models-logic";

export default class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsed_m: 0,
      elapsed_s: 0,
        sudoku: [
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,

            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,

            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0],
      test_sudoku: new Sudoku(),
    };
  }
  static navigationOptions = {
    title: "Game Screen",
    header: null
  };

  solve_sudoku = () => {
    this.setState({ sudoku: this.state.test_sudoku.solve(this.state.sudoku) });
    return true;
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.elapsed_s === 59) {
        this.setState({ elapsed_s: 0, elapsed_m: this.state.elapsed_m + 1 });
      } else {
        this.setState({ elapsed_s: this.state.elapsed_s + 1 });
      }
    }, 1000);
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={styles.sdk_item_view}>
        <Text style={styles.white}>{item}</Text>
      </View>
    );
  };
  keyExtractor = item => {
    return item.id;
  };
  render() {
    return (
      <View style={styles.view}>
        <View style={styles.color_change_view}>
          <Icon
            name="chevron-left"
            color="#f50"
            style={styles.color_change_chevron}
          />
          <Text style={styles.color_change_text}>Ambra</Text>
          <Icon
            name="chevron-right"
            color="#f50"
            style={styles.color_change_chevron}
          />
        </View>
        <View style={styles.time_elapsed_view}>
          <Text style={styles.time_elapsed_text}>
            {this.state.elapsed_m === 0 ? "" : this.state.elapsed_m + "m"}{" "}
            {this.state.elapsed_s}s
          </Text>
        </View>
        <View style={styles.board_view}>
          <FlatList
            renderItem={this.renderItem}
            data={this.state.sudoku}
            keyExtractor={this.keyExtractor}
            numColumns={9}
          />
        </View>
        <View style={styles.board_button_view}>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>1</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>2</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>3</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>4</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>5</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
        </View>
        <View style={styles.board_button_view}>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>6</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>7</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>8</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>9</Text>
            <Text style={styles.button_remaining_number}>9</Text>
          </View>
          <View style={styles.button_view}>
            <Text style={styles.button_number}>X</Text>
          </View>
        </View>
        <View style={styles.edit_button_view}>
          <View style={styles.edit_view}>
            <Icon name="undo" type="font-awesome" color="#fff" size={15} />
            <Icon name="check" type="font-awesome" color="#fff" size={15} />
            <Icon
              name="pencil"
              type="material-community"
              color="#fff"
              size={20}
            />
            <Icon
              name="redo"
              type="material-community"
              color="#fff"
              size={15}
            />
          </View>
        </View>
      </View>
    );
  }
}
