import bulmaLogo from "../made-with-bulma.png"

const Footer = (props) => (
  <footer className='footer'>
    <div className='content has-text-centered'>
      <a href='https://bulma.io'>
        <img src={bulmaLogo} alt='Made with Bulma' width='128' height='24' />
      </a>
    </div>
  </footer>
)

export default Footer
