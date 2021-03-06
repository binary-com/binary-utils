import timeStringBigger from '../timeStringBigger';

describe('timeStringBigger', () => {
    it('should return true when the first time is bigger by minutes', () => {
        const smallerTime = '23:24:25'
        const biggerTime = '23:54:25';
        expect(timeStringBigger(biggerTime, smallerTime)).toBeTruthy();
    });

    it('should return true when the first time is bigger by seconds', () => {
        const smallerTime = '23:24:25'
        const biggerTime = '23:24:26';
        expect(timeStringBigger(biggerTime, smallerTime)).toBeTruthy();
    });

    it('should return true when the first time is bigger by hour', () => {
        const smallerTime = '22:24:25'
        const biggerTime = '23:24:25';
        expect(timeStringBigger(biggerTime, smallerTime)).toBeTruthy();
    });

    it('should return false when the first and second times are equal', () => {
        const smallerTime = '22:24:25'
        const biggerTime = '22:24:25';
        expect(timeStringBigger(biggerTime, smallerTime)).toBeFalsy();
    });

    it('should return false when the second time is bigger than the first', () => {
        const smallerTime = '23:24:25'
        const biggerTime = '22:24:25';
        expect(timeStringBigger(biggerTime, smallerTime)).toBeFalsy();
    });
});
