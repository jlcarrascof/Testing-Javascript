var helloWorld = 'Hello world'

test('The word "hello" must be included in my string', () => {
    expect(helloWorld).toMatch(/Hello/)
})
