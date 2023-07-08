class EmployeePayrollData {
    get id(){
        return this.id;
    }
    set id(id){
        this.id=id;
    }
    get name() {
        return this._name;
    }

    set name(name) {
        let nameregex=RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameregex.test(name)) 
            this._name=name;
        else texterror.textContent="Name is Incorrect";
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get department() {
        return this._department;
    }

    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get note() {
        return this._note;
    }

    set note(note) {
        this._note = note;
    }

    get start_date() {
        return this._start_date;
    }

    set start_date(start_date) {
        this._start_date = start_date;
    }

    toString()
    {
        const options={year:'numeric' , month:'long' , day:'numeric'};
        const empdate=!this.start_date ? "undefined" : this.start_date.tolocaleDateString("en-US",options);
        return 'Name = '+this.name+", Gender = "+this.gender+", profile pic + "+this.profilePic+", Department = "+this.department+", Salary = "+this.salary+", StartDate = "+this.start_date+", Note = "+this.note;
    }
}