import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Clientes from '../components/content/Clientes'
import Dialise from '../components/content/Dialise'
import Contato from '../components/content/Contato'
import Empresa from '../components/content/Empresa'
import Home from '../components/content/Home'

const Content = () => {
    return (
        <main>
            <Switch>
            <Route path="/Home">
                    <Home />
                    </Route>
                <Route path="/Empresa">
                    <Empresa />
                    </Route>
                    <Route path="/Dialise">
                    <Dialise/>
                    </Route>
                    <Route path="/Clientes">
                    <Clientes/>
                    </Route>
                    <Route path="/Contato">
                    <Contato/>
                    </Route>
                    
                
            </Switch>
        </main>
    )
} 
export default Content