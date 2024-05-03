import { HttpHandler, HttpResponse, http } from 'msw'
import Config from 'react-native-config'

import { mockNotifications, mockTransactions } from '@/tests/mocks'

export const handlers: HttpHandler[] = [
	http.get(`https://api.github.com/users/:username`, ({ request, params }) => {
		console.log('Handler', request.method, request.url, params.username)
		return HttpResponse.json(
			{
				login: 'GabrielBursi',
				id: 107154262,
				node_id: 'U_kgDOBmMLVg',
				avatar_url: 'teste',
				gravatar_id: '',
				url: 'https://api.github.com/users/GabrielBursi',
				html_url: 'https://github.com/GabrielBursi',
				followers_url: 'https://api.github.com/users/GabrielBursi/followers',
				following_url:
					'https://api.github.com/users/GabrielBursi/following{/other_user}',
				gists_url: 'https://api.github.com/users/GabrielBursi/gists{/gist_id}',
				starred_url:
					'https://api.github.com/users/GabrielBursi/starred{/owner}{/repo}',
				subscriptions_url:
					'https://api.github.com/users/GabrielBursi/subscriptions',
				organizations_url: 'https://api.github.com/users/GabrielBursi/orgs',
				repos_url: 'https://api.github.com/users/GabrielBursi/repos',
				events_url:
					'https://api.github.com/users/GabrielBursi/events{/privacy}',
				received_events_url:
					'https://api.github.com/users/GabrielBursi/received_events',
				type: 'User',
				site_admin: false,
				name: 'Gabriel Bursi',
				company: 'ID Brasil Sistemas',
				blog: 'https://meusite-gabriel.vercel.app/',
				location: 'Maringá-PR, Brasil',
				email: null,
				hireable: null,
				bio: 'Desenvolvedor Web FullStack\r\n',
				twitter_username: null,
				public_repos: 41,
				public_gists: 0,
				followers: 18,
				following: 38,
				created_at: '2022-06-08T22:04:23Z',
				updated_at: '2024-04-23T11:58:08Z',
			},
			{ status: 200 }
		)
	}),
	http.get(`${Config.API_URL}/notification`, ({ request }) => {
		console.log('Handler', request.method, request.url)
		return HttpResponse.json(mockNotifications, { status: 200 })
	}),
	http.get(`${Config.API_URL}/transaction`, ({ request }) => {
		console.log('Handler', request.method, request.url)
		return HttpResponse.json(mockTransactions, { status: 200 })
	}),
]
