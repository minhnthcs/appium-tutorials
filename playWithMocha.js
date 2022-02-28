describe('Boards', function () {
    before(function () {
        console.log('THIS IS BEFORE TEST')
    });

    this.beforeEach(function () {
        console.log('THIS IS BEFORE EACH')
    });

    after(function () {
        console.log("THIS IS AFTER TEST")
    });

    this.afterEach(function () {
        console.log("THIS IS AFTER EACH");
    })

    it('should printout hello world', function () {
        console.log('Hello world')
    });

    it('should print out another hello world', function () {
        console.log("Another hello world")
    });

})