describe('Array methods', function () {

  describe('isVowel', () => {
    it('"o" => "true"', () => {
      assert.equal(
        isVowel('o'), true
      );
    });
    it('"b" => false', () => {
      assert.equal(
        isVowel('b'), false
      );
    });
  });

  describe('reverse', () => {
    it('"hello" => "olleh"', () => {
      assert.equal(
        reverse('hello'), 'olleh'
      );
    });
    it('"hello, world" => "dlrow ,olleh"', () => {
      assert.equal(
        reverse('hello, world'), 'dlrow ,olleh'
      );
    });
  });

  describe('removeUnlucky', () => {
    it('[3, 5, 7, 13, 22] => [3, 5, 7, 22]', () => {
      var input = [3, 5, 7, 13, 22];
      assert.sameOrderedMembers(
        removeUnlucky(input), [3, 5, 7, 22]
      );
    });
    it('keeps original array untouched', () => {
      var input = [3, 5, 7, 13, 22];
      removeUnlucky(input);
      assert.sameOrderedMembers(input, [3, 5, 7, 13, 22]);
    });
  });

  describe('isBalanced', () => {
    it('"[]" => true', () => {
      assert.equal(
        isBalanced('[]'), true
      );
    });
    it('"()" => true', () => {
      assert.equal(
        isBalanced('()'), true
      );
    });
    it('"([])" => true', () => {
      assert.equal(
        isBalanced('([])'), true
      );
    });
    it('"[(])" => false', () => {
      assert.equal(
        isBalanced('[(])'), false
      );
    });
    it('"[)]" => false', () => {
      assert.equal(
        isBalanced('[)]'), false
      );
    });
    it('"[](" => false', () => {
      assert.equal(
        isBalanced('[]('), false
      );
    });
    it('"3a + [2 - (a * b)] - (a * b)" => true', () => {
      assert.equal(
        isBalanced('3a + [2 - (a * b)] - (a * b)'), true
      );
    });

  });

});
