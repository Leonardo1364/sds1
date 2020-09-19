import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
    return (
        <>
            <Header />
            <Text style={styles.text} >Hello Create Record!</Text>
        </>
        
    );
}

const styles = StyleSheet.create({
    text: {
      color: "#FFF",
      fontSize: 50,
      textAlign: 'center',
      marginTop: 100
    }
  });

export default CreateRecord;