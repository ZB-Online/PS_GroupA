function sol(s) {
  let input = s.toString().trim().split('\n');
  console.log(input);
}

test('TC1', () => {
  expect(
    sol(`2
< >`)
  ).toStrictEqual(`897
021`);
});

test('TC2', () => {
  expect(
    sol(`9
> < < < > > > < <`)
  ).toStrictEqual(`9567843012
1023765489`);
});
