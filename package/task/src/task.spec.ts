import task from './task';

describe('middleware', () => {
    it('should work', () => {
        expect(task(<any>{})).toEqual('middleware');
    });
});
