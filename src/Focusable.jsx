import React, { useRef, useEffect } from "react"

// eslint-disable-next-line react/prop-types
export default function Focusable({ shouldFocus }) {
  const [toggleQuestion, setToggleQuestion] = React.useState(true)
  const question = `Finish the Focusablelnput component so that the input element automatically receives focus on
    the first render if the shouldFocus prop is true.`

  const inputRef = useRef(null)
  useEffect(() => {
    if (shouldFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [shouldFocus])
  return (
    <section>
      <p
        className="question"
        onClick={() => setToggleQuestion((question) => !question)}
      >
        Question
      </p>
      {toggleQuestion && <p>{question}</p>}
      <input ref={inputRef} />
    </section>
  )
}
