//https://github.com/casesandberg/react-color/blob/master/examples/custom-picker/src/MyPicker.js
//I was playing around with pickers for a while but the example provided happens to fit my own needs perfectly!
//I changed some sizing and display aspects 
import React from 'react'

import { CustomPicker } from 'react-color'
import { EditableInput, Hue } from 'react-color/lib/components/common'

export const MyPicker = ({ hex, hsl, onChange }) => {
  const styles = {
    hue: {
      height: 40,
      position: 'relative',
      marginBottom: 20,
    },
    input: {
      height: 34,
      border: `1px solid ${ hex }`,
      paddingLeft: 10,
    },
    swatch: {
      width: 130,
      height: 38,
      background: hex,
      transition: 'background-color 0.3s ease',
    },
  }
  return (
    <div>
      <div style={ styles.hue }>
        <Hue hsl={ hsl } onChange={ onChange } />
      </div>

      <div style={{ display: 'flex' }}>
        <EditableInput
          style={{ input: styles.input }}
          value={ hex }
          onChange={ onChange }
        />
        <div style={ styles.swatch } />
      </div>
    </div>
  )
}

export default CustomPicker(MyPicker)