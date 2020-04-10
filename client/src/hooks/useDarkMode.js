import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
const useDarkMode = (key) => {
	const [enableDarkMode, setEnableDarkMode] = useLocalStorage(key);
};
