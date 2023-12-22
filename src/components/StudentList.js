import React from 'react';
import Student from './Student';
import DataStudents from '../data/DataStudents';
// import Product from './Product';
// import products from '../data/data_products';

const StudentList = () => {
    return(
        <div className='container'>
            <h2>Student</h2>
            <div className='product-list'>
                {DataStudents.map((DataStudents, index) => (
                    <Student key={index}{...DataStudents}/>
                ))}
            </div>
        </div>
    )
}

export default StudentList;