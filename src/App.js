import React, { useState, useCallback } from 'react';
import Categories from './Categories';
import NewsList from './NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []); //category상태를 업데이트 하는 onSelect함수를 만들었음
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
