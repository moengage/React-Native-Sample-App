import React, { useState } from "react";
import { View } from "react-native";
import CardsHelper from "../utils/CardsHelper";
import { useEffect } from "react";
import { CardsCategoriesList } from "./CardCategoriesList";
import { CardsList } from "./CardsList";
import { MoEngageLogger } from "react-native-moengage";
import { Card, SyncCompleteData } from "react-native-moengage-cards";

const cardsHelper = new CardsHelper();

/**
 * Cards UI Component
 */
const SelfHandledCardUI = () => {
    const [cardCategories, setCardCategories] = useState<Array<string>>([])
    const [cards, updateCardData] = useState<Array<Card>>([]);

    function fetchAndUpdatedCards(cardCategory) {
        // Fetch cards for a particular category
        cardsHelper.getCardForCategory(cardCategory).then((cardsData) => {
            if (cardsData !== undefined) {
                updateCardData(cardsData.cards);
            }
        })
    }

    function fetchAndUpdateCardsInfo() {
        // Get all the cards info
        cardsHelper.getCardsInfo().then((cardsInfo) => {
            const cardCategories = new Array<string>;

            // Add the "All" category in available categories if shouldShowAllTab is true
            if (cardsInfo.shouldShowAllTab) cardCategories.push("All");
            cardsInfo.categories.forEach((category) => cardCategories.push(category));
            setCardCategories(cardCategories);
            updateCardData(cardsInfo.cards);
        });
    }

    useEffect(() => {
        // Get all the available cards data
        fetchAndUpdateCardsInfo();

        // Call cards section loaded method
        cardsHelper.onCardSectionLoaded((data: SyncCompleteData | null) => {
            if (data !== null && data.hasUpdates) {
                MoEngageLogger.debug("Card Section Data Update Available ");

                // Update available, fetch new cards and update the UI
                fetchAndUpdateCardsInfo();
            }
        });

        // Call after cards component is un-mounted
        return () => cardsHelper.onCardSectionUnLoaded();
    }, []);

    /**
     * Build your component based on the available cards data
     */
    return (
        <View style={{ flex: 1 }} >
            {/* Category Tab List UI*/}
            <CardsCategoriesList categories={cardCategories}
                onClick={(clickedCategory) => { fetchAndUpdatedCards(clickedCategory) }} />

            {/* Cards List UI  */}
            <CardsList cards={cards}
                onCardShown={(shownCard) => { cardsHelper.onCardShown(shownCard) }}
                onClick={(clickedCard, widgetId) => { cardsHelper.onCardClicked(clickedCard, widgetId) }}
                onDelete={(deletedCard) => {
                    updateCardData(cards.filter((card) => {
                        return card.cardId !== deletedCard.cardId
                    }))
                    cardsHelper.deletedCard(deletedCard);
                }} />
        </View>
    );
}

export default SelfHandledCardUI;