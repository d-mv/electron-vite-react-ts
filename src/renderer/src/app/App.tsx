import { Logger } from '@utils/log.utils'

export function App() {
  Logger.dispatch({ area: 'app', message: 'hello' })
  return <div>hello</div>
}
