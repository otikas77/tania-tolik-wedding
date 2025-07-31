import { Colors } from "./components/organisms/colors/colors.component";
import { Invitation } from "./components/organisms/invitation/invitation.component";
import { Header } from "./components/organisms/header/header.component";
import { Hero } from "./components/organisms/hero/hero.component";
import { Details } from "./components/organisms/details/details.component";
import { Plan } from "./components/organisms/plan/plan";
import { Presents } from "./components/organisms/presents/presents";
import { Footer } from "./components/organisms/footer/footer";

import plug from './assets/plug.jpg';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Invitation />
        <Details />
        <Plan />
        <img  className='plug' src={plug} alt='plug' />
        <Colors />
        <Presents />
        <Footer />
      </main>
    </>
  );
}

export default App;
