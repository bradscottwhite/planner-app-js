import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { Tasks } from './Tasks'

const variants = {
	closed: { opacity: 0 },
	open: { opacity: 1 }
}

/**
 * Displays card to house tasks and add task button
 * @param {json} tasks
 * @param {string} cardName
 * @param {sttring} cardKey
 * @returns {jsx}
 */
export const Card = ({ tasks, cardName, cardKey }) => (
	<motion.div
		variants={variants}
		exit='closed'
		className='flex-none w-80 bg-slate-300 shadow-lg rounded p-6 mx-3 h-min'
	>
		<h3 className='text-xl font-semibold'>{cardName}</h3>
		<div>
			{/* Displays tasks for card: */}
			<Tasks tasks={tasks} />
			<Link
				className='add grid grid-row-1 place-items-center'
				to={`/addTask/${cardKey}`}
			>
				<ion-icon name="add-outline"></ion-icon>
			</Link>
		</div>
	</motion.div>
);
