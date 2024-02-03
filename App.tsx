import React, { useEffect, useState } from 'react';
import { Button, View, Text, FlatList } from 'react-native';
import {addData, updateData, deleteData} from "./crud";

const fetchData = async ()=> {
  try {
    const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await reponse.json();
    return data;
  } catch (error) {
    console.log(error);
    
  }
}

function App(): React.JSX.Element {
  const [data, setData] = useState(null);

  useEffect(()=> {
    fetchData().then(setData)
  }, [])
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - {item.email}</Text>
        )}/>
      <Button title="Ajouter un utilisateur" onPress={() => addData({name: "John Doe", email: "john@example.com"})} />
      <Button title="Update un utilisateur" onPress={() => updateData(1, {name: "John Doe", email: "john@example.com"})} />
      <Button title="Delete un utilisateur" onPress={() => deleteData(1)} />
    </View>
  );
}


export default App;
