import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Title, Paragraph} from 'react-native-paper';


const MyCard = () => (
  
  <View style={{ width:30, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center' }}>
            <Card.Content style={{ justifyContent: 'center', display: 'flex' }}>
                <Text>Categoria</Text>
            </Card.Content>
        </Card>
        {/* <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center' }}>
            <Card.Content style={{ justifyContent: 'center', display: 'flex', marginTop: 15 }}>
                <Text>Categoria</Text>
            </Card.Content>
        </Card>
        <Card style={{ display: 'flex', width: 99, height: 90, justifyContent: 'center' }}>
            <Card.Content style={{  display: 'flex',justifyContent: 'center', marginTop: 15, alignItems:"center"}}>
                <Text>Categoria</Text>
            </Card.Content>
        </Card> */}
    </View>
  
  
   
);

export default MyCard;