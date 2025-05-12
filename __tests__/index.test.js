test('I want to verify that 2 + 2 = 4', () => {
    expect(2 + 2).toBe(4)
})

test('I want to verify that 2 + 2 = 4 using toEqual', () => {
    expect(2 + 2).toEqual(4)
})

test('I want to verify that 5 is greater than 4', () => {
    expect(5).toBeGreaterThan(4)
})
