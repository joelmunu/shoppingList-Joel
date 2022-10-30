import { useState } from 'react';

import { Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const productType = [
    'Fruit',
    'Vegetable',
    'Bakery',
    'Fish',
    'Meat'
]

const ProductInput = ({ onProductAdd }) => {
    const [productName, setProductName] = useState('');

    const changeTextHandler = (value) => {
        setProductName(value);
    }

    const addProductHandler = () => {
        const sanitizedName = productName.trim()
        if (sanitizedName !== '') {
            onProductAdd(sanitizedName);
        }
        setProductName('');
    }

    return (
        <View style={styles.productInput}>
            <View style={styles.View1}>
                <TextInput style={styles.productName}
                    placeholder='Product name...'
                    keyboardType="default"
                    onChangeText={changeTextHandler}
                    value={productName} />

                <TextInput style={styles.productQuantity}
                    placeholder='Quantity...'
                    keyboardType='Numeric'

                />
            </View>
            <View style={styles.View2}>
                <SelectDropdown
                    data={productType}
                    defaultButtonText={'Product type...'}
                    buttonStyle={styles.dropdownButton}
                    buttonTextStyle={styles.dropdownBtnText}
                    rowTextStyle={styles.dropdown}
                />
                <View style={styles.pressable}>
                    <Pressable
                        style={styles.addButton}
                        onPress={addProductHandler}>
                        <Text style={styles.btnText}>Add</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    productInput: {
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: "lemonchiffon",
        marginTop: 10,
        width: '95%',
        height: 140,
        borderRadius: 5,
        padding: 10
    },

    View1: {
        flexDirection: 'row'
    },

    productName: {
        flex: 4.1,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 5,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5
    },

    productQuantity: {
        flex: 2,
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 5,
        marginRight: 10,
        borderRadius: 5
    },

    View2: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    dropdownButton: {
        flex: 3,
        backgroundColor: 'lemonchiffon',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        height: 40,
        marginRight: 10,
    },

    dropdownBtnText: {
        fontSize: 16
    },

    addButton: {
        backgroundColor: '#ffff8f',
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 12,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5
    },

    btnText: {
        textAlign: 'center'
    },

    pressable: {
        flex: 2
    }
});

export default ProductInput;