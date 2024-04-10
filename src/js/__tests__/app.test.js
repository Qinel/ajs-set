import Team from '../app';

const zombi = { name: 'Zombie', className: 'zombi' };
const devil = { name: 'Daemon', className: 'devil' };
const mage = { name: 'Magition', className: 'mage' };

test('must add the right character to the team', () => {  //добавить
  const myTeam = new Team();
  myTeam.add(mage);
  const recieved = myTeam.members.has(mage);
  expect(recieved).toBe(true);
});

test('should give an error when trying to add a character already in the team', () => { // уже есть
  expect(() => {
    const myTeam = new Team();
    myTeam.add(zombi);
    myTeam.add(zombi);
  }).toThrow('Ошибка');
});

test('should add several characters to the team without duplication', () => {  // дубль
  const myTeam = new Team();
  myTeam.addAll(zombi, devil, mage, zombi, devil, mage);
  const recieved = myTeam.members.size;
  expect(recieved).toBe(3);
});

test('must correctly convert a set to an array', () => { // массив
  const myTeam = new Team();
  myTeam.addAll(zombi, devil);
  const recieved = myTeam.toArray();
  const expected = [
    { name: 'Zombie', className: 'zombi' },
    { name: 'Daemon', className: 'devil' },
  ];

  expect(recieved).toEqual(expected);
});