import React from 'react'
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import PropTypes from 'prop-types'
import camelCaseToNormalText from '../utils/camelCaseToNormalText'

const styles = EStyleSheet.create({
  pic: {
    maxWidth: 50,
    maxHeight: 50,
  },
  avatar: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: () => EStyleSheet.value('$dogeYellow'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: () => EStyleSheet.value('$defaultPadding'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: () => EStyleSheet.value('$defaultFontWeight'),
    lineHeight: 26,
    fontSize: () => EStyleSheet.value('$defaultPadding'),
    paddingLeft: () => EStyleSheet.value('$defaultPadding'),
    color: () => EStyleSheet.value('$darkText'),
  },
})

const Traveller = ({
  firstName, lastName, dateOfBirth, onPress, travellerType,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.avatar}>
      <Image
        style={styles.pic}
        resizeMode="contain"
        source={require('../../test_images/avatars/doge.png')}
      />
    </View>
    <Text style={styles.label}>
      {firstName
        ? `${firstName} ${lastName}\n${dateOfBirth}`
        : `Enter ${camelCaseToNormalText(travellerType)} information`}
    </Text>
  </TouchableOpacity>
)

Traveller.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  onPress: PropTypes.func,
  travellerType: PropTypes.string,
}

export default Traveller
