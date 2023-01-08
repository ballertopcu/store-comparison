import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navbar } from './components/NavBar';
import { Content } from './components/Content';
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Content />
    </Provider>
  );
}

export default App;
