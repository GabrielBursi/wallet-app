declare module 'react-native-config' {
    export interface NativeConfig {
        LOAD_STORYBOOK?: 'true' | 'false';
    }

    export const Config: NativeConfig
    export default Config
}