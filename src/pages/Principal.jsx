import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Customers } from '../pages/Customers';
import { News } from '../pages/News';
import { Contact } from '../pages/Contact';
import { Links } from '../pages/Links';

export default function Principal() {
  return (
   
    <>
      <Home />
      <About />
      <Services />
      <Customers />
      <Links />
      <News />
      <Contact />
    </>
  );
}