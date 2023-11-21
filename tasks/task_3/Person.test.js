import Person from './Person';

describe('Person', () => {
  it('should format name and age correctly', () => {
    const person = new Person('Honza', 25);
    expect(person.toString()).toBe('Jmenuji se Honza a je mi 25 let');
  });

});

/*
  Pochvala za použití testu!
  Nicméně, když už jste instaloval testovací knihovnu, tak by bylo dobré ji použít - vytvořit script v package.json, který spustí testy.
*/
