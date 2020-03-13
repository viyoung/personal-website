import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Me from '../components/me/me'
import Picture from './../view/picture/picture'
import NotesLink from './../view/notesLinK/notesLink'

import HeaderBar from './../components/headerBar/header'
import Footer from './../components/footer/footer'

const BsaicRoute = () => (
  <BrowserRouter>
    <HeaderBar />
    <Me />
    <Switch>
      <Route exact path="/" component={Picture}></Route>
      <Route exact path="/notesLink" component={NotesLink}></Route>
    </Switch>
    <Footer />
  </BrowserRouter>
)

export default BsaicRoute
