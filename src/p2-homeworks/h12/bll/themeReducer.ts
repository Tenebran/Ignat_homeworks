import { ThemeProvider } from '@material-ui/styles';

const initState: ThemeInitStateType = {
  theme: 'Moonlit_Asteroid',
};

export const themeReducer = (
  state: ThemeInitStateType = initState,
  action: ThemeActionType
): ThemeInitStateType => {
  switch (action.type) {
    case 'THEME/CHANGE-THEME': {
      return { ...state, theme: action.theme };
    }
    default:
      return state;
  }
};

export const changeThemeC = (theme: ThemeType) => {
  return { type: 'THEME/CHANGE-THEME', theme } as const;
};

export type ThemeType = 'Moonlit_Asteroid' | 'Harvey' | 'Witching_Hour' | 'Kye_Meh' | 'Lawrencium';

export type ThemeInitStateType = {
  theme: ThemeType;
};

export type ThemeActionType = ReturnType<typeof changeThemeC>;
