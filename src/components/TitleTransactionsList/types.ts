/* eslint-disable @typescript-eslint/ban-types */
export type TitleTransactionsListProps = {
	onToggle: () => void | (() => Promise<void>)
	type: 'all' | 'last'
}
