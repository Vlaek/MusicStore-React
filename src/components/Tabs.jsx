import React, { useState, useEffect } from 'react';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        document.querySelector('.tabs__content').scrollTo(0, 0);
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