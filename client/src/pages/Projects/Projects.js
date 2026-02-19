import './Projects.css'


const projects = () => {
  return (
    <>
    
    <div className="project" id="projects">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">top rescent projects</h2>
      <hr />
      <p className="pb-3 text-center textup">👉 Here Are My Top 2 Rescent Projects With Live deplyed links and the github source code </p>
      <div className="row" id="ads">
        <div className="col-md-6">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">
                Full Stack
              </span>
              <img src="https://max-website20-images.s3.ap-south-1.amazonaws.com/Types_of_Doctors_1c5efbe677.jpg" alt="project 1" className="img-fluid"/>
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">React</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase hi-baby">
                  doctor appointment system
                </h5>
              </div>
              <a className="ad-btn" href="https://doctor-appointment-system-1-ixeo.onrender.com">View</a>
              <a className="ad-btn" href="https://github.com/chaiitanya01/Doctor-Appointment-System.git">Source Code</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card rounded">
            <div className="card-image">
              <span className="card-notify-badge">
                Full Stack
              </span>
              <img src="https://prolifehospitalsldh.com/wp-content/uploads/2020/01/blood-donation-3087392_1280-1024x682.jpg" alt="project 2"  className="img-fluid" />
            </div>
            <div className="card-image-overly m-auto mt-3">
              <span className="card-detail-badge">Node</span>
              <span className="card-detail-badge">Express</span>
              <span className="card-detail-badge">React</span>
              <span className="card-detail-badge">MongoDB</span>
            </div>
            <div className="card-body text-center">
              <div className="ad-title m-auto">
                <h5 className="text-uppercase hi-baby">BloodBank WebApp</h5>
              </div>
              <a className="ad-btn" href="https://blood-bank-frontend-qg4o.onrender.com">View</a>
              <a className="ad-btn" href="https://github.com/chaiitanya01/Blood-Bank-System.git">source code</a>
            </div>
          </div>
        </div>
        

      </div>
    </div>
    
    </>
  )
}

export default projects
