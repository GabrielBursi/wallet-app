module.exports = {
  presets: [
    "module:@react-native/babel-preset",
    "@babel/preset-typescript",
    "@babel/preset-flow",
    ["module:metro-react-native-babel-preset", { "useTransformReactJSXExperimental": true }],
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: "./src/components",
          buttons: "./src/components/buttons",
        },
      },
    ],
  ]
};