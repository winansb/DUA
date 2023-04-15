import React from "react";
import styled from "styled-components";
import ReturnButton from "./components/ReturnButton";
import ColorPicker from "./components/ColorPicker";
import KeyCodeGetter from "./components/KeyCodeGetter";
import chroma from "chroma-js";

class DeviceGUIPage extends React.Component {
  state = {
    chosenColor: "#9b4f96",
  };

  handleChangeComplete = (color) => {
    this.setState({ chosenColor: color.hex }, () => {
      document.body.style.backgroundColor = chroma(this.state.chosenColor)
        .brighten(2)
        .hex();
    });
  };

  componentDidMount() {
    this.originalBgColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = chroma(this.state.chosenColor)
      .brighten(2)
      .hex();
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = this.originalBgColor;
    document.body.style.overflow = "shown";
  }

  render() {
    return (
      <Container>
        <Title>Device Options</Title>
        <ButtonContainer>
          <ButtonItem>
            <p style={{ fontSize: "2rem" }}>Button 1:</p>
          </ButtonItem>
          <ButtonItem>
            <ColorPicker
              color={this.state.chosenColor}
              onChangeComplete={this.handleChangeComplete}
            />
          </ButtonItem>
          <ButtonItem>
            <KeyCodeGetter secondaryColor={this.state.chosenColor} />
          </ButtonItem>
          <ButtonItem>
            <FunctionButton chosenColor={this.state.chosenColor}>
              Send
            </FunctionButton>
          </ButtonItem>
        </ButtonContainer>
        <BarContainer>
          <Bar chosenColor={this.state.chosenColor} />
        </BarContainer>
        <ReturnButtonContainer>
          <ReturnButton />
        </ReturnButtonContainer>
      </Container>
    );
  }
}

export default DeviceGUIPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 43rem;
  padding: 2rem;
  position: relative;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  margin-top: 0rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 70%;
`;

const ButtonItem = styled.div`
  flex: 1;
  margin: 1rem;
  padding: 20px;
  font-size: 1.5rem;
`;

const FunctionButton = styled.button`
  background-color: ${({ chosenColor }) => chosenColor};
  color: #fff;
  padding: 25px 50px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-left: 0rem;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a180b3;
  }

  &:active {
    background-color: #7c5295;
  }
`;

const BarContainer = styled.div`
  width: 80%;
  height: 2rem;
  background-color: #e6e6e6;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const Bar = styled.div`
  height: 100%;
  background-color: ${({ chosenColor }) => chosenColor};
  border-radius: 10px;
  width: 33%;

  transition: background-color 0.3s ease;
`;

const ReturnButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
