
class Car{
  park(){
    return 'stopped';
  }

  drive(){
    return 'vroom';
  }

}

let car; //let porque car no es constante

beforeEach (()=>{
  car =new Car();
})

describe('Car class ao', () => {
  it('can park', ()=> {
    assert.equal(car.park(), 'stopped');

  });

  it('can drive', ()=> {
    assert.equal(car.drive(), 'vroom');
  });
});
