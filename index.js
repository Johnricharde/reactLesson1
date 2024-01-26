/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/
/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}



function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" alt="React Logo" width="40px" />
            </nav>
        </header>
    )
}
function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>I can begin working on my personal project</li>
                <li>I can learn something new</li>
                <li>I can be more efficient by using React</li>
            </ol>
        </div>
    )
}
function Footer() {
    return (
        <footer>
            <small>© 2024 Espedal development. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))