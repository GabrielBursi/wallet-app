import { GetResponseDataTypeFromEndpointMethod } from '@octokit/types'
import { Octokit } from '@octokit/rest'

const octokit = new Octokit()

export type User = GetResponseDataTypeFromEndpointMethod<
	typeof octokit.users.getByUsername
>
