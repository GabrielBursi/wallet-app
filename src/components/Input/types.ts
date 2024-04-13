import { Icon } from '@/types/utils'
import { TextInputProps } from 'react-native'

/* eslint-disable @typescript-eslint/ban-types */
export type InputProps = {
	iconLeft?: Icon
	iconRight?: Icon
} & TextInputProps
