import React from 'react';
import cl from './MyModal.module.css'


const MyModal = ({children, visible, setVisible}) => {
    const rootclass = [cl.MyModal]

    if (visible){
        rootclass.push(cl.active)
    }

    return (
        <div className={rootclass.join(" ")} onClick={() =>setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default MyModal;
