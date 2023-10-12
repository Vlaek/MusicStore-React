import React, { FC, useEffect, useContext } from 'react'
import { OrdersContext } from '../../context/context'
import Categories from '../../components/Categories/Categories'
import Items from '../../components/Items/Items'
import Search from './../../components/Search/Search'
import CarouselBox from '../../components/CarouselBox/CarouselBox'
import { useItems } from '../../hooks/useItems'
import Loader from '../../components/Loader/Loader'
import { IOrdersContext } from '../../types/types'
import { Helmet } from 'react-helmet'
import styles from './Index.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { useActions } from 'src/hooks/useAction'

const Index: FC = () => {
	const { likes, likeItem, onShowModal } = useContext(
		OrdersContext,
	) as IOrdersContext

	const { items, error, isLoading } = useTypedSelector(state => state.items)

	const { fetchItems, setFilter } = useActions()

	useEffect(() => {
		fetchItems()
	}, [])

	const filter = useSelector((state: RootState) => state.filter)

	const sortedAndSearchedItems = useItems(items, filter)

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
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.MouseEvent<SVGElement, MouseEvent>
			| undefined,
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
		const newFilter = { ...filter, sort: sort }
		setFilter(newFilter)
	}

	return (
		<>
			<Helmet>
				<meta charSet='utf-8' />
				<meta name='description' content='music store react main page' />
				<title>Music Store - Главная страница</title>
			</Helmet>
			<CarouselBox />
			<div className={styles.container}>
				<Categories categories={sorts} setCategory={handleSortChange} />
				<Categories categories={genres} setCategory={handleGenreChange} />
				<Search setFilter={handleQueryChange} />
				{isLoading ? (
					<div className={styles.empty}>
						<Loader />
					</div>
				) : error ? (
					<div className={styles.empty}>
						<p className={styles.empty__title}>Произошла ошибка:</p>
						<p className={styles.empty__error}>{error}</p>
					</div>
				) : (
					<Items
						items={sortedAndSearchedItems}
						likes={likes}
						onLike={likeItem}
						onShowModal={onShowModal}
					/>
				)}
			</div>
		</>
	)
}

export default Index
