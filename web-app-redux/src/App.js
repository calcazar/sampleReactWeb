import React from 'react';
import './App.scss';
import SearchSection from "./home/todoInputSection/todoInputSection"
import TodohResults from "./home/todoResults/todoResults"
function App() {
  return (
    <div class="app">
      <SearchSection />
      <TodohResults />
    </div>
  );
}

export default App;
