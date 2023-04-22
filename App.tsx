import { AuthProvider, LanguageProvider, GraphqlProvider } from './src/contexts'
import { Provider } from 'react-redux'
import { SheetProvider } from 'react-native-actions-sheet'
import RootNavigator from './src/stacks/RootNavigator'
import { store } from './src/redux/store'
import { initDatabase } from './src/services/sql/database'
// import './components/custom/sheets.js'

export default function App(): JSX.Element {
  initDatabase()
    .then(() => console.log('Database Initialized'))
    .catch(console.log)
  return (
    <LanguageProvider>
      <GraphqlProvider>
        <Provider store={store}>
          <AuthProvider>
            <SheetProvider>
              <RootNavigator />
            </SheetProvider>
          </AuthProvider>
        </Provider>
      </GraphqlProvider>
    </LanguageProvider>
  )
}
