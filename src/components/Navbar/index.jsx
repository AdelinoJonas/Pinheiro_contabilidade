import * as Sc from './styles';

export function Navbar() {

  return (
    <Sc.Container>
      <h1>
        Sobre nós <img src="#" alt="toggle theme" />
      </h1>
      <button onClick={() => setIsDarkTheme(!isDarkTheme)}>theme</button>
    </Sc.Container>
  )
}
