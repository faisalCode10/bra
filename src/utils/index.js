export const calculateUKSize = (bustSize, bandSize) => {

    // Error handling for invalid inputs
    if (isNaN(bustSize) || isNaN(bandSize)) {
      return "Invalid Input";
    }
  
    bandSize = Math.ceil(bandSize / 2) * 2;
  
    let cupSize = bustSize - bandSize;
  
    let ukCupSize;
    switch (true) {
      case cupSize > 14:
        ukCupSize = "too large";
        break;
      case cupSize === 14:
        ukCupSize = "M";
        break;
      case cupSize === 13:
        ukCupSize = "L";
        break;
      case cupSize === 12:
        ukCupSize = "K";
        break;
      case cupSize === 11:
        ukCupSize = "J";
        break;
      case cupSize === 10:
        ukCupSize = "H";
        break;
      case cupSize === 9:
        ukCupSize = "G";
        break;
      case cupSize === 8:
        ukCupSize = "F";
        break;
      case cupSize === 7:
        ukCupSize = "E";
        break;
      case cupSize === 6:
        ukCupSize = "DD";
        break;
      case cupSize === 5:
        ukCupSize = "D";
        break;
      case cupSize === 4:
        ukCupSize = "C";
        break;
      case cupSize === 3:
        ukCupSize = "B";
        break;
      case cupSize === 2:
        ukCupSize = "A";
        break;
      case cupSize === 1:
        ukCupSize = "AA";
        break;
      default:
        ukCupSize = "Invalid Size"; // Handle cases below 1
        break;
    }
  
    // Calculate and return the UK Bra Size with proper spacing
    let ukBraSize = `${bandSize} ${ukCupSize}`;
    return ukBraSize;
  };
  

export function calculateSpainAndFranceSize(bustSize, bandSize) {
    // Calculate the difference in cm for cup size
    const cupDifference = bustSize - bandSize;

    // Determine cup size based on the difference in cm
    let spainCupSize;
    if (cupDifference >= 0 && cupDifference <= 5) {
        spainCupSize = 'A';
    } else if (cupDifference <= 6) {
        spainCupSize = 'B';
    } else if (cupDifference <= 8) {
        spainCupSize = 'C';
    } else if (cupDifference <= 10) {
        spainCupSize = 'D';
    } else if (cupDifference <= 12) {
        spainCupSize = 'DD/E';
    } else if (cupDifference <= 14) {
        spainCupSize = 'DDD/F';
    } else if (cupDifference <= 16) {
        spainCupSize = 'G';
    } else if (cupDifference <= 17) {
        spainCupSize = 'H';
    } else {
        spainCupSize = 'the difference is too high';
    }

    // Include band size in the result string
    const spainFranceBraSize = `${bandSize} ${spainCupSize}`;

    // Return the Spain/France Bra Size with proper spacing
    return spainFranceBraSize;
}

export const Eur = (bustSize, bandSize) => {

    // Calculate cup size
    let cupSize = bustSize - bandSize;

    // Determine cup size based on the difference
    let cupLetter = "";

    if (cupSize >= 0 && cupSize <= 9) {
        const cupSizes = ["AA", "A", "B", "C", "D", "DD or E", "DDD or F", "G", "H", "I"];
        cupLetter = cupSizes[cupSize];
    } else {
        // Handle invalid cup size cases
        cupLetter = "Unknown";
    }

    // Validate band size and adjust if necessary
    if (bandSize < 20 || bandSize > 50) {
        // Handle invalid band size cases
        return "Invalid band size";
    }

    // If cup size is negative, adjust band size
    if (cupSize < 0) {
        bandSize -= 1;
        cupSize += 10;
    }

    // Combine band size and cup size to get the final bra size
    let braSize = `${bandSize}${cupLetter}`;

    // Return the calculated bra size
    return braSize;
};

// // Test cases for Euro
// console.log(Eur(30, 30));  // Output: "30AA"
// console.log(Eur(38, 34));  // Output: "34C"
// console.log(Eur(40, 36));  // Output: "36C"
// console.log(Eur(42, 38));  // Output: "38C"
// console.log(Eur(44, 40));  // Output: "40C"
// console.log(Eur(20, 20));  // Output: "20AA"
// console.log(Eur(46, 42));  // Output: "42C"



