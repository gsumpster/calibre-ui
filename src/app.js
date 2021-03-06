// ----------------------
// IMPORTS

// React
import React from 'react';
import PropTypes from 'prop-types';

// GraphQL
import { gql, graphql } from 'react-apollo';

// Routing
import {
  Link,
  Route,
  Switch,
} from 'react-router-dom';

// <Helmet> component for setting the page title
import Helmet from 'react-helmet';

// Helper to merge expected React PropTypes to Apollo-enabled component
import { mergeData } from 'kit/lib/apollo';

// NotFound 404 handler for unknown routes
import { NotFound, Redirect } from 'kit/lib/routing';

import Header from 'src/components/Header/Header';

// Styles
import './styles.global.css';
import Book from 'src/components/Book/Book';
import Sidebar from 'src/components/Sidebar/Sidebar';
import css from './styles.css';
import sass from './styles.scss';
import less from './styles.less';


// Get the ReactQL logo.  This is a local .svg file, which will be made
// available as a string relative to [root]/dist/assets/img/
import logo from './reactql-logo.svg';


// ----------------------

// We'll display this <Home> component when we're on the / route
const Home = () => (
  <h1>You&apos;re on the home page - click another link above</h1>
);

// Helper component that will be conditionally shown when the route matches.
// This gives you an idea how React Router v4 works
const Page = ({ match }) => (
  <h1>Changed route: {match.params.name}</h1>
);

// Create a route that will be displayed when the code isn't found
const WhenNotFound = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

// Specify PropTypes if the `match` object, which is injected to props by
// the <Route> component
Page.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

// Stats pulled from the environment.  This demonstrates how data will
// change depending where we're running the code (environment vars, etc)
// and also how we can connect a 'vanilla' React component to an RxJS
// observable source, and feed eventual values in as properties
const Stats = () => {
  const info = [
    ['Environment', process.env.NODE_ENV],
  ];

  return (
    <ul className={css.data}>
      {info.map(([key, val]) => (
        <li key={key}>{key}: <span>{val}</span></li>
      ))}
    </ul>
  );
};

// Now, let's create a GraphQL-enabled component...

// First, create the GraphQL query that we'll use to request data from our
// sample endpoint
const query = gql`
  query {
    books {
      title
      cover
      author {
        name
      }
    }
  }
`;

// ... then, let's create the component and decorate it with the `graphql`
// HOC that will automatically populate `this.props` with the query data
// once the GraphQL API request has been completed
@graphql(query)
class GraphQLMessage extends React.PureComponent {
  static propTypes = {
    data: mergeData({
      books: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }),
      ),
    }),
  }

  render() {
    const { data } = this.props;
    const message = data.books;
    const isLoading = data.loading;
    return (
      <div className={css.books}>
        {!isLoading && data.books.slice(0,7).map(book => <Book book={book} />)}
      </div>
    );
  }
}

// Export a simple component that allows clicking on list items to change
// the route, along with a <Route> 'listener' that will conditionally display
// the <Page> component based on the route name
export default () => (
  <div>
    <Helmet
      title="ReactQL application"
      meta={[{
        name: 'description',
        content: 'ReactQL starter kit app',
      }]} />
    <Header />
    <Sidebar />
    <GraphQLMessage />
  </div>
);
