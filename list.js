const LijstNederland = [
	{
		Adres: 'Lichtenvoorde',
		Roepnaam: 'd',
		TypeVoertuig: 'asd',
		TypeVoer: 'en',
		Kenteken: 'dkflma',
		Bijzonderheden: 'dklma',
		Hulpdienst: 'Brandweer',
	},
	{
		Adres: 'dfam',
		Roepnaam: 'dwir',
		TypeVoertuig: 'rpgo',
		TypeVoer: 'en',
		Kenteken: 'fkvm',
		Bijzonderheden: 'cmk',
		Hulpdienst: 'Politie',
	},
	{
		Adres: 'rowp',
		Roepnaam: 'ffgfg',
		TypeVoertuig: 'sad',
		TypeVoer: 'en',
		Kenteken: 'tpywi',
		Bijzonderheden: 'mxvn',
		Hulpdienst: 'Politie',
	},
]

const table = document.getElementById('list_table')
// const button = document.getElementById('search_button')
const input = document.getElementById('search_input')
const hulpdienst = document.getElementById('hulpdienst-dropdown')

/**
 * Searches through a dataset of objects for a query string.
 *
 * @param {string} query - The search query.
 * @param {Array<Object>} dataset - The dataset to search through, an array of objects.
 * @returns {Array<Object>} - The filtered dataset with matching objects.
 */
function SearchTable(query, dataset) {
	const lowerQuery = query.toLowerCase()

	return dataset.filter((row) => Object.values(row).some((field) => String(field).toLowerCase().includes(lowerQuery)))
}

function FilterTable(dataset) {
	const filter = hulpdienst.value
	return dataset.filter((item) => filter === 'all' || item.Hulpdienst === filter)
}

/**
 * Generates a table from a dataset of objects.
 *
 * @param {Array<Object>} dataset - The dataset to render as a table.
 */
function GenerateList(dataset) {
	// Clear existing rows, keeping the header
	if (dataset.length === 0) {
		return
	}

	const table = document.getElementById('list_table')
	const rows = table.querySelectorAll('tr:not(:has(th))')
	rows.forEach((row) => row.remove())

	// Iterate through the dataset
	for (let i = 0; i < dataset.length; i++) {
		// Create a new table row
		const row = document.createElement('tr')

		// Add a class for even rows for styling
		if ((i + 1) % 2 === 0) {
			row.classList.add('list_even')
		}

		// Append cells for each object value
		for (const key in dataset[i]) {
			if (key === 'Hulpdienst') continue

			const cell = document.createElement('td')
			cell.textContent = dataset[i][key]
			row.appendChild(cell)
		}

		// Append the row to the table
		table.appendChild(row)
	}
}

function UpdateList() {
	console.log(LijstNederland)
	const filtered = FilterTable(LijstNederland)
	const result = SearchTable(input.value, filtered)
	GenerateList(result)
}

input.addEventListener('input', UpdateList)
hulpdienst.addEventListener('change', UpdateList)

UpdateList()
