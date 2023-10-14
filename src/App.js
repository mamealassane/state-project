import './App.css';
import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myimg from './ko.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName : 'Rane Bo',
      bio : '<Rane dev/>',
      image : myimg,
      profession : 'FullStack developer',
      show : false,
      time : 0
    };
  }
  toggleCard=()=>{
    this.setState({show: !this.state.show});
  }
  componentDidMount=()=>{
    setInterval(()=>{
      this.setState({time: this.state.time + 1});
    },1000);
  }
  
    render() {
    
    return (
      
      <>
        <button class="btn btn-sm btn-primary" onClick={this.toggleCard}><strong>Profil Card</strong></button>
        {(this.state.show) && (<div class="col-xl-4 col-md-4 mb-3 mb-lg-5">
        
        <div class="card overflow-hidden text-center">
          
          <div class="card-body p-0">
            
            <a href="#!.html" class="avatar xl rounded-circle bg-gray bg-opacity-10 p-1 position-relative mt-n5 d-block mx-auto">
              <img src={this.state.image} class="avatar-img img-fluid rounded-circle" alt="" width={150} height={1}/>
            </a>
            <h5 class="mb-0 pt-3">
              <a href="#!.html" class="text-reset">{this.state.fullName}</a>
            </h5>
            <span class="text-muted small d-block mb-4">{this.state.profession}</span>
            <div class="row mx-0 border-top border-bottom">
              <div class="col-6 text-center border-end py-3">
                <h5 class="mb-0">2345</h5>
                <small class="text-muted">Followers</small>
              </div>
              <div class="col-6 text-center py-3">
                <h5 class="mb-0">54</h5>
                <small class="text-muted">Following</small>
              </div>
            </div>
            <ul class="list-group list-group-flush">
              
              <li class="list-group-item px-3 d-flex align-items-center justify-content-between">
                <span class="text-muted small">Bio</span>
                <strong>{this.state.bio}</strong>
              </li>
              <li class="list-group-item px-3 d-flex align-items-center justify-content-between">
                <span class="text-muted small d-flex align-items-center">
                  <span class="align-middle lh-1 me-1 size-5 border border-4 border-success rounded-circle d-inline-block"></span>
                  Online
                </span>
                <div class="text-end">
                  <a href="#!.html" class="btn btn-sm btn-primary" onClick={this.toggleCard}>Deconnexion</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
                <strong>Time interval : </strong> {this.state.time} secondes
      </div>)}
      
      </>
    )
    

  }
}

export default App;
