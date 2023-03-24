import React, { useState } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { ListItem } from '@rneui/themed';

const GrocerySearch = ({ groceryData }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const filteredData = groceryData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View>
      <TextInput
        placeholder="Search groceries"
        onChangeText={handleSearch}
        value={searchText}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
              <ListItem.Title>{item.price}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default GrocerySearch;
