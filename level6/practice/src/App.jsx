import { ColorSchemeProvider, MantineProvider, Paper} from '@mantine/core';
import React from 'react';
import Cards from './components/Cards.jsx'
import Buttons from './components/Buttons.jsx'
import LightAndDarkModeButton from './components/LightDarkButton'

export default function App() {

//   const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
//     key: 'mantine-color-scheme',
//     defaultValue: 'light',
//     getInitialValueInEffect: true,
//   });

//   const toggleColorScheme = (value?: ColorScheme) =>
//   setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

// useHotkeys([['mod+J', () => toggleColorScheme()]]);



  return (
    <div>
      {/* <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={colorScheme}>
          <Paper padding="md" radius={0}  style={{minHeight: "100vh"}}> */}
            <Cards />
            <Buttons/>
          {/* </Paper>
        <LightAndDarkModeButton />
        </MantineProvider>
      </ColorSchemeProvider> */}
    </div>
      
  );
}