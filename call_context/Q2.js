let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student
            );
        }.bind(this)) //binding the current context of the object with inner function inside forEach
    }
};
group.showList();