import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Me from './../view/me/me'
import Picture from './../view/picture/picture'
import NotesLink from './../view/notesLinK/notesLink'

import HeaderBar from './../components/headerBar/header'

const BsaicRoute = () => (
  <BrowserRouter>
    <HeaderBar />
    <Switch>
      <Route exact path="/" component={Me}></Route>
      <Route exact path="/picture" component={Picture}></Route>
      <Route exact path="/notesLink" component={NotesLink}></Route>
    </Switch>
  </BrowserRouter>
)

export default BsaicRoute
