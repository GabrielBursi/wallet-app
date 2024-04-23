import { setupServer } from 'msw/native'
import { handlers } from './mocks/handlers'

export const server = setupServer(...handlers)

server.events.on('request:start', ({ request }) => {
	console.log('Outgoing:', request.method, request.url)
})
