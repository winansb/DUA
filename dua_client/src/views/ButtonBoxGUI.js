import React from 'react';
import styled from 'styled-components';
import ReturnButton from './components/ReturnButton';
import ColorPicker from "./components/ColorPicker"

class DeviceGUIPage extends React.Component {

    state = {
        background: '#9b4f96',
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex }); 
    };

    render() {
        return (
            <Container>
              <Title>Device Options</Title>
              <SubTitle>Button 1</SubTitle>
              <ButtonContainer>
                <ColorPicker color={this.state.background} onChangeComplete={this.handleChangeComplete} />
                <DropDown />
                <FunctionButton>Save</FunctionButton>
              </ButtonContainer>
              <BarContainer>
                <Bar />
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
  background-color: #f7f3fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 3rem;
  width: 80%;
`;

const FunctionButton = styled.button`
  background-color: #7c5295;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-left: 1rem;

  &:hover {
    background-color: #a180b3;
  }
`;

const DropDown = styled.select`
  width: 100%;
  height: 3.5rem;
  font-size: 1.5rem;
  border-radius: 4px;
  border: none;
  margin-right: 1rem;
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
  background-color: #7c5295;
  border-radius: 10px;
  width: 33%;
`;

const ReturnButtonContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;
