import React from 'react'
import { TextInput, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'

const styles = EStyleSheet.create({
  input: {
    fontSize: () => EStyleSheet.value('$defaultFontSize'),
    width: '100%',
    fontWeight: () => EStyleSheet.value('$defaultFontWeight'),
    padding: () => EStyleSheet.value('$defaultPadding'),
  },
  wrapper: {
    backgroundColor: 'white',
    margin: () => EStyleSheet.value('$defaultPadding'),
    marginVertical: () => EStyleSheet.value('$defaultPaddingHalf'),
    borderRadius: 6,
  },
})

export default class Input extends React.PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    defaultValue: PropTypes.string,
  }

  render() {
    const { placeholder, onChangeText, defaultValue } = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.input.focus()}
        style={styles.wrapper}
      >
        <TextInput
          ref={(ref) => {
            this.input = ref
          }}
          // quick way to make sure upper component is prefilled
          // so that user can click done
          onLayout={() => onChangeText(defaultValue)}
          defaultValue={defaultValue}
          pointerEvents="none"
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </TouchableOpacity>
    )
  }
}
