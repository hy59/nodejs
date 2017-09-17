var banji = require('./class') 

exports.add = function(banjies) {
    banjies.forEach(function(item, index) {
        var _banji = item
        var teacherName = item.teacherName
        var students = item.students
        
        banji.add(teacherName, students)
    })
} 
