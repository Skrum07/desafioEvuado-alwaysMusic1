import pool from '../config/db.js';

const argumento = process.argv.slice(2);
const option = argumento[0];
let name_ = argumento[1];
let rut = argumento[2];
let course = argumento[3];
let level_ = argumento[4];

 
//Agregar estudiante
const addStudent = async () => {
    try {

        const text = "insert into students (name_, rut, course, level_) values($1, $2, $3, $4) returning *";
        const values = [name_, rut, course, level_];
        const res = await pool.query(text, values);
        console.log(`Student ${name_} added successfully`);

    } catch (error) {
        console.log(error);
    }
};
//Consulta de estudiantes registrados
const showStudents = async () => {
    try {
        const text = "select * from students";
        const res = await pool.query(text);
        console.log('Students: ', res.rows);
    } catch (error) {
        console.log(error);
    }
};

// Consulta de estudiante por rut
const studentsQuery = async () => {
    try {
        const text = "select * from students where rut = $1";
        const values = [rut];
        const res = await pool.query(text, values);
        console.log(`Student ${name_} is: `, res.rows);
    } catch (error) {
        console.log(error);
    }
};

const deleteStudent = async () => {
    try {
        const text = "delete from students where rut = $1";
        const values = [rut];
        const res = await pool.query(text, values);
        console.log(`Student ${name_} deleted successfully`);
    } catch (error) {
        console.log(error);
    }
};



addStudent();
// showStudents();
//studentsQuery();
//deleteStudent();