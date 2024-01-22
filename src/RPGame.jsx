import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function RPGame({ totalPoints }) {
  const question = `An RPG game lets you assign points to various attributes of your character to improve it. The points
    earned by the character are available to assign across all attributes. Each attribute can only be
    assigned at most 70% of totalPoints (rounded down to the nearest integer) unless totalPoints is 1, in
    which case only one attribute can get a maximum of I point. The sum of all points assigned plus the
    points remaining should add up to totalPoints.
    Implement the CharacterAttributes component with the logic described above and the following
    requirements:
    1. Points should be assigned by moving the slider and the remaining points should be displayed
    in the span tag.
    2. When initialized, all points are available and all sliders start at O.
    3.  Each slider must have a range from O up to totalPoints.
    For example, if totalPoints is 15 then the user shouldn't be able to drag the slider past 10 even if more
    points are available.`

  const [toggleQuestion, setToggleQuestion] = useState(true)
  const [health, setHealth] = useState(0)
  const [stamina, setStamina] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [pointsLeft, setPointsLeft] = useState(totalPoints)

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value: newValue } = event.target
    const maxAttributePoints =
      totalPoints === 1 ? 1 : Math.floor(totalPoints * 0.7)
    let updatedValue = Math.min(newValue, maxAttributePoints)
    let updatedPointsLeft = pointsLeft
    switch (name) {
      case "health":
        if (updatedValue > health) {
          if (pointsLeft === 0) return
          updatedPointsLeft -= updatedValue - health
        } else {
          updatedPointsLeft += health - updatedValue
        }
        setHealth(updatedValue)
        break

      case "stamina":
        if (updatedValue > stamina) {
          if (pointsLeft === 0) return
          updatedPointsLeft -= updatedValue - stamina
        } else {
          updatedPointsLeft += stamina - updatedValue
        }
        setStamina(updatedValue)
        break

      case "speed":
        if (updatedValue > speed) {
          if (pointsLeft === 0) return
          updatedPointsLeft -= updatedValue - speed
        } else {
          updatedPointsLeft += speed - updatedValue
        }
        setSpeed(updatedValue)
        break
      default:
        break
    }
    setPointsLeft(updatedPointsLeft)
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
      <div>
        <p>
          Character stats:<span id="points">{pointsLeft} </span>points left 🔢.
        </p>
        {/* health */}
        <div className="slider">
          <label>{health}</label>
          <input
            type="range"
            name="health"
            id="health"
            min="0"
            max={totalPoints}
            step="1"
            value={health}
            onChange={handleChange}
          />
          <label htmlFor="health">health 💗</label>
        </div>

        {/* stamina */}
        <div className="slider">
          <label>{stamina}</label>
          <input
            type="range"
            name="stamina"
            id="stamina"
            min="0"
            max={totalPoints}
            step="1"
            value={stamina}
            onChange={handleChange}
          />
          <label htmlFor="speed">stamina 🏃</label>
        </div>
        {/* speed */}
        <div className="slider">
          <label>{speed}</label>
          <input
            type="range"
            name="speed"
            id="speed"
            min="0"
            max={totalPoints}
            step="1"
            value={speed}
            onChange={handleChange}
          />
          <label htmlFor="speed">speed ⚡</label>
        </div>
      </div>
    </section>
  )
}
