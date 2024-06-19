import './App.css'

function App() {

  return (
    <>
    <div className="popup">
        <div className='popup-content'>

          <div className="page">
            <span>All pages</span>
            <input type="checkbox" id="c0" name="cc" />
            <label htmlFor="c0"><span><span></span></span></label>
          </div>

          <hr/>

          <div>
          <div className="page">
            <span>Page 1</span>
              <input type="checkbox" id="c1" name="cc" />
              <label htmlFor="c1"><span><span></span></span></label>
            </div>
            <div className="page">
              <span>Page 2</span>
              <input type="checkbox" id="c2" name="cc" />
              <label htmlFor="c2"><span><span></span></span></label>
            </div>
            <div className="page">
              <span>Page 3</span>
              <input type="checkbox" id="c3" name="cc" />
              <label htmlFor="c3"><span><span></span></span></label>
            </div>
            <div className="page">
              <span>Page 4</span>
              <input type="checkbox" id="c4" name="cc" />
              <label htmlFor="c4"><span><span></span></span></label>
            </div>
          </div>
          
          <hr/>

          <button className="done-button">Done</button>

        </div>
    </div>

    </>
  )
}

export default App
