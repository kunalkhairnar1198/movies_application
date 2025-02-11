import React, { useEffect, useRef, useState } from 'react'


const useDebounce = (value,delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    const timeoutRef = useRef(null)

    const cancel =()=>{
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
    };

    useEffect(()=>{
        timeoutRef.current = setTimeout(() => {
           setDebounceValue(value) 
        }, delay);
        return(()=>{
            cancel()
        });
    },[value, delay])

  return[debounceValue, cancel]
}

export default useDebounce