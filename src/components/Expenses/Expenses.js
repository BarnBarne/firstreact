import React, { useState } from 'react'

import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2020')

	
	const chooseYearHandler = chosenYear => {
		setFilteredYear(chosenYear)
	}

	const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChooseYear={chooseYearHandler} />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses
