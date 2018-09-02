import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import Navigator from './config/routes'
import store from './config/store'

EStyleSheet.build({
  $primaryOrange: 'rgb(252,80,80)',
  $primaryPurple: 'rgb(91,101,210)',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
  $dogeYellow: 'rgb(208,172,93)',
  $defaultPadding: 16,
  $defaultPaddingHalf: 8,
  $defaultFontSize: 16,
  $defaultFontWeight: '500',
})

export default () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" />
    <Provider store={store}>
      <Navigator onNavigationStateChange={null} />
    </Provider>
  </React.Fragment>
)
