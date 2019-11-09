import React, { Component } from "react";
import HomePresenter from "./HomePresenter";
import { LIGTH_GREEN } from "../../constants/Color";
import NavButton from "../../components/NavButton";
import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

const Image = styled.Image`
  height: ${RFValue(58)};
  width: ${RFValue(58)};
`;

class HomeContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <Image
        source={require("../../assets/images/logo.png")}
        resizeMode={"contain"}
      />
    ),
    headerRight: (
      <NavButton
        iconName={"ios-search"}
        color={LIGTH_GREEN}
        onPress={() => navigation.navigate("Search")}
      />
    )
  });
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return <HomePresenter navigate={navigate} />;
  }
}

export default HomeContainer;
