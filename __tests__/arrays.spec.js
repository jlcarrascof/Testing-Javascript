var names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

test('We want to check if the array contains "David"', () => {
    expect(names).toContain('David')
})

test('We want to check if the array contains "Eve"', () => {
    expect(new Set(names)).toContain('Eve')
})
