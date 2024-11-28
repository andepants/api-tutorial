import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

// Firebase configuration
const firebaseConfig = {
  apiKey: "",
  projectId: "",
  storageBucket: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function TabOneScreen() {
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const functions = getFunctions(app);
        const helloWorld = httpsCallable(functions, 'helloWorld');
        const response = await helloWorld();
        setResult(response.data as string);
      } catch (error) {
        console.error('Error calling function:', error);
        setResult('Error calling function');
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.resultText}>{result || 'Loading...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  resultText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
