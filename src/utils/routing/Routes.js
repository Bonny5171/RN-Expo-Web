import Main from '../../screens/Main';
import {
    Setup, Assistant,
    Campaigns, Catalog,
    Client, Clients,
    Dashboards, ListCatalog,
    Orders, Prices,
} from '../../pages';

export default MainRoutes = {
    main: {
        screen: Main
    },
    setup: {
        screen: Setup
    },
    assistant: {
        screen: Assistant
    },
    dashboard: {
        screen: Dashboards
    },
    campaigns: {
        screen: Campaigns
    },
    catalog: {
        screen: Catalog
    },
    client: {
        screen: Client
    },
    clients: {
        screen: Clients
    },
    listCatalog: {
        screen: ListCatalog
    },
    orders: {
        screen: Orders
    },
    price: {
        screen: Prices
    },
}