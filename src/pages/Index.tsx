import React, { FC, useState, useEffect, useContext } from 'react'
import { OrdersContext } from '../context/context'
import Categories from '../components/Categories'
import Items from '../components/Items'
import Input from '../components/UI/Input'
import CarouselBox from '../components/CarouselBox'
import DataService from '../API/DataService'
import { useItems } from '../hooks/useItems'
import { useFetching, IUseFetching } from '../hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'
import { IOrdersContext } from './../types/types'
import { Helmet } from 'react-helmet'

const Index: FC = () => {
	const [items, setItems] = useState([])
	const { likes, orders, addToOrder, likeItem, onShowModal } = useContext(
		OrdersContext,
	) as IOrdersContext

	const [filter, setFilter] = useState({
		genre: '',
		sort: 'new',
		query: '',
	})

	const { fetchItems, isLoading, itemsError }: IUseFetching = useFetching(async () => {
		const response = await DataService.getAll()
		setItems(response.data)
	})

	useEffect(() => {
		fetchItems(1, -1)
		window.scrollTo(0, 0)
	}, [])

	const sortedAndSearchedItems = useItems(items, filter.sort, filter.query, filter.genre)

	const genres = [
		{
			key: '',
			name: 'Все',
		},
		{
			key: 'alternative rock',
			name: 'Alternative rock',
		},
		{
			key: 'indie rock',
			name: 'Indie rock',
		},
		{
			key: 'hard rock',
			name: 'Hard rock',
		},
		{
			key: 'industrial metal',
			name: 'Industrial metal',
		},
		{
			key: 'alternative rap',
			name: 'Alternative rap',
		},
		{
			key: 'hip hop',
			name: 'Hip Hop',
		},
	]

	const sorts = [
		{
			key: 'new',
			name: 'Сначала новые',
		},
		{
			key: 'old',
			name: 'Сначала старые',
		},
	]

	const handleQueryChange = (
		e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<SVGElement, MouseEvent> | undefined,
	) => {
		const input = e?.target as HTMLInputElement
		if (!input.value) input.value = ''
		const newFilter = { ...filter, query: input.value }
		setFilter(newFilter)
	}

	const handleGenreChange = (genre: string) => {
		const newFilter = { ...filter, genre: genre }
		setFilter(newFilter)
	}

	const handleSortChange = (sort: string) => {
		const newSort = { ...filter, sort: sort }
		setFilter(newSort)
	}

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<meta name='description' content='music store react main page' />
				<title>Music Store - Главная страница</title>
			</Helmet>
			<CarouselBox />
			<div className='container'>
				<Categories categories={sorts} setCategory={handleSortChange} />
				<Categories categories={genres} setCategory={handleGenreChange} />
				<Input setFilter={handleQueryChange} />
				{itemsError ? (
					<div className='item-list_empty'>
						<p className='item-list_empty__title'>Произошла ошибка:</p>
						<p className='item-list_empty__error'>{itemsError}</p>
					</div>
				) : (
					<div>
						{isLoading ? (
							<div className='item-list_empty'>
								<Loader />
							</div>
						) : (
							<Items
								items={sortedAndSearchedItems}
								orders={orders}
								likes={likes}
								onAdd={addToOrder}
								onLike={likeItem}
								onShowModal={onShowModal}
							/>
						)}
					</div>
				)}
			</div>
		</>
	)
}

export default Index
