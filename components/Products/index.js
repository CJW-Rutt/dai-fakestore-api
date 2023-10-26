import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Image } from 'expo-image';
import { Button, Icon } from '@ui-kitten/components';

export default function Products() {

    const [numberProducts, setNumberProducts] = useState(0);
    const [allProducts, setProducts] = useState([]);
    const [number, setNumber] = useState(0);

    const url = "https://fakestoreapi.com/products"

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setNumberProducts(response.data.length);
            setProducts([
                ...response.data
            ])
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <>
            <View style={styles.titleHeader}> 
                    <View>
                        <Text style={styles.shoppingTitle}>Shop from our selection below!</Text>
                    </View>
                    <View style={styles.iconArea}>
                        <Icon width={30} height={30} fill='#800000' name='shopping-cart-outline'/>
                        <Text>{number}</Text>
                    </View>
                </View>
                {
                    numberProducts > 0 && allProducts.map(
                        (product, index) => (
                        <View key={index} style={styles.productContainer}>
                            <View style={styles.productNumberId}>
                                <Text>{product.id}</Text>
                            </View>
                            <View style={styles.productInfo}>
                                <Text style={styles.title}>{product.title}</Text>
                                <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
                                <View style={styles.buttonArea}>
                                    <View style={{width: 30, marginRight: 20, marginTop: 10}}>
                                        <Button size='tiny' 
                                                appearance='outline' 
                                                status="info" 
                                                onPress={() => {
                                                                if(number > 0) setNumber(number - 1)
                                                                }}>-</Button>
                                    </View>
                                    <View style={{width: 30, marginTop: 10}}>
                                        <Button size='tiny' appearance='outline' status="info" onPress={() => setNumber(number + 1)}>+</Button>
                                    </View>
                                </View>
                            </View>
                            <Image
                                style={{width: 120, height: 120}}
                                source={{ uri: product.image}}
                            />
                        </View>
                        )
                    )
                }
        </>
    )
}

const styles = StyleSheet.create({
    titleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30
    },
    iconArea: {
        flexDirection: 'row'
    },
    productContainer: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#F5F5F5",
        margin: 5
    }, 
    title: {
        flexWrap: "wrap",
    },
    productNumberId: {
        width: 40,
        padding: 10,
    },
    productInfo: {
        flex: 1,
        flexDirection: "column",
        padding: 10
    },
    productPrice: {
        fontWeight: 'bold'
    },
    buttonArea: {
        flexDirection: "row"
    }
});
