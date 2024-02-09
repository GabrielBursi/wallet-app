import React from 'react'
import Config from 'react-native-config'
import 'react-native-gesture-handler'

import StorybookUI from './.storybook'
import { RouterApp } from './src/routes'

function App(): React.JSX.Element {
	return <RouterApp />
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App
