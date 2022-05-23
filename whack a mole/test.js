
  QUnit.module('Space Number Check', function() {
    QUnit.test('Get Number', function(assert) {
      assert.equal(GetSpaceNumber(1, 2), 6);
    });
  });

  QUnit.module('ID Check', function() {
    QUnit.test('Get ID', function(assert) {
      assert.equal(GetId(1, 2), "B3");
    });
  });
  