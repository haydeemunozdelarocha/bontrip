import * as React from 'react';
import Logo, { ReactComponent as BontripLogo } from '../../assets/bontrip.svg';
import { IHeaderProps } from './Header.I';
// import Logo from '-!svg-react-loader!src/assets/bontrip.svg'

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
