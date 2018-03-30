const assert = require('assert');
const { addCallback } = require('../src/addCallback');

describe('Test addCallback function',() =>{
    it('Can add 2 numbers', (done) => {
        addCallback(4,5,(error, kq) =>{
          assert.equal(error, null);
          assert.equal(kq,9);  
          done();
        })
        
    });
    it('Can add  numbers with a string', (done) => {
        addCallback('x',5,(error, kq) =>{
          assert.equal(kq, undefined);
          assert.equal(error.message,'Type error');
          done();
        });
        
    });

    it('Số âm',(done) =>{
        addCallback(-4,-6,(error,kq)=>{
            assert.equal(error, null);
            assert.equal(kq,-10);
            done();
        })
    })

})
