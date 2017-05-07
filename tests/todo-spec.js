describe("Group:", function() {


    it('should find an element by text input model', function() {
        browser.get('http://localhost:9001/src/#/view2');

        var username = element(by.model('payrolls'));
        //username.clear();
        //username.sendKeys('Jane Doe');

        var name = element(by.binding('payroll.fname'));

        expect(name.getText()).toEqual('Sayed');

        // Point A
    });



    beforeEach(function() {
        this.foo = 0;
    });

    it("can use the `this` to share state", function() {
        expect(this.foo).toEqual(0);
        this.bar = "test pollution?";
    });

    it("prevents test pollution by having an empty `this` created for the next spec", function() {
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
    });




    describe("jasmine.any", function() {
        it("matches any value", function() {
            expect({}).toEqual(jasmine.any(Object));
            expect(12).toEqual(jasmine.any(Number));
        });

        describe("when used with a spy", function() {
            it("is useful for comparing arguments", function() {
                var foo = jasmine.createSpy('foo');
                foo(12, function() {
                    return true;
                });

                expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
            });
        });
    });
});