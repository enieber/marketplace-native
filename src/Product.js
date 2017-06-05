import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const Product = props => (
      <View
         style={{
          display: 'flex',
          flex: 1,
          margin: 15,
          backgroundColor: '#fbe1e0',  
          textAlign: 'center',
          flexDirection: 'column',
       }}>
        <View
          style={{            
            justifyContent: 'center',
            }}
          >
          <Image
            source={{uri: props.image}}
            style={{
              width: 100,
              height: 80,
              margin: 20,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }} />
          </View>
        <Text
          style={{
            alingText: 'center',
            color: '#463239',
          }}> { props.name } </Text>
        <Text
        style={{
            color: '#463239',
          }}> { props.description } </Text>
        <Text
        style={{
            color: '#463239',
            }}>
            {
              `R$ ${ props.price }` 
          }
        </Text>
         {/*<div
          style={{            
           justifyContent: 'center',
          }}
        >
 
        <button
          onClick={() => addCart()}
          style={{
            width: '80%',
            height: '2.5em',
            border: 'none',
            backgroundColor: '#ed6b86',
            color: 'white',
          }}>
          Buy
        </button>
        </div>*/}
      </View>
    );

export default Product;

