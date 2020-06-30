import * as React from 'react';
import Logo from '../../assets/bontrip.svg';
import {IHeaderProps} from "./Header.I";

const Header: React.FunctionComponent<IHeaderProps> = ({isTransparent}): React.ReactElement => {
  return (
    <div className={`header ${isTransparent ? 'is-transparent' : ''}`}>
      <a className="logo" href="/"><Logo /></a>
    </div>
  )
}

export default Header;