export const calculateUSA = (bustSize, bandSize) => {


    let cupSize = bustSize - bandSize;

    let usaBandSize;
    switch (true) {
        case cupSize === 0:
            usaBandSize = ['AA'];
            break;
        case cupSize === 1:
            usaBandSize = ['A'];
            break;
        case cupSize === 2:
            usaBandSize = ['B'];
            break;
        case cupSize === 3:
            usaBandSize = ['C'];
            break;
        case cupSize === 4:
            usaBandSize = ['D'];
            break;
        case cupSize === 5:
            usaBandSize = ['DD', 'E'];
            break;
        case cupSize === 6:
            usaBandSize = ['DDD', 'F'];
            break;
        case cupSize === 7:
            usaBandSize = ['DDDD', 'G'];
            break;
    }

    let usaBraSize = `${bandSize} ${usaBandSize}`;
    return usaBraSize;
};






export const calculateAusNzSize = (bustSize, bandSize) => {

    let cupSize = bustSize - bandSize;
    let AusNzBandSize;

    switch (true) {
        case cupSize >= 0 && cupSize <= 1:
            AusNzBandSize = "AA";
            break;
        case cupSize > 1 && cupSize <= 2:
            AusNzBandSize = "A";
            break;
        case cupSize > 2 && cupSize <= 3:
            AusNzBandSize = "B";
            break;
        case cupSize > 3 && cupSize <= 4:
            AusNzBandSize = "C";
            break;
        case cupSize > 4 && cupSize <= 5:
            AusNzBandSize = "D";
            break;
        case cupSize > 5 && cupSize <= 6:
            AusNzBandSize = "DD";
            break;
        case cupSize > 6 && cupSize <= 7:
            AusNzBandSize = "E";
            break;
        case cupSize > 7 && cupSize <= 8:
            AusNzBandSize = "F";
            break;
        case cupSize > 8 && cupSize <= 9:
            AusNzBandSize = "FF";
            break;
        case cupSize > 9 && cupSize <= 10:
            AusNzBandSize = "G";
            break;
        case cupSize > 10 && cupSize <= 11:
            AusNzBandSize = "GG";
            break;
        case cupSize > 11 && cupSize <= 12:
            AusNzBandSize = "H";
            break;
        case cupSize > 12 && cupSize <= 13:
            AusNzBandSize = "HH";
            break;
        case cupSize > 13 && cupSize <= 14:
            AusNzBandSize = "J";
            break;
        case cupSize > 14 && cupSize <= 15:
            AusNzBandSize = "JJ";
            break;
        case cupSize > 15 && cupSize <= 16:
            AusNzBandSize = "K";
            break;
        case cupSize > 16 && cupSize <= 17:
            AusNzBandSize = "KK";
            break;
        default:
            AusNzBandSize = "Invalid Cup Size";
    }

    let size = `${bandSize} ${AusNzBandSize}`;
    return size;
};


export const calculateChinaKoreaSize = (bustSize, bandSize) => {
    let cupSize = bustSize - bandSize;
    let chnKorBraSize;

    switch (true) {
        case cupSize >= 0 && cupSize <= 1:
            chnKorBraSize = "A";
            break;
        case cupSize > 1 && cupSize <= 2:
            chnKorBraSize = "B";
            break;
        case cupSize > 2 && cupSize <= 3:
            chnKorBraSize = "C";
            break;
        case cupSize > 3 && cupSize <= 4:
            chnKorBraSize = "D";
            break;
        case cupSize > 4 && cupSize <= 5:
            chnKorBraSize = "DD OR E";
            break;
        case cupSize > 5 && cupSize <= 6:
            chnKorBraSize = "DDD OR F";
            break;
        case cupSize > 6 && cupSize <= 7:
            chnKorBraSize = "G";
            break;
        case cupSize > 7 && cupSize <= 8:
            chnKorBraSize = "H";
            break;
        case cupSize > 8 && cupSize <= 9:
            chnKorBraSize = "I";
            break;
        case cupSize > 9 && cupSize <= 10:
            chnKorBraSize = "J";
            break;
        default:
            chnKorBraSize = "Invalid Cup Size";
    }

    let size = `${bandSize} ${chnKorBraSize}`;
    return size;
};








