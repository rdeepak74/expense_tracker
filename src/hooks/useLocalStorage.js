import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData){
 const [data,setData]= useState(initialData);

 useEffect(()=>{
    
        const storeData = JSON.parse(localStorage.getItem(key))
        if(storeData){
            // alert(1)
            setData(storeData)
        }else{
            // alert(2)
            localStorage.setItem(key,JSON.stringify(initialData))
            setData(initialData)
        }
 },[])

 const updateLocalStorage =(newData)=>{
    console.log(newData);
    if(typeof newData=='function'){
    localStorage.setItem(key,JSON.stringify(newData(data)))
        
    }else{

        localStorage.setItem(key,JSON.stringify(newData))
    }
    setData(newData)
 }

 return [data,updateLocalStorage];
}