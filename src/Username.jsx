import React, { useRef } from "react"

export default function Username() {
  const [toggleQuestion, setToggleQuestion] = React.useState(true)
  const question = `This application should allow the user to update their username by inputting a custom value and
clicking the button.
The Username component is finished and should not be changed, but the App component is
missing parts. Finish the App component so that the Username component displays the inputted
text when the button is clicked.
For example, if the user inputs a new username of "John Doe" and clicks the button, App's div
element should look like this:
<div><button>Change Username</button><input Doe</hl></div>
There might be multiple App elements on the page.`

  const nameRef = useRef(null)
  const inputRef = useRef(null)

  function clickHandler() {
    nameRef.current.changeValue(inputRef.current.value)
  }
  return (
    <section>
      <span
        className="question"
        onClick={() => setToggleQuestion((question) => !question)}
      >
        Question
      </span>

      {toggleQuestion && <p>{question}</p>}

      {/* App component */}
      <div>
        <button className="btn-change" onClick={clickHandler}>
          Change UserName
        </button>
        <br />
        <input type="text" ref={inputRef} />
        <Name ref={nameRef} />
      </div>
    </section>
  )
}

class Name extends React.Component {
  state = { value: "" }

  changeValue(value) {
    console.log("Change value called")
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return <h1>{value}</h1>
  }
}
