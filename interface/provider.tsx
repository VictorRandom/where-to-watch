export interface Provider {
    buy: Buy[];
    flatrate: Flatrate[]
    rent: Rent[]
    link: string;
}

interface Buy {
    display_priority: number,
    logo_path: string;
    provider_id: number;
    provider_name: string;
}

interface Flatrate {
    display_priority: number,
    logo_path: string;
    provider_id: number;
    provider_name: string;
}

interface Rent {
    display_priority: number,
    logo_path: string;
    provider_id: number;
    provider_name: string;
}