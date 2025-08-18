async function loadPrimeDB() {
    try {
        const response = await fetch('../../primes_db.json');
        const primeData = await response.json();

        console.log('Database loaded and ready for search.');
        return primeData;
    } catch (error) {
        console.error('Error loading database. May need to run "node main.js" first.', error);
        return null;
    }
}

export async function getPrimeIndex(number) {
    const primeDataBase = await loadPrimeDB();

    if (primeDataBase === null) {
        return "Database not loaded.";
    }

    const primeObj = primeDataBase.find(prime => prime.value === Number(number));
    if (primeObj) {
        return primeObj.index;
    } else {
        return `${number} is not in the database or is not a prime number.`;
    }
}