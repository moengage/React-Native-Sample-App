import ReactMoEngageCards from "react-native-moengage-cards";

import { MoEngageLogger } from "react-native-moengage";
import { CardsData, CardInfo, Card, SyncCompleteData } from "react-native-moengage-cards";

class CardsHelper {

    appId = "YOUR_APP_ID";

    initialise(): void {
        // The callback will be triggered after cards is synced on App open. Add the listener before initializing the cards plugin
        ReactMoEngageCards.setAppOpenSyncListener((data) => {
            MoEngageLogger.debug("App Open Sync Listener Called: ", data);
        });

        // Initialize cards plugin, it can be initialized either in CardsScreen or just after initializing the core plugin in HomeScreen
        ReactMoEngageCards.initialize(this.appId);
    }

    /**
     * Manually refresh cards on user request, it can be used in pull to refresh
     */
    refreshCards(): void {
        ReactMoEngageCards.refreshCards((data: SyncCompleteData) => {
            MoEngageLogger.debug("Refresh Card Sync Listener Called: ", data);
            if (data.hasUpdates) {
                // Fetch new cards and update the UI
            }
        });
    }

    /**
     * Get the new available cards count after the last cards fetch
     */
    async getNewCardCount(): Promise<number> {
        const newCardsCount = await ReactMoEngageCards.getNewCardsCount();
        MoEngageLogger.debug("New Card Count : ", newCardsCount);
        return newCardsCount;
    }

    /**
     * Get total number of un-clicked cards count
     */
    async getUnClickedCount(): Promise<number> {
        const unClickedCount = await ReactMoEngageCards.getUnClickedCardsCount();
        MoEngageLogger.debug("UnClicked Card Count : ", unClickedCount);
        return unClickedCount;
    }

    /**
     * Get all the available cards category
     */
    async getCardsCategory(): Promise<Array<string>> {
        const cardsCategory = await ReactMoEngageCards.getCardsCategories();
        MoEngageLogger.debug("Cards Categories: ", cardsCategory);
        return cardsCategory;
    }

    /**
     * Check whether "All" category is enabled or not
     */
    async isAllCategoryEnabled(): Promise<boolean> {
        const isAllCategoryEnabled = await ReactMoEngageCards.isAllCategoryEnabled();
        MoEngageLogger.debug("Is All Category Enabled ", isAllCategoryEnabled);
        return isAllCategoryEnabled;
    }

    /**
     * Get all cards available for particular category
     */
    async getCardForCategory(cardCategory: string): Promise<CardsData> {
        const cardsData = await ReactMoEngageCards.getCardsForCategory(cardCategory);
        MoEngageLogger.debug(`Cards For ${cardCategory} Category is fetched`);
        return cardsData;
    }

    /**
     * Fetches the latest cards from the server
     */
    async fetchCards(): Promise<CardsData> {
        const cardsData = await ReactMoEngageCards.fetchCards();
        MoEngageLogger.debug(`cards is fetched`);
        return cardsData;
    }

    /**
     * Get all the info for available cards
     */
    async getCardsInfo(): Promise<CardInfo> {
        const cardInfo = await ReactMoEngageCards.getCardsInfo();
        MoEngageLogger.debug(`Cards Info is fetched`);
        return cardInfo;
    }

    /**
     * Call this when card section is mounted
     */
    onCardSectionLoaded(onSyncComplete: (data: SyncCompleteData | null) => void): void {
        ReactMoEngageCards.onCardSectionLoaded((data) => {
            MoEngageLogger.debug("Card Section Sync Listener Called: ", data);
            onSyncComplete(data);
        });
    }

    /**
     * Call this when card section is un-mounted
     */
    onCardSectionUnLoaded(): void {
        ReactMoEngageCards.onCardSectionUnLoaded();
    }

    /**
     * Call this when a card is shown to the user
     */
    onCardShown(card: Card): void {
        ReactMoEngageCards.cardShown(card);
    }

    /**
     * Call this when a card is clicked
     */
    onCardClicked(card: Card, widgetId: number): void {
        ReactMoEngageCards.cardClicked(card, widgetId);
    }

    /**
     * Delete a single card, to delete multiple card check `ReactMoEngageCards.deleteCards()`
     */
    deletedCard(card: Card): void {
        ReactMoEngageCards.deleteCard(card);
    }
}

export default CardsHelper;