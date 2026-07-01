// Dataset with exactly 10 employee records
const employees = [
    { name: "Sano Arsene", grossSalary: 850000, deductions: 120000 },
    { name: "Alice Umutoni", grossSalary: 720000, deductions: 95000 },
    { name: "Kevine Iradukunda", grossSalary: 980000, deductions: 150000 },
    { name: "Jean Luc Cyusa", grossSalary: 600000, deductions: 70000 },
    { name: "Divine Mutoni", grossSalary: 650000, deductions: 75000 },
    { name: "Patrick Ishimwe", grossSalary: 1200000, deductions: 210000 },
    { name: "Clarisse Uwase", grossSalary: 550000, deductions: 60000 },
    { name: "Eric Nshuti", grossSalary: 900000, deductions: 135000 },
    { name: "Grace Ingabire", grossSalary: 780000, deductions: 105000 },
    { name: "Olivier Kwizera", grossSalary: 1100000, deductions: 185000 }
];

document.getElementById('calcBtn').addEventListener('click', function() {
    const tableBody = document.getElementById('tableBody');
    const table = document.getElementById('salaryTable');
    
    // Clear any existing content in the table body to avoid duplicates
    tableBody.innerHTML = "";

    // Loop through all 10 employees to calculate and display data
    employees.forEach(emp => {
        // Net Salary calculation logic (Gross - Deductions)
        const netSalary = emp.grossSalary - emp.deductions;

        // Create a new table row
        const row = document.createElement('tr');

        // Populate the row with columns
        row.innerHTML = `
            <td><strong>${emp.name}</strong></td>
            <td>${emp.grossSalary.toLocaleString()} RWF</td>
            <td>${emp.deductions.toLocaleString()} RWF</td>
            <td><strong>${netSalary.toLocaleString()} RWF</strong></td>
        `;

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Make the table visible once data is loaded
    table.style.display = 'table';
});