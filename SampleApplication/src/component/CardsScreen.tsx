import React, { useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import CardsHelper from "../utils/CardsHelper";

const cardHelper = new CardsHelper();

/**
 * Different Button to test the cards methods
 */
const CardsScreenClickableList = [
    {
        id: 0,
        title: "New Card Count",
        action: () => cardHelper.getNewCardCount()
    },
    {
        id: 1,
        title: "UnClicked Card Count",
        action: () => cardHelper.getUnClickedCount()
    },
    {
        id: 2,
        title: "Cards Category",
        action: () => cardHelper.getCardsCategory()
    },
    {
        id: 3,
        title: "Is All Category Enabled",
        action: () => cardHelper.isAllCategoryEnabled()
    },
    {
        id: 4,
        title: "Refresh Cards",
        action: () => cardHelper.refreshCards()
    },
    {
        id: 5,
        title: "Cards UI",
        action: (props) => props.navigation.navigate("SelfHandledCardUI")
    },
    {
        id: 6,
        title: "Fetch Cards",
        action: () => cardHelper.fetchCards()
    }
]


const CardsScreen = (props) => {

    useEffect(() => {
        // Initialize the cards
        cardHelper.initialise();
    }, []);

    return (
        <View style={{ backgroundColor: "white" }} >
            <FlatList data={CardsScreenClickableList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => item.action(props)}>
                        <View>
                            <Text style={styles.item}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginTop: 20,
        color: '#088A85',
        fontWeight: 'bold',
        marginStart: 14,
        marginEnd: 14,
        fontSize: 16,
        backgroundColor: '#E6E6E6',
    }
});

export default CardsScreen;