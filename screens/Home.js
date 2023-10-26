import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Products from '../components/Products';

export default function Home({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Products/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
