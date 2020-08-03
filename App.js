import React, { useState } from 'react';

import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  { label: 'Disney', value: 1 },
  { label: 'Marvel', value: 2 },
  { label: 'Game of Thrones', value: 3 }
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        placeholder='Category'
        icon='apps'
      />
      <AppTextInput placeholder='Email' icon='email' />
    </Screen>
  );
}
