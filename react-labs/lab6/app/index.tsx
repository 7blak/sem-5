import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TextInput, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';

interface Country {
  name: { common: string };
  cca2: string;
  cca3: string;
  population: number;
  region: string;
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const router = useRouter();

  const fetchCountries = async () => {
    if (query.length >= 3)
      setLoading(true);
    try {
      const endpoint =
        query.length >= 3
          ? `https://restcountries.com/v3.1/name/${query}`
          : 'https://restcountries.com/v3.1/all';
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error('Error when fetching');
      const data: Country[] = await response.json();
      setCountries(data); 
    } catch (error) {
      console.error('Error when fetching:', error);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchCountries();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchCountries();
  }, [query]);

  const renderCountry = ({ item }: { item: Country }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => router.push(`/details/${item.cca3}`)}
    >
      <Text style={styles.countryName}>{item.name.common}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a country..."
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <Text style={styles.foundCount}>
        {countries.length} {countries.length === 1 ? 'country' : 'countries'} found
      </Text>
      {loading && countries.length === 0 || refreshing ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item) => item.cca3}
          renderItem={renderCountry}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ListEmptyComponent={!loading && query.length >= 3 ? (
            <Text style={styles.noResults}>No countries found.</Text>
          ) : null}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  foundCount: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  countryName: {
    fontSize: 18,
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
});
