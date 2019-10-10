import React, {useState} from 'react';

export const TodoResultsContext = React.createContext();

export function TodoResultsProvider (props) {
    const [results, setResults] = useState([])

    function saveResultsToLocalStorage(results) {
        localStorage.setItem("results",results)
    }

    return(
        <TodoResultsContext.Provider value={{
            results, 
            initResults: () => {
                let resultsList = JSON.parse(localStorage.getItem("results"))
                if (resultsList) {
                    setResults(resultsList)
                }
            },
            addToResults: (todoItem)=>{
                const newResultSet = results.slice(0); 
                newResultSet.push(todoItem)
                setResults(newResultSet)
                saveResultsToLocalStorage(JSON.stringify(newResultSet))
            },
            removeResults: (index)=>{
                const newResultSet = results.slice(0); 
                newResultSet.splice(index, 1)
                setResults(newResultSet)
                saveResultsToLocalStorage(JSON.stringify(newResultSet))
            }
        }}>
            {props.children}
        </TodoResultsContext.Provider>
    )

}