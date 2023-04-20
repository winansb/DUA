import React from "react";
import styled from "styled-components";
import ReturnButton from "./components/ReturnButton";
import ColorPicker from "./components/ColorPicker";
import KeyCodeGetter from "./components/KeyCodeGetter";
import chroma from "chroma-js";

class DeviceGUIPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenColor: "#9b4f96",
      ws: null, // initialize WebSocket connection to null
      voltage: 0, // initialize voltage to zero
    };
  }

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
    // create WebSocket connection when the component mounts
    const ws = new WebSocket("ws://localhost:8000"); // replace with your server's URL
    ws.onopen = () => {
      console.log("WebSocket connection opened");
      this.setState({ ws: ws }); // save the WebSocket connection in state
    };
    // handle messages received from the server
    ws.onmessage = (event) => {
      console.log(`Received message: ${event.data}`);
      if (event.data instanceof Blob) {
        event.data.text().then((text) => {
          console.log(`Received message (as text): ${text}`);
          const message = text;
          const voltageRegex = /voltage:\s*([\d\.]+)\s*V/i; // matches the voltage value and captures it as a group
          const match = message.match(voltageRegex); // search for the voltage value in the message

          if (match) {
            let voltage = this.props.voltage;
            voltage = parseFloat(match[1]); // convert the matched voltage value to a float number
            console.log(`Received voltage: ${voltage}`);
            voltage = Math.round((voltage / 3.3) * 100);
            this.setState({ voltage: voltage }); // update the voltage in state
          }
        });
      } else {
        console.log(`Received message (as text): ${event.data}`);
        const message = event.data;

        const voltageRegex = /voltage:\s*([\d\.]+)\s*V/i; // matches the voltage value and captures it as a group
        const match = message.match(voltageRegex); // search for the voltage value in the message

        if (match) {
          let voltage = this.props.voltage;
          voltage = parseFloat(match[1]); // convert the matched voltage value to a float number
          console.log(`Received voltage: ${voltage}`);
          voltage = Math.round((voltage / 3.3) * 100);
          this.setState({ voltage: voltage }); // update the voltage in state
        }
      }
    };
    ws.onclose = () => {
      console.log("WebSocket connection closed");
      this.setState({ ws: null }); // set the WebSocket connection back to null
    };
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = this.originalBgColor;
    document.body.style.overflow = "shown";
    // close WebSocket connection when the component unmounts
    if (this.state.ws !== null) {
      this.state.ws.close();
    }
  }

  handleSendClick = () => {
    // send data to the server through WebSocket connection
    if (this.state.ws !== null) {
      this.state.ws.send("Hello server");
    }
  };

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
          <Bar
            chosenColor={this.state.chosenColor}
            voltage={this.state.voltage}
          />
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
  width: ${({ voltage }) => voltage};

  transition: background-color 0.3s ease;
`;

const ReturnButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
