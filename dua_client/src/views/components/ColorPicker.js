import React from 'react';
import styled from 'styled-components';
import { SwatchesPicker } from 'react-color';

const StyledSwatchesPicker = styled(SwatchesPicker)`
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  z-index: 1;
`;

class CustomPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.color || '#fff',
    left: this.props.left || 0,
    top: this.props.top || 0,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.hex });
    if (this.props.onChange) {
      this.props.onChange(color.hex);
    }
  };

  handleColorClick = (color) => {
    if (this.props.onColorClick) {
      this.props.onColorClick(color);
    }
  };

  render() {
    const { displayColorPicker, color, left, top } = this.state;
    return (
      <div>
        <StyledSwatchesPicker
          width={320}
          height={240}
          colors={[            ['#ff0000', '#d50000', '#aa0000', '#800000', '#550000', '#000000'],
            ['#00ff00', '#00d500', '#00aa00', '#008000', '#005500', '#000000'],
            ['#0000ff', '#0000d5', '#0000aa', '#000080', '#000055', '#000000'],
          ]}
          onSwatchHover={this.handleChange}
          color={color}
          disableAlpha={true}
          onChange={this.handleChange}
          onClose={this.handleClose}
          display={displayColorPicker}
          left={left}
          top={top}
        />
        <div onClick={this.handleClick}>
          <ColorPreview style={{ backgroundColor: color }} />
        </div>
        <ColorList>
          {['#ff0000', '#d50000', '#aa0000', '#800000', '#550000', '#000000', '#00ff00', '#00d500', '#00aa00', '#008000', '#005500', '#000000', '#0000ff', '#0000d5', '#0000aa', '#000080', '#000055', '#000000'].map((color, index) => (
            <ColorSwatch key={index} onClick={() => this.handleColorClick(color)} style={{ backgroundColor: color }} />
          ))}
        </ColorList>
      </div>
    );
  }
}

const ColorPreview = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`;

const ColorList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
`;

const ColorSwatch = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0.5rem;
  cursor: pointer;
`;

export default CustomPicker;