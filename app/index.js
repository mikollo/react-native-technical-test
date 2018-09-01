import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import Navigator from './config/routes'
import store from './config/store'

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $darkText: '#343434',
})

export default () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" />
    <Provider store={store}>
      <Navigator onNavigationStateChange={null} />
    </Provider>
  </React.Fragment>
)
