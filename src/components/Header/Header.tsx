import * as React from 'react';
import { ReactComponent as BontripLogo } from '../../assets/bontrip.svg';
import { IHeaderProps } from './Header.I';

export const Header: React.FC<IHeaderProps> = (props) => {
    const { isTransparent } = props;

    return (
        <div className={`header ${isTransparent ? 'is-transparent' : ''}`}>
            <a className="logo" href="/">
                <BontripLogo />
            </a>
        </div>
    );
};
