import { useState } from "react"

const BrokenCounter = () => {
    const [number, setNumer] = useState(0)

    return (
        <>
        <h3>{number}</h3>
        <button onClick={() => {
            setNumer(number + 1)
            setNumer(number + 1)
            setNumer(number + 1)
        }}>
            + 3
        </button>
        </>
    )
}

const WorkingCounter = () => {
    const [number, setNumer] = useState(0)

    return (
        <>
        <h3>{number}</h3>
        <button onClick={() => {
            setNumer((n) => n + 1)
            setNumer((n) => n + 1)
            setNumer((n) => n + 1)
        }}>
            + 3
        </button>
        </>
    )
}

const Counters = () => {
   return (
   <>
    <h2>This Counter is Broken</h2>
    <BrokenCounter/>
    <h2>This Counter is Working</h2>
    <WorkingCounter/>
    </>
    )
}

export default Counters