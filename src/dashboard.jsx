import './dashboard.css'
import { useState,useEffect } from 'react';
import bannerImg from '../assets/d-banner-img.jpeg';
import examLogo from '../assets/exam_logo-removebg-preview.png';
import teacherLogo from '../assets/teacher_logo-removebg-preview.png';
import studentLogo from '../assets/student_icon-removebg-preview.png';

export default function Dashboard(){
  const [count, setCount] = useState(0);

  const bgImg = {
     background:`linear-gradient(#d5d2fdb6,#d5dfeeb4), url(${bannerImg})`
  }

  useEffect(() => {
    fetch('https://6825c72b0f0188d7e72e6bb5.mockapi.io/staff/staff')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setCount(data.length); // count the number of staff
      })
      .catch(error => {
        console.error('Error fetching staff count:', error);
      });
  }, []);

    return(
        <>
       <div className="dashboard">
         <div className="banner" style={bgImg}>
            <p>
                <h2> "Nurturing Hearts. Empowering Minds. Inspiring Purpose."</h2>
                At Shalom School of Excellence, we are more than a school — we are a Christ-centered community 
                where students grow in wisdom, character, and compassion. Rooted in faith and driven
                 by excellence, we cultivate a peaceful, healing environment where every child is seen,
                  valued, and equipped to shine in their calling.
            </p> 
         </div>
         <section>
            <div> 
                <div className='student-list com-list'>
                    <div className='img-div'>
                        <img src={studentLogo}/>
                    </div>
                    <div className='content'>
                        <h4>No. of students </h4>
                        <h4>1500+</h4>
                    </div>
                </div>     
                <div className='staff-list com-list'>
                    <div className='img-div'>
                        <img src={teacherLogo}/>
                    </div>
                    <div  className='content'>
                        <h4>No. of Staffs </h4>
                        <h4>{count}</h4>  
                    </div>
                </div>
            </div>
            <div className='examination'>
                <div>
                     <h3>Examination fees</h3>
                     <img src={examLogo}/>
                </div>
                <div className='ex-content'>
                     <h2>April 14</h2>
                     <h3>$2500</h3>
                </div>
               
            </div>
         </section>
       </div>
        </>
    )
}