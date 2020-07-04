import * as React from 'react';
import { ISidepanelProps } from './Sidepanel.I';
import { useState } from 'react';
import classNames from 'classnames';

export const Sidepanel: React.FC<ISidepanelProps> = (props) => {
    const { image, orientation, index, color, children } = props;
    const [isOpen, togglePanel] = useState(false);

    const panelClasses = classNames({
        'sidepanel': true,
        'sidepanel-open': isOpen,
        'sidepanel-left': orientation === 'left',
        'sidepanel-right': orientation === 'right',
    });

    return (
        <div className={panelClasses} style={{ backgroundColor: color || '#2144b7' }}>
            <div className="sidepanel-content">{children}</div>
            <div className="sidepanel-tab" onClick={() => togglePanel(!isOpen)} style={{ top: `${index * 70}px`, backgroundColor: color || '#2144b7' }}>
                <img className="sidepanel-tab-image" src={image} />
            </div>
        </div>
    );
};
