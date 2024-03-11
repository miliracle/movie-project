import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import styles from '../common/style';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="gray" />
            <TextInput
                style={styles.searchInput}
                placeholder="Search movies..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={() => onSearch(searchQuery)}
            />
            <TouchableOpacity style={styles.searchButton} onPress={() => onSearch(searchQuery)}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SearchBar