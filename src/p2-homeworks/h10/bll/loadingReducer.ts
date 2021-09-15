const initState = {
  isLoading: false,
};

export const loadingReducer = (
  state: LoadingStateType = initState,
  action: LoadingActionType
): LoadingStateType => {
  switch (action.type) {
    case 'LOADING/SET-LOADING': {
      return { ...state, isLoading: action.value };
    }
    default:
      return state;
  }
};

export type LoadingActionType = ReturnType<typeof loadingAC>;

export type LoadingStateType = {
  isLoading: boolean;
};

export const loadingAC = (value: boolean) => {
  return { type: 'LOADING/SET-LOADING', value } as const;
};
