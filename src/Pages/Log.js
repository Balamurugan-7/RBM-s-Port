import React from 'react';
import './Log.css';
import { Link , useNavigate} from 'react-router-dom';
function Log() {
  const navigate = useNavigate();
  function showErrorAnimation() {
    var form = document.getElementById('visitorform');
    form.classList.add('error');
    setTimeout(function () {
      form.classList.remove('error');
    }, 500);
  }

  function handle() {
    var name = document.getElementById('visitorname').value;
    var email = document.getElementById('vistormail').value;

    if (name === '' || email === '') {
      console.error('Invalid credentials');
      showErrorAnimation();
      return;
    }
    console.log('Logging in with:', { name, email });
    navigate('Balamurugan');
  }

  function go(){
      navigate('Balamurugan');
  }
  return (
    <div className="pfhomecontainer">
        <form id="visitorform" className="visitorform" method="post" onSubmit={handle}>
            <div className="h0">Let me know Who is this!</div>
            <div id="loginSection">
                <input type="text" id="visitorname" className="input" placeholder="Name" name="visitorname" required />
                <input type="email" id="vistormail" className="input" placeholder="E-mail" name="vistormail" required />
                <div className='buts'>
                    <button type="button" className="visitorlog" onClick={handle}>
                    Enter
                    </button>
                    <a className="skip" onClick={go}>
                        Skip
                    </a>
                </div>
                
            </div>
        </form>
      
    </div>
  );
}

export default Log;