module.exports = {
  presets: [
    "module:@react-native/babel-preset",
    "@babel/preset-typescript",
    "@babel/preset-flow",
    ["module:metro-react-native-babel-preset", { "useTransformReactJSXExperimental": true }],
    "@babel/preset-env",
    "@babel/preset-react"
  ]
};