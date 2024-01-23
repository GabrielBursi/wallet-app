import React from 'react';
import { SafeAreaView ,Text,} from 'react-native';
import Config from 'react-native-config'
import StorybookUI from './.storybook'

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}

export default Config.LOAD_STORYBOOK === 'true' ? StorybookUI : App
