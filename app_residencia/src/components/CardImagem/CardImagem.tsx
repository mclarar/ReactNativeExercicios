import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { View } from 'react-native';

//const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyCardImg = () => (
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop:2}}>
      <Card style={{width:150, height: 45}}>
           <Card.Content>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
         <Paragraph>Alguma coisa</Paragraph>
          </Card.Actions>
      </Card>
    </View>
);

export default MyCardImg;