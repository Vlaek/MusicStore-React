import { FC, useEffect, useState } from 'react'

interface CounterProps {
	value: number
	duration: number
}

const Counter: FC<CounterProps> = ({ value, duration }) => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			if (count < value) {
				const str = String(value - count)
				if (str.length >= 7) setCount(count + 1000000)
				else if (str.length >= 5) setCount(count + 10000)
				else if (str.length >= 3) setCount(count + 100)
				else setCount(count + 1)
			} else {
				clearInterval(interval)
			}
		}, duration / value)

		return () => clearInterval(interval)
	}, [count, value, duration])

	return <div>{count}</div>
}

export default Counter
