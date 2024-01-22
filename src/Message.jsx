import React from "react"

export default function Message() {
  const [toggleQuestion, setToggleQuestion] = React.useState(true)
  const [toggleMessage, setToggleMessage] = React.useState(false)
  const question = `The Message component contains an anchor element and a paragraph below the anchor.
  Rendering of the paragraph should be toggled by clicking on the anchor element using the
  following logic:
  • At the start, the paragraph should not be rendered.
  • After a click, the paragraph should be rendered.
  • After another click, the paragraph should not be rendered.
  Finish the Message component by implementing this logic.`
  return (
    <React.Fragment>
      <section className="message-section">
        <span
          className="question"
          onClick={() => setToggleQuestion((question) => !question)}
        >
          Question
        </span>

        {toggleQuestion && <p>{question}</p>}
        <a onClick={() => setToggleMessage((message) => !message)}>
          Want to buy a new car?
        </a>
        {toggleMessage && <p>Call +11 22 33 44 now!</p>}
      </section>
    </React.Fragment>
  )
}

// document.body.innerHTML = "<div id='root'></div>"
// const root = createRoot(document.getElementById("root"))

// root.render(<Message />)
// const rootElement = document.getElementById("root")
// setTimeout(() => {
//   console.log("Before click: " + rootElement.innerHTML)

//   document.querySelector("a").click()
//   setTimeout(() => {
//     console.log("After click: " + rootElement.innerHTML)
//   })
// })
