const usedCommandRecently = new Set() // Isso é o anti flood

const isFiltered = (from) => !!usedCommandRecently.has(from)

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) // Espera 5 segundos antes de usar el comando mamahuevo sapo culiao, 5000 = 5 segundos, pou
}

module.exports = {
    isFiltered,
    addFilter
}
