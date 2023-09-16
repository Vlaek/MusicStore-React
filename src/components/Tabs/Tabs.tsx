import { useState, useEffect, useRef, FC } from 'react'
import classNames from 'classnames'
import styles from './Tabs.module.scss'

interface TabsProps {
	tabs: Tab[]
	document?: Document | null
}

interface Tab {
	title: string
	content: JSX.Element
	authTab: boolean
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0)
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (ref.current) {
			ref.current.scrollTo(0, 0)
		}
	}, [activeTab])

	return (
		<div className={styles.tabs}>
			<div className={styles.tabs__content} ref={ref}>
				{tabs[activeTab].content}
			</div>
			<div className={styles.tabs__header}>
				{tabs.map((tab, index) => (
					<div
						key={index}
						onClick={() => {
							tab.authTab && setActiveTab(index)
						}}
						className={classNames(
							styles.tabs__btn,
							{ [styles.active]: activeTab === index },
							{ [styles.non_auth]: !tab.authTab },
						)}
					>
						{tab.title}
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs
