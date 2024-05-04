import { screen } from '@testing-library/react-native'
import { customRender } from '../../tests'
import { NotificationCard } from '.'
import { NotificationCardProps } from './types'

const props: NotificationCardProps = {
	date: '21 de Março 2024, 20:00',
	description: 'Comprou um café',
	title: 'Você gastou R$20,00 no The Kingdom',
}

describe('<NotificationCard/>', () => {
	it('should render correctly', () => {
		customRender(<NotificationCard {...props} />)

		expect(
			screen.getByRole('listitem', { name: props.title })
		).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: props.date })).toBeOnTheScreen()
		expect(
			screen.getByRole('text', { name: props.description })
		).toBeOnTheScreen()
		expect(screen.getByRole('text', { name: props.title })).toBeOnTheScreen()
		expect(screen.getByRole('img', { name: 'spent' })).toBeOnTheScreen()
	})

	it('should render a new notification correctly', () => {
		customRender(<NotificationCard {...props} isNew />)

		expect(screen.getByAccessibilityHint('nova notificação')).toBeOnTheScreen()
	})

	it('should render a received payment notification correctly', () => {
		customRender(<NotificationCard {...props} type="received" />)

		expect(screen.getByRole('img', { name: 'received' })).toBeOnTheScreen()
	})
})
