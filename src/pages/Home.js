import React from 'react'
import Departmentbox from '../components/Departmentbox'
import box1 from '../img/box1.jpg'
import box2 from '../img/box2.jpg'
import box3 from '../img/box3.jpg'
import around from '../img/around.png'
import around1 from '../img/around1.png'
import around2 from '../img/around2.png'
import around3 from '../img/around3.png'
import around4 from '../img/around4.png'
import around5 from '../img/around5.png'
import around6 from '../img/around6.png'
import around7 from '../img/around7.png'

import videoimg from '../img/videoimg.png'
import AroundBox from '../components/Aroundbox'

const Home = () => {
  let boxImages = [box1, box2, box3]
let  arountImages = [
    { 
        imageUrl: around1,
        title: "Photoshop CC 2018 Essential Training: The Basics",
        cardText :"Graphics Design"
    },
    { 
        imageUrl: around2,
        title: "Get Started Coding Android Apps With Kotlin",
        cardText :"Global System"
    },
    { 
        imageUrl: around3,
        title: "Create Turntable Animations With Cinema 4D",
        cardText :"Computer & Information Technology"
    },
    { 
        imageUrl: around4,
        title: "A Beginner’s Guide to the New Bootstrap 4 Grid",
        cardText :"Web Development"
    },
    { 
        imageUrl: around5,
        title: "A Designer’s Guide to Vue.js Components",
        cardText :"Art Deperments"
    },
    { 
        imageUrl: around6,
        title: "Code a Swift App With Realm Mobile Database",
        cardText :"Music"
    },
    { 
        imageUrl: around7,
        title: "10 Essential Design Tips in Adobe Illustrator",
        cardText :"Technology Information"
    },
    { 
        imageUrl: around,
        title: "Modern PHP From The the Beginning",
        cardText :"Data Science"
    }

]
  return (
    <>
      <section className='header'>
        <div className='container'>
          <h1>
            Innovation for education <br />
            and society
          </h1>
          <p className='mb-4'>
            Our interdisciplinary majors and minors mean you can <br />
            chart your own course for academic success.
          </p>
          <a href='#'>Visit our Campus </a>
        </div>
      </section>
      <section className='main-section'>
        <div className='container'>
          <div className='department text-center'>
            <h2>Our Department</h2>
            <p>
              A hundred thousand grateful loves to your dear papa and mamma. Is
              <br />
              your poor brother recovered of his rack-punch? Oh, dear! Oh, dear!
              <br />
              How men should beware of wicked punch!
            </p>
            <div className='row mt-5'>
              {boxImages.map((item, index) => {
                return <Departmentbox key={index} imageUrl={item} />
              })}
              
            </div>
          </div>
          <div className='limitless'>
            <div className='row'>
              <div className='col-md-5'>
                <img src={videoimg} alt='video' />
              </div>
              <div className='col-md-1' />
              <div className='col-md-6'>
                <h2>
                  Limitless learning, more <br />
                  possibilities
                </h2>
                <p>
                  The University of Rochester is one of the country's top-tier
                  research universities. Our campuses are home to 200 academic
                  majors, more than 2,000 faculty and instructional staff, and
                  some 10,000 students—approximately half of whom are women.
                </p>
                <p>
                  Learning at the University of Rochester is also on a very
                  personal scale. Rochester remains one of the smallest and most
                  collegiate among top research universities, with smaller
                  classes, a low 10:1 student to teacher ratio, and increased
                  interactions with faculty.
                </p>
                <div className='row my-5 counter'>
                  <div className='col-md-3'>
                    <h4>4000</h4>
                    <span>Student</span>
                  </div>
                  <div className='col-md-3'>
                    <h4>260</h4>
                    <span>Coures</span>
                  </div>
                  <div className='col-md-3'>
                    <h4>5679</h4>
                    <span>Hours Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='around mt-5'>
            <h2 className='text-center'>Around the University</h2>
            <div className='row mt-5'>
            {arountImages.map((item, index) => {
                return <AroundBox key={index} imageUrl={item.imageUrl} title={item.title} text={item.cardText} />
              })}
             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
