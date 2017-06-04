import React from 'react';

import { Breadcrumb, Input } from 'semantic-ui-react';

import css from './Header.css';

const Header = () => (
  <div>
    <div className={css.header}>
      <div className={css.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <p>Pluteum</p>
      </div>
      <div className={css.navigation}>
        <p>Settings</p>
        <p>Help</p>
      </div>
    </div>
    <div className={css.subHeader}>
      <Breadcrumb>
        <Breadcrumb.Section active>George&#39;s Ebooks</Breadcrumb.Section>
        <Breadcrumb.Divider icon="right chevron" />
        <Breadcrumb.Section link>All</Breadcrumb.Section>
      </Breadcrumb>
      <Input icon="search" placeholder="Search" />
    </div>
  </div>
);

export default Header;
