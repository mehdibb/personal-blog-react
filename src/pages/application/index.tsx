import React, { useCallback, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import 'normalize.css';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { Access, AccessContext, AccessType } from '../../lib/utilities';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from '../home';
import Resume from '../resume';


export default function App(): React.ReactElement {
  const [accessType, setAccessType] = useState<AccessType>(AccessType.User);

  const handleAccessButtonClick = useCallback(() => {
    setAccessType((previousAccessType) => {
      if (previousAccessType === AccessType.Admin) {
        return AccessType.User;
      }

      return AccessType.Admin;
    });
  }, []);

  const accessContext = useMemo((): Access => ({
    type: accessType,
  }), [accessType]);

  return (
    <>
      {/* Whole app wrapper with background color */}
      <AccessContext.Provider value={accessContext}>
        <div className="main_wrapper">
          <Container className="__container">
            <Navbar expand="lg" className="pt-4 pb-5">
              <Navbar.Brand href="/">
                Mehdi
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <Nav.Link href="/resume">Resume</Nav.Link>
                  <Nav.Link onClick={handleAccessButtonClick}>{accessContext.type === AccessType.Admin ? 'User' : 'Admin'}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Router>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/home'>
                          <Redirect to="/" />
                        </Route>
                        <Route path='/resume'>
                          <Resume />
                        </Route>
                        {/* <Route path='/posts/:id'>
                            <PostPage />
                        </Route> */}
                        <Route>
                            <p>404 Not Found</p>
                        </Route>
                    </Switch>
            </Router>
          </Container>
        </div>
      </AccessContext.Provider>
    </>
  );
}
