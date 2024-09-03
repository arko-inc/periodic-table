

const elements = [
    { atomicNumber: 1, type: '', position: 'Period-1, Group- 01', name: 'Hydrogen' },
    { atomicNumber: 2, type: '', position: 'Period-1, Group- 18', name: 'Helium' },
    { atomicNumber: 3, type: '', position: 'Period-2, Group- 01', name: 'Lithium' },
    { atomicNumber: 4, type: '', position: 'Period-2, Group- 02', name: 'Beryllium' },
    { atomicNumber: 5, type: '', position: 'Period-2, Group- 13', name: 'Boron' },
    { atomicNumber: 6, type: '', position: 'Period-2, Group- 14', name: 'Carbon' },
    { atomicNumber: 7, type: '', position: 'Period-2, Group- 15', name: 'Nitrogen' },
    { atomicNumber: 8, type: '', position: 'Period-2, Group- 16', name: 'Oxygen' },
    { atomicNumber: 9, type: '', position: 'Period-2, Group- 17', name: 'Fluorine' },
    { atomicNumber: 10, type: '', position: 'Period-2, Group- 18', name: 'Neon' },
    { atomicNumber: 11, type: '', position: 'Period-3, Group- 01', name: 'Sodium' },
    { atomicNumber: 12, type: '', position: 'Period-3, Group- 02', name: 'Magnesium' },
    { atomicNumber: 13, type: '', position: 'Period-3, Group- 13', name: 'Aluminium' },
    { atomicNumber: 14, type: '', position: 'Period-3, Group- 14', name: 'Silicon' },
    { atomicNumber: 15, type: '', position: 'Period-3, Group- 15', name: 'Phosphorus' },
    { atomicNumber: 16, type: '', position: 'Period-3, Group- 16', name: 'Sulfur' },
    { atomicNumber: 17, type: '', position: 'Period-3, Group- 17', name: 'Chlorine' },
    { atomicNumber: 18, type: '', position: 'Period-3, Group- 18', name: 'Argon' },
    { atomicNumber: 19, type: '', position: 'Period-4, Group- 01', name: 'Potassium' },
    { atomicNumber: 20, type: '', position: 'Period-4, Group- 02', name: 'Calcium' },
    { atomicNumber: 21, type: '', position: 'Period-4, Group- 03', name: 'Scandium' },
    { atomicNumber: 22, type: '', position: 'Period-4, Group- 04', name: 'Titanium' },
    { atomicNumber: 23, type: '', position: 'Period-4, Group- 05', name: 'Vanadium' },
    { atomicNumber: 24, type: '', position: 'Period-4, Group- 06', name: 'Chromium' },
    { atomicNumber: 25, type: '', position: 'Period-4, Group- 07', name: 'Manganese' },
    { atomicNumber: 26, type: '', position: 'Period-4, Group- 08', name: 'Iron' },
    { atomicNumber: 27, type: '', position: 'Period-4, Group- 09', name: 'Cobalt' },
    { atomicNumber: 28, type: '', position: 'Period-4, Group- 10', name: 'Nickel' },
    { atomicNumber: 29, type: '', position: 'Period-4, Group- 11', name: 'Copper' },
    { atomicNumber: 30, type: '', position: 'Period-4, Group- 12', name: 'Zinc' },
    { atomicNumber: 31, type: '', position: 'Period-4, Group- 13', name: 'Gallium' },
    { atomicNumber: 32, type: '', position: 'Period-4, Group- 14', name: 'Germanium' },
    { atomicNumber: 33, type: '', position: 'Period-4, Group- 15', name: 'Arsenic' },
    { atomicNumber: 34, type: '', position: 'Period-4, Group- 16', name: 'Selenium' },
    { atomicNumber: 35, type: '', position: 'Period-4, Group- 17', name: 'Bromine' },
    { atomicNumber: 36, type: '', position: 'Period-4, Group- 18', name: 'Krypton' },
    { atomicNumber: 37, type: '', position: 'Period-5, Group- 01', name: 'Rubidium' },
    { atomicNumber: 38, type: '', position: 'Period-5, Group- 02', name: 'Strontium' },
    { atomicNumber: 39, type: '', position: 'Period-5, Group- 03', name: 'Yttrium' },
    { atomicNumber: 40, type: '', position: 'Period-5, Group- 04', name: 'Zirconium' },
    { atomicNumber: 41, type: '', position: 'Period-5, Group- 05', name: 'Niobium' },
    { atomicNumber: 42, type: '', position: 'Period-5, Group- 06', name: 'Molybdenum' },
    { atomicNumber: 43, type: '', position: 'Period-5, Group- 07', name: 'Technetium' },
    { atomicNumber: 44, type: '', position: 'Period-5, Group- 08', name: 'Ruthenium' },
    { atomicNumber: 45, type: '', position: 'Period-5, Group- 09', name: 'Rhodium' },
    { atomicNumber: 46, type: '', position: 'Period-5, Group- 10', name: 'Palladium' },
    { atomicNumber: 47, type: '', position: 'Period-5, Group- 11', name: 'Silver' },
    { atomicNumber: 48, type: '', position: 'Period-5, Group- 12', name: 'Cadmium' },
    { atomicNumber: 49, type: '', position: 'Period-5, Group- 13', name: 'Indium' },
    { atomicNumber: 50, type: '', position: 'Period-5, Group- 14', name: 'Tin' },
    { atomicNumber: 51, type: '', position: 'Period-5, Group- 15', name: 'Antimony' },
    { atomicNumber: 52, type: '', position: 'Period-5, Group- 16', name: 'Tellurium' },
    { atomicNumber: 53, type: '', position: 'Period-5, Group- 17', name: 'Iodine' },
    { atomicNumber: 54, type: '', position: 'Period-5, Group- 18', name: 'Xenon' },
    { atomicNumber: 55, type: '', position: 'Period-6, Group- 01', name: 'Caesium' },
    { atomicNumber: 56, type: '', position: 'Period-6, Group- 02', name: 'Barium' },
    { atomicNumber: 57, type: '', position: 'Period-6, Group- 03', name: 'Lanthanum' },
    { atomicNumber: 58, type: '', position: 'Period-6, Group- 04', name: 'Cerium' },
    { atomicNumber: 59, type: '', position: 'Period-6, Group- 05', name: 'Praseodymium' },
    { atomicNumber: 60, type: '', position: 'Period-6, Group- 06', name: 'Neodymium' },
    { atomicNumber: 61, type: '', position: 'Period-6, Group- 7', name: 'Promethium' },
    { atomicNumber: 62, type: '', position: 'Period-6, Group- 08', name: 'Samarium' },
    { atomicNumber: 63, type: '', position: 'Period-6, Group- 09', name: 'Europium' },
    { atomicNumber: 64, type: '', position: 'Period-6, Group- 10', name: 'Gadolinium' },
    { atomicNumber: 65, type: '', position: 'Period-6, Group- 11', name: 'Terbium' },
    { atomicNumber: 66, type: '', position: 'Period-6, Group- 12', name: 'Dysprosium' },
    { atomicNumber: 67, type: '', position: 'Period-6, Group- 13', name: 'Holmium' },
    { atomicNumber: 68, type: '', position: 'Period-6, Group- 14', name: 'Erbium' },
    { atomicNumber: 69, type: '', position: 'Period-6, Group- 15', name: 'Thulium' },
    { atomicNumber: 70, type: '', position: 'Period-6, Group- 16', name: 'Ytterbium' },
    { atomicNumber: 71, type: '', position: 'Period-6, Group- 17', name: 'Lutetium' },
    { atomicNumber: 72, type: '', position: 'Period-6, Group- 04', name: 'Hafnium' },
    { atomicNumber: 73, type: '', position: 'Period-6, Group- 05', name: 'Tantalum' },
    { atomicNumber: 74, type: '', position: 'Period-6, Group- 06', name: 'Tungsten' },
    { atomicNumber: 75, type: '', position: 'Period-6, Group- 07', name: 'Rhenium' },
    { atomicNumber: 76, type: '', position: 'Period-6, Group- 08', name: 'Osmium' },
    { atomicNumber: 77, type: '', position: 'Period-6, Group- 09', name: 'Iridium' },
    { atomicNumber: 78, type: '', position: 'Period-6, Group- 10', name: 'Platinum' },
    { atomicNumber: 79, type: '', position: 'Period-6, Group- 11', name: 'Gold' },
    { atomicNumber: 80, type: '', position: 'Period-6, Group- 12', name: 'Mercury' },
    { atomicNumber: 81, type: '', position: 'Period-6, Group- 13', name: 'Thallium' },
    { atomicNumber: 82, type: '', position: 'Period-6, Group- 14', name: 'Lead' },
    { atomicNumber: 83, type: '', position: 'Period-6, Group- 15', name: 'Bismuth' },
    { atomicNumber: 84, type: '', position: 'Period-6, Group- 16', name: 'Polonium' },
    { atomicNumber: 85, type: '', position: 'Period-6, Group- 17', name: 'Astatine' },
    { atomicNumber: 86, type: '', position: 'Period-6, Group- 18', name: 'Radon' },
    { atomicNumber: 87, type: '', position: 'Period-7, Group- 01', name: 'Francium' },
    { atomicNumber: 88, type: '', position: 'Period-7, Group- 02', name: 'Radium' },
    { atomicNumber: 89, type: '', position: 'Period-7, Group- 03', name: 'Actinium' },
    { atomicNumber: 90, type: '', position: 'Period-7, Group- 04', name: 'Thorium' },
    { atomicNumber: 91, type: '', position: 'Period-7, Group- 05', name: 'Protactinium' },
    { atomicNumber: 92, type: '', position: 'Period-7, Group- 06', name: 'Uranium' },
    { atomicNumber: 93, type: '', position: 'Period-7, Group- 07', name: 'Neptunium' },
    { atomicNumber: 94, type: '', position: 'Period-7, Group- 08', name: 'Plutonium' },
    { atomicNumber: 95, type: '', position: 'Period-7, Group- 09', name: 'Americium' },
    { atomicNumber: 96, type: '', position: 'Period-7, Group- 10', name: 'Curium' },
    { atomicNumber: 97, type: '', position: 'Period-7, Group- 11', name: 'Berkelium' },
    { atomicNumber: 98, type: '', position: 'Period-7, Group- 12', name: 'Californium' },
    { atomicNumber: 99, type: '', position: 'Period-7, Group- 13', name: 'Einsteinium' },
    { atomicNumber: 100, type: '', position: 'Period-7, Group- 14', name: 'Fermium' },
    { atomicNumber: 101, type: '', position: 'Period-7, Group- 15', name: 'Mendelevium' },
    { atomicNumber: 102, type: '', position: 'Period-7, Group- 16', name: 'Nobelium' },
    { atomicNumber: 103, type: '', position: 'Period-7, Group- 17', name: 'Lawrencium' },
    { atomicNumber: 104, type: '', position: 'Period-7, Group- 04', name: 'Rutherfordium' },
    { atomicNumber: 105, type: '', position: 'Period-7, Group- 05', name: 'Dubnium' },
    { atomicNumber: 106, type: '', position: 'Period-7, Group- 06', name: 'Seaborgium' },
    { atomicNumber: 107, type: '', position: 'Period-7, Group- 07', name: 'Bohrium' },
    { atomicNumber: 108, type: '', position: 'Period-7, Group- 08', name: 'Hassium' },
    { atomicNumber: 109, type: '', position: 'Period-7, Group- 09', name: 'Meitnerium' },
    { atomicNumber: 110, type: '', position: 'Period-7, Group- 10', name: 'Darmstadtium' },
    { atomicNumber: 111, type: '', position: 'Period-7, Group- 11', name: 'Roentgenium' },
    { atomicNumber: 112, type: '', position: 'Period-7, Group- 12', name: 'Copernicium' },
    { atomicNumber: 113, type: '', position: 'Period-7, Group- 13', name: 'Nihonium' },
    { atomicNumber: 114, type: '', position: 'Period-7, Group- 14', name: 'Flerovium' },
    { atomicNumber: 115, type: '', position: 'Period-7, Group- 15', name: 'Moscovium' },
    { atomicNumber: 116, type: '', position: 'Period-7, Group- 16', name: 'Livermorium' },
    { atomicNumber: 117, type: '', position: 'Period-7, Group- 17', name: 'Tennessine' },
    { atomicNumber: 118, type: '', position: 'Period-7, Group- 18', name: 'Oganesson' }
];



function findElement() {
   
    const atomicNumber = parseInt(document.getElementById('atomicNumber').value);

 
    const element = elements.find(el => el.atomicNumber === atomicNumber);

    if (element) {
        document.getElementById('result').innerText = `Element: ${element.name}, Position: ${element.position}`;
    } else {
        document.getElementById('result').innerText = 'Element not found';
    }
}
 
 document.getElementById('atomicNumber').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        findElement(); 
    }
});