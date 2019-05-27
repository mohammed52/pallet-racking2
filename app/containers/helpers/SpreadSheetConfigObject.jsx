export default {
    config : {
      // Initial number of row 
      rows: 5,
      // Initial number of columns 
      columns: 8,
      // True if the first column in each row is a header (th) 
      hasHeadColumn: true,
      // True if the data for the first column is just a string. 
      // Set to false if you want to pass custom DOM elements. 
      isHeadColumnString: true,
      // True if the first row is a header (th) 
      hasHeadRow: true,
      // True if the data for the cells in the first row contains strings. 
      // Set to false if you want to pass custom DOM elements. 
      isHeadRowString: true,
      // True if the user can add rows (by navigating down from the last row) 
      canAddRow: true,
      // True if the user can add columns (by navigating right from the last column) 
      canAddColumn: true,
      // Override the display value for an empty cell 
      emptyValueSymbol: '-',
      // Fills the first column with index numbers (1...n) and the first row with index letters (A...ZZZ) 
      hasLetterNumberHeads: true
  }
};
