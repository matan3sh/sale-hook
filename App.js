import React from 'react';

import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder='Email' icon='email' />
      <AppPicker placeholder='Category' icon='apps' />
    </Screen>
  );
}
