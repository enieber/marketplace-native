import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

const Product = ({ image, price, name, description }) => (
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
            source={{uri: image}}
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
          }}> { name } </Text>
        <Text
        style={{
            color: '#463239',
          }}> { description } </Text>
        <Text
        style={{
            color: '#463239',
            }}>
            {
              `R$ ${ price }` 
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

