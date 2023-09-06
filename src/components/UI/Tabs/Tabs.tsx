import { useState, useEffect, useRef, FC } from 'react'

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
		<div className='tabs'>
			<div className='tabs__content' ref={ref}>
				{tabs[activeTab].content}
			</div>
			<div className='tabs__header'>
				{tabs.map((tab, index) => (
					<div
						key={index}
						onClick={() => {
							tab.authTab && setActiveTab(index)
						}}
						className={`tabs__btn ${activeTab === index && 'active'} ${!tab.authTab && 'non-auth'}`}
					>
						{tab.title}
					</div>
				))}
			</div>
		</div>
	)
}

export default Tabs
