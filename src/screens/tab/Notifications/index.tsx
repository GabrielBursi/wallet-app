import { UseQueryResult, useQuery } from '@tanstack/react-query'
import React, { useCallback, useEffect, useState } from 'react'

import { Container, NotificationList, TitleScreen } from '@/components'
import { Notification } from '@/types/app'
import { NotificationServices } from '@/api/services'

import * as S from './styles'
import { Alert } from 'react-native'

type NotificationList = {
	allNotifications: Notification[]
	newNotifications: Notification[]
}

type NotificationResultQuery = Pick<
	UseQueryResult<Error | Notification[], Error>,
	'data' | 'error' | 'isError' | 'isFetched' | 'isFetching' | 'refetch'
>

export const NotificationsScreen = () => {
	const [{ allNotifications, newNotifications }, setNotifications] =
		useState<NotificationList>({
			allNotifications: [],
			newNotifications: [],
		})

	const { data, isError, isFetched, isFetching, error, refetch } = useQuery({
		queryKey: ['notifications'],
		queryFn: () => NotificationServices.GetAll(),
		staleTime: Infinity,
		refetchOnWindowFocus: false,
	})

	const filterNotifications = useCallback(
		(data: Notification[]): NotificationList => {
			const allNotifications = data
			const newNotifications = data.filter((notification) => notification.isNew)

			return { allNotifications, newNotifications }
		},
		[]
	)

	const handleNotifications = useCallback(
		(notificationsResult: NotificationResultQuery) => {
			const { data, isFetched, isError, error } = notificationsResult

			if (
				!!data &&
				isFetched &&
				!(data instanceof Error) &&
				!isError &&
				!error
			) {
				const { allNotifications, newNotifications } = filterNotifications(data)
				setNotifications({ allNotifications, newNotifications })
			}
		},
		[filterNotifications]
	)

	const handleRefresh = useCallback(() => {
		refetch()
			.then((result) => handleNotifications(result))
			.catch(() =>
				Alert.alert(
					'Erro ao atualizar notificações',
					'Ocorreu um erro ao atualizar as suas notificações'
				)
			)
	}, [handleNotifications, refetch])

	useEffect(() => {
		handleNotifications({
			data,
			error,
			isError,
			isFetched,
			isFetching,
			refetch,
		})
	}, [
		data,
		error,
		handleNotifications,
		isError,
		isFetched,
		isFetching,
		refetch,
	])

	return (
		<Container>
			<S.Notifications>
				<TitleScreen title="Notificações" />
				<S.ListContainer>
					<S.NewListContainer>
						<NotificationList
							onRefresh={handleRefresh}
							refreshing={isFetching}
							notifications={newNotifications}
							title="Novas"
						/>
					</S.NewListContainer>
					<S.AllListContainer>
						<NotificationList
							onRefresh={handleRefresh}
							refreshing={isFetching}
							notifications={allNotifications}
							title="Todas"
						/>
					</S.AllListContainer>
				</S.ListContainer>
			</S.Notifications>
		</Container>
	)
}
