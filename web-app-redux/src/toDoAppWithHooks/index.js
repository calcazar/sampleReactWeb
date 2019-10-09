import React from 'react';
import './index.scss';
import SearchSection from "./todoInputSection/todoInputSection"
import TodoResults from "./todoResults/todoResults"

function App() {
  return (
    <div className="app">
      <SearchSection />
      <TodoResults />
    </div>
  );
}

export default App;
