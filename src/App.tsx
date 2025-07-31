import { Colors } from "./components/organisms/colors/colors.component";
import { Invitation } from "./components/organisms/invitation/invitation.component";
import { Header } from "./components/organisms/header/header.component";
import { Hero } from "./components/organisms/hero/hero.component";
import { Details } from "./components/organisms/details/details.component";
import { Plan } from "./components/organisms/plan/plan";
import { Presents } from "./components/organisms/presents/presents";

import img from './assets/full.jpg'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Invitation />
        <Details />
        <img src={img} className="full"/>
        <Plan />
        <Colors />
        <Presents />
      </main>
    </>
  );
}

export default App;
