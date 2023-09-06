import {
  AuthProvider,
  LanguageProvider,
  GraphqlProvider,
} from '../src/contexts'
import { Provider } from 'react-redux'
import { SheetProvider } from 'react-native-actions-sheet'
import getStore from '../src/redux/store'
import { initDatabase } from '../src/services/sql/database'
import { StatusBar } from 'expo-status-bar'
import { Slot } from 'expo-router'

// import './components/custom/sheets.js'

export default function App(): JSX.Element {
  const store = getStore()
  initDatabase()
    .then(() => console.log('Database Initialized'))
    .catch(console.log)

  return (
    <LanguageProvider>
      <GraphqlProvider>
        <Provider store={store}>
          <AuthProvider>
            <SheetProvider>
              <StatusBar style="dark" />
              <Slot />
            </SheetProvider>
          </AuthProvider>
        </Provider>
      </GraphqlProvider>
    </LanguageProvider>
  )
}
