import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRouter, useGlobalSearchParams } from 'expo-router';

interface Country {
  name: { common: string };
  population: number;
  region: string;
  flags: { png: string };
}

export default function CountryDetails() {
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { cca3 } = useGlobalSearchParams();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error('Error fetching country details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [cca3]);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  if (!country) {
    return <Text>No country data found.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countryName}>{country.name.common}</Text>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <Text style={styles.details}>Population: {country.population.toLocaleString()}</Text>
      <Text style={styles.details}>Region: {country.region}</Text>
      <Text style={styles.details}>cca3 code: {cca3}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flag: {
    width: 320,
    height: 200,
    marginVertical: 20,
  },
  details: {
    fontSize: 18,
    marginVertical: 5,
  },
});
