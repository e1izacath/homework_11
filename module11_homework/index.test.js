const arrow = require('./index.js');


describe ('test function arrow', function() {

  it ('make 2 5 times to get 32', function() {
    expect(arrow(2, 5)).toBe(32);
  });
  it ('make 2 -1 times to get 0.5', function() {
    expect(arrow(2, -1)).toBe(0.5);
  });
  it ('make 2 meow times to get NaN', function() {
    expect(arrow(2, 'meow')).toBe(NaN);
  });

});
