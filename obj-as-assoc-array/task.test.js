describe('Objects as assoc. array', function () {

  describe('welcome', () => {
    it('"english" => "Welcome"', () => {
      assert.equal(welcome('english'), 'Welcome');
    });
    it('"czech" => "Vitejte"', () => {
      assert.equal(welcome('czech'), 'Vitejte');
    });
    it('"danish" => "Velkomst"', () => {
      assert.equal(welcome('danish'), 'Velkomst');
    });
    it('"dutch" => "Welkom"', () => {
      assert.equal(welcome('dutch'), 'Welkom');
    });
    it('"estonian" => "Tere tulemast"', () => {
      assert.equal(welcome('estonian'), 'Tere tulemast');
    });
  });

  describe('match', () => {
    it('minSalary: 120000, maxSalary: 140000 => true', () => {
      assert.equal(
        match({ minSalary: 120000 }, { maxSalary: 140000 }),
        true
      );
    });
    it('minSalary: 120000, maxSalary: 100000 => false', () => {
      assert.equal(
        match({ minSalary: 120000 }, { maxSalary: 100000 }),
        false
      );
    });
    it('minSalary: 120000, maxSalary: 120000 => true', () => {
      assert.equal(
        match({ minSalary: 120000 }, { maxSalary: 120000 }),
        true
      );
    });
  });

});

