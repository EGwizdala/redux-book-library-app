import { Provider } from 'react-redux';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Book from './components/Book';

import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <p>Lista najlepszych ksiązek</p>
        <BookList />
        <BookForm />
      </div>
    </Provider>
  );
}

export default App;
