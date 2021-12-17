import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Beneficios from '../pages/Beneficios/Beneficios'
import Doar from '../pages/Doar/Doar'
import Perguntas from '../pages/Perguntas/Perguntas'

function Rotas() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />                
          <Route path="/beneficios" component={Beneficios} /> 
          <Route path="/doar" component={Doar} /> 
          <Route path="/perguntas" component={Perguntas} />        
        </Switch>  
      </BrowserRouter>
    )
}

export default Rotas