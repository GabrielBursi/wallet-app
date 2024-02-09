import Reactotron, { networking, openInEditor } from "reactotron-react-native";
import mmkvPlugin from "reactotron-react-native-mmkv"
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { reactotronRedux } from 'reactotron-redux'

import { storage } from './src/storage/MMKStorage'

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ name: 'React Native Demo' }) 
    .useReactNative({
        devTools: true,
        asyncStorage: true,
        storybook: true,
        networking: true,
        errors: true,
        logger: true,
    })
    .use(networking())
    .use(openInEditor())
    .use(reactotronRedux())
    .use(mmkvPlugin({ storage }))
    .connect();

export default reactotron 