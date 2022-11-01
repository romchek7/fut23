export interface IMarket {
	market_id: number
	name: string
}

export interface IMarketState {
	markets: IMarket[]
	loading: boolean
	error: null | string
}

export enum getMarketsActionType {
	// eslint-disable-next-line no-unused-vars
	FETCH_MARKETS = 'FETCH_MARKETS',
	// eslint-disable-next-line no-unused-vars
	FETCH_MARKETS_SUCCESS = 'FETCH_MARKETS_SUCCESS',
	// eslint-disable-next-line no-unused-vars
	FETCH_MARKETS_ERROR = 'FETCH_MARKETS_ERROR',
}

interface FetchMarkets {
	type: getMarketsActionType.FETCH_MARKETS
}

interface FetchMarketsSuccess {
	type: getMarketsActionType.FETCH_MARKETS_SUCCESS
	payload: any
}

interface FetchMarketsError {
	type: getMarketsActionType.FETCH_MARKETS_ERROR
	payload: string
}

export type MarketsActionType =
	| FetchMarkets
	| FetchMarketsSuccess
	| FetchMarketsError
