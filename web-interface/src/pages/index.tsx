import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    
    <div className="container">
      
      <div className="jumbotron">
        <h1 className="display-4">Send Message</h1>
        <input id = "name" className="form-control" placeholder="Name"/>
        <textarea id = "message" className="form-control" placeholder="Your Message Here">
        </textarea>
        <button id="send" className="btn btn-success">Send</button>
      </div>
      
      <div id="messages"></div>
    </div>
    
    
  )
}

export default Home
