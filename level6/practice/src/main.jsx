import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { MantineProvider, Text } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider theme={{
    fontFamily: 'Open Sans',
    colorScheme: 'dark',
    fontSizes: {md: 12},
    loader: "oval",
    colors: {
      'blue': ['#12B886', '#82C91E', '#D9480F', '#63E6BE', '#9775FA', '#4263EB', '#C92A2A', '#1864AB', '#1098AD', '#D6336C'],
    }
    }}
    styles={{Button: (theme) =>( {
      root: {
        backgroundColor: theme.colors.blue[9]
      }
    }),
  }
  } withGlobalStyles withNormalizeCSS>
    <App />
    </MantineProvider>
)
