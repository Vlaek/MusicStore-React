import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='tabs'>
            <div className='tabs__content'>
                {tabs[activeTab].content}
            </div>
            <div>
                {tabs.map((tab, index) => (
                    <a
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`tabs__btn ${activeTab === index && 'active'}`}
                    >
                        {tab.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Tabs;