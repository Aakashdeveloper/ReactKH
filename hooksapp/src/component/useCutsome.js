import {useState} from 'react';

function useLocalStorage(key,initialValue){
    const storeValue = localStorage.getItem(key);

    const [value,setValue] = useState(storeValue || initialValue);

    const setStoredValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, newValue)
    }

    return [value,setStoredValue]
}

export default useLocalStorage;