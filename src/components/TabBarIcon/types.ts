import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { Icon } from '@/types/utils'

/* eslint-disable @typescript-eslint/ban-types */
export type TabBarIconProps = {
	icon: Icon['name']
	iconFocused: Icon['name']
} & IconProps &
	Accessibility

type NonUndefined<T> = T extends undefined ? never : T
type Accessibility = Pick<Icon, 'accessibilityHint' | 'accessibilityLabel'>
type TabBarIcon = Pick<BottomTabNavigationOptions, 'tabBarIcon'>['tabBarIcon']
type TabBarIconParams = Parameters<NonUndefined<TabBarIcon>>[0]
type IconProps = Omit<TabBarIconParams, 'color'>
