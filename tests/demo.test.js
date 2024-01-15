describe('Prueba en el Demo', () => {
  test('should than message 1 is equal to message 2', () => {
    const message1 = 'Hola Mundo';

    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
