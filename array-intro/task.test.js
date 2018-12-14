describe('Array basics', function() {

  describe('sortPairDesc', () => {
    it('[1, 3] => [3, 1]', () => {
      assert.sameOrderedMembers(
        sortPairDesc([1, 3]), [3, 1]
      );
    });
    it('[2, 2] => [2, 2]', () => {
      assert.sameOrderedMembers(
        sortPairDesc([2, 2]), [2, 2]
      );
    });
    it('[10, 300] => [300, 10]', () => {
      assert.sameOrderedMembers(
        sortPairDesc([10, 300]), [300, 10]
      );
    });
  });

  describe('getLonger', () => {
    it('[1, 2], [1, 2, 3] => [1, 2, 3]', () => {
      assert.sameOrderedMembers(
        getLonger([1, 2], [1, 2, 3]), [1, 2, 3]
      );
    });
    it('[2, 2], [3, 2] => [2, 2]', () => {
      assert.sameOrderedMembers(
        getLonger([2, 2], [3, 2]), [2, 2]
      );
    });
    it('[10, 300, 400], [0, 10] => [10, 300, 400]', () => {
      assert.sameOrderedMembers(
        getLonger([10, 300, 400], [0, 10]), [10, 300, 400]
      );
    });
  });

  describe('getSum', () => {
    it('[1, 2, 3, 10, 20, 30, 40] => 106', () => {
      assert.equal(
        getSum([1, 2, 3, 10, 20, 30, 40]), 106
      );
    });
    it('[1, -1, 3, -4] => -1', () => {
      assert.equal(
        getSum([1, -1, 3, -4]), -1
      );
    });
  });

  describe('getWithBiggerSum', () => {
    it('[1, 2], [1, 2, 3] => [1, 2, 3]', () => {
      assert.sameOrderedMembers(
        getWithBiggerSum([1, 2], [1, 2, 3]), [1, 2, 3]
      );
    });
    it('[20], [1, 2, 3] => [20]', () => {
      assert.sameOrderedMembers(
        getWithBiggerSum([20], [1, 2, 3]), [20]
      );
    });
    it('[1, 2, 8], [1, 2, 4, 4] => [1, 2, 4, 4]', () => {
      assert.sameOrderedMembers(
        getWithBiggerSum([1, 2, 8], [1, 2, 4, 4]), [1, 2, 4, 4]
      );
    });
  });

});

