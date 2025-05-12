var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Alice'];

test('We want to check if the array contains "David"', () => {
    expect(names).toContain('David')
})

console.log(new Set(names))

test('We want to check if the array contains "Eve"', () => {
    expect(new Set(names)).toContain('Eve')
})
