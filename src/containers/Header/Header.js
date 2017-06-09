import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import { mergeData } from 'kit/lib/apollo';

import css from './Header.css';

const query = gql`
  query {
    tags {
      name
    }
  }
`;

@graphql(query)
export class Header extends React.Component {
  static propTypes = {
    data: mergeData({
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
      ),
    }),
  }

  render() {
    const { data } = this.props;
    const tags = data.tags;
    const isLoading = data.loading;
    return (
      <div className={css.header}>
      </div>
    );
  }
}

export default Header;
