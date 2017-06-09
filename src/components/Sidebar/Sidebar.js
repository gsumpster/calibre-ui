import React from 'react';

import { List } from 'semantic-ui-react';

import css from './Sidebar.css';

const Sidebar = () => (
  <div className={css.sidebar}>
    <h5>Library</h5>
    <List>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <rect x="3" y="3" width="7" height="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
            <rect x="14" y="3" width="7" height="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
            <rect x="14" y="14" width="7" height="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
            <rect x="3" y="14" width="7" height="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>All</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="7" r="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>Author</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>Languages</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>Series</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>Formats</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>Publisher</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>Rating</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>News</List.Content>
      </List.Item>
      <List.Item className={css.listItem}>
        <List.Icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={css.icon}>
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7" y2="7" />
          </svg>
        </List.Icon>
        <List.Content className={css.content}>Tags</List.Content>
      </List.Item>
    </List>
  </div>
);

export default Sidebar;
