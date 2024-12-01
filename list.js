const LijstNederland = [
	{
		Adres: 'Lichtenvoorde',
		Roepnaam: 'd',
		TypeVoertuig: 'asd',
		TypeVoer: 'en',
		Kenteken: 'dkflma',
		Bijzonderheden: 'dklma',
		Hulpdienst: 'Brandweer',
		Regio: '4',
	},
	{
		Adres: 'dfam',
		Roepnaam: 'dwir',
		TypeVoertuig: 'rpgo',
		TypeVoer: 'en',
		Kenteken: 'fkvm',
		Bijzonderheden: 'cmk',
		Hulpdienst: 'Politie',
		Regio: '2',
	},
	{
		Adres: 'rowp',
		Roepnaam: 'ffgfg',
		TypeVoertuig: 'sad',
		TypeVoer: 'en',
		Kenteken: 'tpywi',
		Bijzonderheden: 'mxvn',
		Hulpdienst: 'Politie',
		Regio: '1',
	},
]

const table = document.getElementById('list_table')
const input = document.getElementById('search_input')
const hulpdienst = document.getElementById('hulpdienst-dropdown')
const regio = document.getElementById('regios-dropdown')

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

function FilterTable(dataset, filter, query) {
	return dataset.filter((item) => filter === 'all' || item[query] === filter)
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
			if (key === 'Hulpdienst' || key === 'Regio') continue

			const cell = document.createElement('td')
			cell.textContent = dataset[i][key]
			row.appendChild(cell)
		}

		// Append the row to the table
		table.appendChild(row)
	}
}

function UpdateList() {
	const filtered = FilterTable(LijstNederland, regio.value, 'Regio')
	const finalFilter = FilterTable(filtered, hulpdienst.value, 'Hulpdienst')
	const result = SearchTable(input.value, finalFilter)
	GenerateList(result)
}

input.addEventListener('input', UpdateList)
regio.addEventListener('change', UpdateList)
hulpdienst.addEventListener('change', UpdateList)

UpdateList()
