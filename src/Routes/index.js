import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pictures from './Pictures';

import Profile from './Profile';
import Members from './Members';
import React, {useContext} from 'react';
import {AuthContext} from "../Context/AuthContext";
import Page from "../Templates/Page";
import Bio from "./Bio";
import {PhotoObjectsProvider} from "../Templates/PhotoObjects/Context/PhotoObjectsContext";

export const ALL_ROUTES = [
  {
    url: '/',
    title: null,
    comp: <Home />
  },
  {
    url: '/bio',
    title: 'Bio',
    comp: <Bio />
  },
  {
    url: '/pictures',
    title: 'Pictures',
    comp: <PhotoObjectsProvider><Pictures /></PhotoObjectsProvider>
  },
];

export const AUTHED_MENU = [
  {
    url: '/profile',
    title: 'Profile',
    comp: <Profile />,
  },
];

export const NOT_AUTHED_MENU = [
  {
    url: '/members',
    title: 'Members',
    comp: <Members />,
  },
];
const Routes = () => {

  const { isAuthed } = useContext(AuthContext);
  return (
    <Switch>
      {ALL_ROUTES.map( (route, key) => (
        <Route exact path={route.url} key={key}>
          <Page title={route.title}>
            { route.comp }
          </Page>
        </Route>
      ))}
      {isAuthed && AUTHED_MENU.map( (route, key) => (
        <Route exact path={route.url} key={key}>
          <Page title={route.title}>
            { route.comp }
          </Page>
        </Route>
      ))}
      {!isAuthed && NOT_AUTHED_MENU.map( (route, key) => (
        <Route exact path={route.url} key={key}>
          <Page title={route.title}>
            { route.comp }
          </Page>
        </Route>
      ))}
    </Switch>
  );
}

export default Routes;