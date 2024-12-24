import { getStorage, setStorage } from 'lib/storage';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface WordProviderProps {
  children: ReactNode;
}

type WordContextType = {
  wordStorage: boolean;
  changeWordHandler: () => Promise<void>;
} | null;

const WordContext = createContext<WordContextType>(null);

export const WordProvider = ({ children }: WordProviderProps) => {
  const [wordStorage, setWordStorage] = useState<boolean>(false);

  const changeWordHandler = async () => {
    setWordStorage(!wordStorage);
    await setStorage('word', !wordStorage);
  };

  useEffect(() => {
    const loadStorage = async () => {
      const get = await getStorage('word');
      setWordStorage(get);
    };
    loadStorage();
  }, []);

  const contextValue = useMemo(
    () => ({
      wordStorage,
      changeWordHandler,
    }),
    [wordStorage, changeWordHandler],
  );

  return (
    <WordContext.Provider value={contextValue}>{children}</WordContext.Provider>
  );
};

export const useWord = () => {
  const context = useContext(WordContext);
  if (!context) {
    throw new Error('useWord must be used within a WordProvider');
  }
  return context;
};
