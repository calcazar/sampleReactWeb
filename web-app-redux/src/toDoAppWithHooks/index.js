import React from 'react';
import {app} from './index.module.scss';
import SearchSection from "./todoInputSection/todoInputSection"
import TodoResults from "./todoResults/todoResults"
import {TodoResultsProvider} from "./todoResultsContext"

function App() {
  return (
    <div className={app}>
      <TodoResultsProvider>
        <SearchSection />
        <TodoResults />
      </TodoResultsProvider>
    </div>
  );
}

export default App;
