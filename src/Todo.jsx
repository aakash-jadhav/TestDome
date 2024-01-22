/* eslint-disable react/prop-types */
import React from "react"

export default function Todo(props) {
  const [toggleQuestion, setToggleQuestion] = React.useState(true)

  const question = `Write a TodoList component that expects an items prop which is a list of objects, each with
    text and done properties.
    TodoList also accepts an onltemClick function prop, which should be called when a user clicks an
    item in the list, if the item is not marked as done. Otherwise, the onltemClick should not be called
    and the click event itself should not be propagated further. The function should be called with the
    item object from the items list as the first parameter and the event as the second parameter.`

  return (
    <section>
      <span
        className="question"
        onClick={() => setToggleQuestion((question) => !question)}
      >
        Question
      </span>

      {toggleQuestion && <p>{question}</p>}

      <TodoList
        items={props.items}
        onListClick={() => console.log("List clicked!")}
        onItemClick={(item) => {
          console.log(item)
        }}
      />
    </section>
  )
}

const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

const TodoList = ({ items, onItemClick }) => {
  const handleItemClick = (item, event) => {
    // Write your code here

    if (!item.done) onItemClick(item, event)
  }

  return (
    <ul>
      {items.map((item, index) => (
        <TodoItem
          item={item}
          key={index}
          onClick={(event) => handleItemClick(item, event)}
        />
      ))}
    </ul>
  )
}
