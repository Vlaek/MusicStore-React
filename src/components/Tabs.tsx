import React, { useState, useEffect, FC, JSXElementConstructor } from 'react';

interface TabsProps {
    tabs: Tab[]
    document: Document | null
}

interface Tab {
    title: string
    content: JSX.Element
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        (document.querySelector('.tabs__content') as HTMLDivElement).scrollTo(0, 0);
    }, [activeTab])

    return (
        <div className='tabs'>
            <div className='tabs__content'>
                {tabs[activeTab].content}
            </div>
            <div className='tabs__header'>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tabs__btn ${activeTab === index && 'active'}`}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;