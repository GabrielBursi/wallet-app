import { ScreensType } from '@/types/screens'
import { Params } from './Params'

export type RootTabParamList = {
	[Key in ScreensType]: Params
}
