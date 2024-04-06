import { ScreensType } from '@/types/screens'
import { Params } from './Params'

export type RootDrawerParamList = {
	[Key in ScreensType]: Params
}
