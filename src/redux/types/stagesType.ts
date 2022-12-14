export interface IStage {
	id: number
	name: string
}

export interface IStagesState {
	stages: IStage[]
	loadingStages: boolean
	errorStages: null | string
}

export enum getStagesActionTypes {
	// eslint-disable-next-line no-unused-vars
	FETCH_STAGES = 'FETCH_STAGES',
	// eslint-disable-next-line no-unused-vars
	FETCH_STAGES_SUCCESS = 'FETCH_STAGES_SUCCESS',
	// eslint-disable-next-line no-unused-vars
	FETCH_STAGES_ERROR = 'FETCH_STAGES_ERROR',
}

interface FetchStages {
	type: getStagesActionTypes.FETCH_STAGES
}

interface FetchStagesSuccess {
	type: getStagesActionTypes.FETCH_STAGES_SUCCESS
	payload: any
}

interface FetchStagesError {
	type: getStagesActionTypes.FETCH_STAGES_ERROR
	payload: string
}

export type StagesActionTypes =
	| FetchStages
	| FetchStagesSuccess
	| FetchStagesError
