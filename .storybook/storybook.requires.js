/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.@(ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src[\\\\/]components(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx))$",
  },
  {
    titlePrefix: "",
    directory: "./src/screens",
    files: "**/*.stories.@(ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src[\\\\/]screens(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx))$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/AccountInfo/AccountInfo.stories.tsx": require("../src/components/AccountInfo/AccountInfo.stories.tsx"),
    "./src/components/ActionAccount/ActionAccount.stories.tsx": require("../src/components/ActionAccount/ActionAccount.stories.tsx"),
    "./src/components/ActionWallet/ActionWallet.stories.tsx": require("../src/components/ActionWallet/ActionWallet.stories.tsx"),
    "./src/components/Button/Button.stories.tsx": require("../src/components/Button/Button.stories.tsx"),
    "./src/components/CardInfo/CardInfo.stories.tsx": require("../src/components/CardInfo/CardInfo.stories.tsx"),
    "./src/components/Container/Container.stories.tsx": require("../src/components/Container/Container.stories.tsx"),
    "./src/components/NotificationCard/NotificationCard.stories.tsx": require("../src/components/NotificationCard/NotificationCard.stories.tsx"),
    "./src/components/SettingOption/SettingOption.stories.tsx": require("../src/components/SettingOption/SettingOption.stories.tsx"),
    "./src/components/SocialButton/LoginSocialMediaButton.stories.tsx": require("../src/components/SocialButton/LoginSocialMediaButton.stories.tsx"),
    "./src/components/TransactionItem/TransactionItem.stories.tsx": require("../src/components/TransactionItem/TransactionItem.stories.tsx"),
    "./src/screens/Home/Home.stories.tsx": require("../src/screens/Home/Home.stories.tsx"),
  };
};

configure(getStories, module, false);
