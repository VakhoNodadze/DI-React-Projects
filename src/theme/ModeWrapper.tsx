// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { ReactElement } from 'react';

interface IThemeModeWrapper {
  mode: PaletteMode;
  children: ReactElement;
}

export const ModeWrapper = (props: IThemeModeWrapper): ReactElement => {
  const { mode = 'light', children } = props;
  const darkTheme = createTheme({
    palette: {
      mode,
      background: {
        default: '#fff',
        paper: '#fff',
      },
    },
  });

  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default ModeWrapper;
