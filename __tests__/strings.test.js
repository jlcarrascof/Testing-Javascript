var helloWorld = 'Hello world'

describe('String tests', () => {
    test('The word "hello" must be included in my string', () => {
        expect(helloWorld).toMatch(/Hello/)
    })

    test('The word "hello" must be included in my string', () => {
        expect(helloWorld).not.toMatch(/hello/)
    })

    test('I want to verify that 1 === 1', () => {
        expect(1 === 1).toBeTruthy()
    })
})
