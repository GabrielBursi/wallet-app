import { NavigationContainer } from '@react-navigation/native'
import { StackRouter } from './StackRouter'

export const RouterApp = () => {
	return (
		<NavigationContainer>
			<StackRouter />
		</NavigationContainer>
	)
}
