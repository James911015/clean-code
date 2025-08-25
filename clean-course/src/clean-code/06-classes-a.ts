(() => {

 type Gender = 'M'|'F'

    class Person {
        public name: string
        public gender: Gender
        public birthDate: Date

        constructor(name:string,gender:Gender,birthDate:Date){
            this.name = name
            this.gender= gender
            this.birthDate= birthDate
        }

    }

    const newPerson= new Person('James','M',new Date('1991-10-15'))
    console.log({newPerson})

})();