import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { Input} from "react-native-elements";
import { useState } from 'react';

const MyHeader = () => {
  const goBack = () => console.log('Went back');
  const handleSearch = () => console.log('Searching');
  const handleMore = () => console.log('Shown more');
  const [pesquisa, setPesquisa] = useState('');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title="Delivery"/>
    
      <Appbar.Action icon="magnify" onPress={handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
  );
};

export default MyHeader;