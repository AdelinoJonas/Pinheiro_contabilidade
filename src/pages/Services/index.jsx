import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Reveal } from "../../utils/Reveal";
import * as Sc from './styles';

export function Services() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Sc.Container theme={theme} >
      <div className="mktBox">
        <div className="mktItem">
          <div className="image">

          <Sc.Company/> 
          </div>
          <span>Já sem sua empresa?</span> 
          <p>Fazemos sua contabilidade</p>
        </div>
        <div className="mktMiddleItem">
          <div className="image">

          <Sc.Business/>
          </div>
          <span>Deseja abrir sua empresa?</span> 
          <p>Te explicamos e cuidamos de tudo pra você</p>
        </div>
        <div className="mktItem">
          <div className="image">

          <Sc.AlterCompany/>
          </div>
          <span>Sua empresa é MEI?</span> 
          <p>Transformamos MEI em ME</p>
        </div>
      </div>
      <Reveal >
        <div className='title' >
          <h1>PRINCIPAIS SERVIÇOS</h1>
        </div>
      </Reveal>
        
      <Reveal >
        <section className="serviceContainer">
          <div className="accounting">

          </div>
          <div className="control">

          </div>
          <div className="pD">

          </div>
          <div className="society">

          </div>
          <div className="openCompany">

          </div>
          <div className="accountingIntegration">
            
          </div>

        </section>
      </Reveal>
    </Sc.Container>
  );
}