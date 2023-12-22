import React from 'react';
import '../css/Student.css';


const Student = ({ name, id, image, email }) => {
    return (
        <div class="card mb-3 container">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={image} class="img-fluid rounded-start h-100 w-100 p-4" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"> {name}</h5>
                        <p class="card-text"> 0846262588</p>
                        <p class="card-text"><b>Email:</b> {email}</p>
                        <button
                            type="button"
                            class="btn btn-primary"
                        >
                            Button
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default Student;