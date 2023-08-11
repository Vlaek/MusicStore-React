// export const useItems = (items, sort, query, genre) => {
//     let filteredItems = items;
//     if (query || genre) {
//         filteredItems = items.filter(item => 
//             item.title.toLowerCase().includes(query.toLowerCase()) || 
//             item.author.toLowerCase().includes(query.toLowerCase()))
//     }

//     if (genre) {
//         filteredItems = [...filteredItems].filter(item => item.genre === genre)
//     }

//     if (sort) {
//         filteredItems.sort((a, b) => {
//             const [aDay, aMonth, aYear] = a.date.split('.');
//             const [bDay, bMonth, bYear] = b.date.split('.');
//             if (sort === 'new') {
//                 return new Date(`${bMonth}/${bDay}/${bYear}`) - new Date(`${aMonth}/${aDay}/${aYear}`)
//             } else {
//                 return new Date(`${aMonth}/${aDay}/${aYear}`) - new Date(`${bMonth}/${bDay}/${bYear}`)
//             }
//         })
//     }
    
//     return filteredItems;
// }

import {useMemo} from 'react';

export const useFiltredItems = (items, query, genre) => {
    const filteredItems = useMemo(() => {
        if (query) {
            items = items.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) || 
                item.author.toLowerCase().includes(query.toLowerCase()))
        }

        if (genre) {
            items = [...items].filter(item => item.genre === genre)
        }

        return items;
    }, [query, genre, items]);

    return filteredItems;    
}

export const useSortedItems = (items, sort) => {
    const sortedItems = useMemo(() => {
        if (sort) {
            items.sort((a, b) => {
                const [aDay, aMonth, aYear] = a.date.split('.');
                const [bDay, bMonth, bYear] = b.date.split('.');
                if (sort === 'new') {
                    return new Date(`${bMonth}/${bDay}/${bYear}`) - new Date(`${aMonth}/${aDay}/${aYear}`)
                } else {
                    return new Date(`${aMonth}/${aDay}/${aYear}`) - new Date(`${bMonth}/${bDay}/${bYear}`)
                }
            })
        }
        return items;
    }, [sort, items]);

    return sortedItems;
}

export const useItems = (items, sort, query, genre) => {
    
    const filteredItems = useFiltredItems(items, query, genre);
    const sortedItems = useSortedItems(filteredItems, sort);
    
    return sortedItems;
}