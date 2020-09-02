import React from 'react';
import {Card, Avatar, Button} from 'antd';

import {EditTwoTone} from '@ant-design/icons';
const Category = ({name, src}) => {
    return (
        <div>  
            <Card hoverable style={{ width: "112px", borderRadius:"15px" }}>
                <div style={{ justifyContent: "center", display: "flex", marginTop:"-1rem", marginBottom:"1rem" }}>
                    <Avatar 
                        gap={4}
                        size={74}
                        icon={<EditTwoTone />}
                        // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"                        
                        // src={src}    // icon에서 src로 교체 예정
                    />
                </div>
                <div style={{ justifyContent: "center", display: "flex", marginBottom:"-1rem"}}>
                    <Button shape="round" size="middle" key={name}>{name}</Button>
                </div>
            </Card>
        </div>
    );
}

export default Category;