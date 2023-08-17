import {useState} from 'react';

export interface IUseFetching {
    fetchItems: (limit: number, page: number, query?: string, sort?: string) => Promise<void>;
    isLoading: boolean;
    itemsError: string | boolean;
}

export const useFetching = (callback: () => Promise<void>):IUseFetching => {
    const [isLoading, setIsLoading] = useState(false);
    const [itemsError, setError] = useState<string | boolean>(false);

    const fetchItems = async () => {
        try {
            setIsLoading(true);
            await callback()
        } catch (e) {
            setError(typeof e === 'string' ? e : true);
        } finally {
            setIsLoading(false);
        }
    }

    return {isLoading, itemsError, fetchItems};
}