import { Layout } from 'antd';
import { useState } from 'react';
import './MenuComponent.scss'
const { Sider } = Layout;


const MenuComponent = () => {

    const [ collapse , setCollapse ] = useState(false)

    return (
        <Sider 
            theme="dark"
            reverseArrow={true}
            collapsible 
            collapsed={collapse}
            onCollapse={() => setCollapse(!collapse)}
        >
        <div className='menu-title'>
            <h1> Menu  </h1>
        </div>
        </Sider>
    )
}

export default MenuComponent;