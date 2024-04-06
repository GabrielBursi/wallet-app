import { ScreensType } from '@/types/screens'
import { Params } from './Params'

export type RootStackParamList = {
	[Key in ScreensType]: Params
}
