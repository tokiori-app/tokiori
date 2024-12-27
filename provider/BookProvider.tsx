import { WordType } from '$types/word';
import { getStorage, setStorage } from 'lib/storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type BookContextType = {
  books: WordType[];
  changeBookHandler: (itme: WordType) => Promise<void>;
} | null;

interface BookProviderProps {
  children: ReactNode;
}

const BookContext = createContext<BookContextType>(null);

export const BookProvider = ({ children }: BookProviderProps) => {
  const [books, setBook] = useState<WordType[]>([]);

  const changeBookHandler = async (itme: WordType) => {
    const exists = books.some((el) => el.id === itme.id);
    let updatedBooks;

    if (exists) {
      updatedBooks = books.filter((el) => el.id !== itme.id);
    } else {
      updatedBooks = [...books, itme];
    }

    setBook(updatedBooks);
    await setStorage('book', JSON.stringify(updatedBooks));
  };

  const contextValue = useMemo(
    () => ({
      books,
      changeBookHandler,
    }),
    [books, changeBookHandler],
  );

  useEffect(() => {
    const loadStorage = async () => {
      const get = await getStorage('book');
      setBook(JSON.parse(get) || []);
    };
    loadStorage();
  }, []);

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error('useBook must be used within a BookProvider');
  }
  return context;
};
