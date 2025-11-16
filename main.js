// Převod čísla mezi binární (2) a desítkovou (10) soustavou.

/**
 * Podle inputNumberSystem a outputNumberSystem provede převod.
 *
 * @param {string} inputNumber číslo k převodu (jako string)
 * @param {number} inputNumberSystem soustava vstupu (2 nebo 10)
 * @param {number} outputNumberSystem soustava výstupu (2 nebo 10)
 * @returns {string} převedené číslo jako string
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (!permittedInputSystems().includes(inputNumberSystem)) return null;
  if (!permittedOutputSystems().includes(outputNumberSystem)) return null;

  if (inputNumberSystem === outputNumberSystem) {
    return String(inputNumber);
  }

  if (inputNumberSystem === 2 && outputNumberSystem === 10) {
    return binarniNaDesitkove(inputNumber);
  }

  if (inputNumberSystem === 10 && outputNumberSystem === 2) {
    return desitkoveNaBinarni(inputNumber);
  }

  return null; // fallback (testování miluje bezpečný výstup)
}

function binarniNaDesitkove(binarniCislo) {
  let vysledek = 0;
  let mocnina = 1;

  for (let i = binarniCislo.length - 1; i >= 0; i--) {
    const cifra = binarniCislo[i];

    if (cifra !== "0" && cifra !== "1") {
      return null;
    }

    if (cifra === "1") {
      vysledek += mocnina;
    }

    mocnina *= 2;
  }

  return String(vysledek);
}

/**
 * Převod desítkového čísla (string) na binární (string).
 */
function desitkoveNaBinarni(desitkoveCislo) {
  let cislo = Number(desitkoveCislo);

  if (isNaN(cislo) || cislo < 0) return null;

  if (cislo === 0) return "0";

  let vysledek = "";

  while (cislo > 0) {
    const zbytek = cislo % 2;
    vysledek = zbytek + vysledek;
    cislo = (cislo - zbytek) / 2;
  }

  return vysledek;
}

export function permittedInputSystems() {
  return [2, 10];
}

export function permittedOutputSystems() {
  return [2, 10];
}
