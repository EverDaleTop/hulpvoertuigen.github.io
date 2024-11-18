const data = [
	['Adres 1', '32040', 'TO', 'Type Voertuige', 'km-4o3', 'bijzonder'],
	['Adres 2', '35033', 'TP', 'Type Voertuigedaf', 'dkq1p=ek', 'dafdafd'],
]

const table = document.getElementById('list_table')
const button = document.getElementById('search_button')
const input = document.getElementById('search_input')

/**
 *
 * @param {string} query
 * @param {Array<Array<string>>} dataset
 * @returns {Array<Array<string>>}
 */
function SearchTable(query, dataset) {
	const lowerQuery = query.toLowerCase()
	return dataset.filter((row) => row.some((field) => field.toLowerCase().includes(lowerQuery)))
}

function GenerateList(dataset) {
	$('#list_table tr:not(:has(th))').detach()
	for (let i = 0; i < dataset.length; i++) {
		let row = document.createElement('tr')
		table.appendChild(row)

		for (let j = 0; j < dataset[i].length; j++) {
			let cell = document.createElement('td')
			row.appendChild(cell)

			cell.textContent = dataset[i][j].toString()

			if ((i + 1) % 2 === 0) {
				row.classList.add('list_even')
			}
		}
	}
}

function UpdateList() {
	const result = SearchTable(input.value, data)
	GenerateList(result)
}

button.addEventListener('click', () => {
	UpdateList()
})

input.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		UpdateList()
	}
})

UpdateList()
