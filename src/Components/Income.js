import React from 'react'
import '../Styles/Income.css'

function Income() {
  const data = [
  { id: 1, name: 'john', city: 'Bangalore', state: 'Karnataka'},
  { id: 2, name: 'peter',city: 'Visakhapatnam', state: 'Andhra Pradesh' },
  { id: 3, name: 'susan',city: 'Guwahati', state: 'Assam' },
  { id: 4, name: 'anna',city: 'Tuensang', state: 'Nagaland' },
  { id: 5, name: 'Mary',city: 'Indore', state: 'Bhopal' },
];
    return (
      <div className="first-row">
          <div className="income-card">
                <h2>Income</h2>
                <section className="items">
                    <h4>Marketing</h4>
                    <div class="progress">
                            <div class="progress-bar" style={{width:"70%", background:"#0A043C",color:"white" }}>
                                <h6>70%</h6>
                            </div>
                    </div>
                </section>
                <section className="items">
                    <h4>Advertisement</h4>
                    <div class="progress">
                            <div class="progress-bar" style={{width:"30%", background:"#0A043C",color:"white" }}>
                                <h6>30%</h6>
                            </div>
                    </div>
                </section>
                <section className="items">
                    <h4>Consulting</h4>
                    <div class="progress">
                            <div class="progress-bar" style={{width:"50%", background:"#0A043C",color:"white" }}>
                                <h6>50%</h6>
                            </div>
                    </div>
                </section>
                <section className="items">
                    <h4>Development</h4>
                    <div class="progress">
                            <div class="progress-bar" style={{width:"90%", background:"#0A043C",color:"white" }}>
                                <h6>90%</h6>
                            </div>
                    </div>
                </section>
                <footer>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, veritatis.</footer>
          </div>
           <div  className="item-list">
                        <section className="item">
                            <div className="item-title"><h5>First Name</h5></div>
                            <div className="item-title"><h5>Last Name</h5></div>
                            <div className="item-title"><h5>City</h5></div>
                            <div className="item-title"><h5>State</h5></div> 
                        </section>
                         <section className="item-one">
                            <div className="item-title"><h4>First Name</h4></div>
                            <div className="item-title"><h4>Last Name</h4></div>
                            <div className="item-title"><h4>City</h4></div>
                            <div className="item-title"><h4>State</h4></div> 
                        </section>
                        <hr />
                         <section className="item-one">
                            <div className="item-title"><h4>First Name</h4></div>
                            <div className="item-title"><h4>Last Name</h4></div>
                            <div className="item-title"><h4>City</h4></div>
                            <div className="item-title"><h4>State</h4></div> 
                        </section>
                        <hr />
                         <section className="item-one">
                            <div className="item-title"><h4>First Name</h4></div>
                            <div className="item-title"><h4>Last Name</h4></div>
                            <div className="item-title"><h4>City</h4></div>
                            <div className="item-title"><h4>State</h4></div> 
                        </section>
                        <hr />
                         <section className="item-one">
                            <div className="item-title"><h4>First Name</h4></div>
                            <div className="item-title"><h4>Last Name</h4></div>
                            <div className="item-title"><h4>City</h4></div>
                            <div className="item-title"><h4>State</h4></div> 
                        </section>
                        <hr />
                         <section className="item-one">
                            <div className="item-title"><h4>First Name</h4></div>
                            <div className="item-title"><h4>Last Name</h4></div>
                            <div className="item-title"><h4>City</h4></div>
                            <div className="item-title"><h4>State</h4></div> 
                        </section>

            </div>
      </div>
    )
}

export default Income;

