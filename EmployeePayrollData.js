class EmployeePayrollData 
{
    get id(){
        return this._id;
    }
    set id(id){
        this._id=id;
    }
    get name() 
    {
        return this._name;
    }
    set name(name) 
    {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is incorrect';
    }
    
    get profilePic() 
    {
        return this._profilePic;
    }
    set profilePic(profilePic) 
    {
        this._profilePic = profilePic;
    }

    get gender() 
    {
        return this._gender;
    }
    set gender(gender) 
    {
        this._gender = gender;
    }

    get department() 
    {
        return this._department;
    }
    set department(department) 
    {
        this._department = department;
    }

    get salary() 
    {
        return this._salary;
    }
    set salary(salary) 
    {
        this._salary = salary;
    }

    get note() 
    {
        return this._note;
    }
    set note(note) 
    {
        this._note = note;
    }

    get start_date() 
    {
        return this._start_date;
    }
    set start_date(start_date) 
    {
        let now = new Date();
        now = Date.parse(now);
        if (start_date > now) 
        {
            throw 'Start Date is Future date!';
        } else 
        {
            this._start_date = start_date;
        }
    }

    toString() 
    {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.start_date ? "undefined" : this.start_date.toLocaleDateString("en-US", options);
        return 'Name = ' + this.name + ", Gender = " + this.gender + ", ProfilePic = " + this.profilePic +
            ", Department = " + this.department + ", Salary = " + this.salary + ", StartDate = " + empDate + ", Note = " + this.note;
    }
}