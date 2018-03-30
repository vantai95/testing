// import { error } from 'util';

const assert = require('assert');
const { addPromise } = require('../src/addPromise');

describe('Test Promise',() =>{
    it('Can add 2 number' ,done =>{
        addPromise(4,5)
        .then(kq =>{
            assert.equal(kq,9);
            done();
        })
    })

    it('Can add a number and a string' ,done =>{
        addPromise(4,'x')
        .catch(error=>{
            assert.equal(error.message,'Type error');
            done();
        })
    })

});