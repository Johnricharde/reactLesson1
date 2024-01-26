/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function OrderedList() {
    return (
        <ol>
            <li>I can begin working on my personal project</li>
            <li>I can learn something new</li>
            <li>I can be more efficient by using React</li>
        </ol>
    )
}

ReactDOM.render(<OrderedList />, document.getElementById("root"))