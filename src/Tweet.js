import React, {useState} from "react";

function Tweet() {
  let [text, setText] = useState("")
  // return <form onSubmit={(event) => {
  // event.preventDefault()
  // let popUp = event.target.elements.tweet.value
  // alert(popUp)
  // }}>
  //   <div className="form-group">
  //     <label htmlFor="exampleInputEmail1">Your tweet</label>
  //     <input name="tweet"  className="form-control"
  //            aria-describedby="emailHelp"
  //            placeholder="Enter tweet"/>
  //   </div>
  //   <button type="submit"> Submit </button>
  // </form>
  return <div className="p-3">
    <h1 className="h3">Tweet</h1>
    <div style={{maxWidth: "20rem"}} className="mt-3">
      <div className="form-group">
        <textarea className="form-control"
                  cols={40}
                  rows={4}
                  value={text}
                  onChange={e=> {
                    if (e.target.value.length <= 140) {
                    setText(e.target.value)
                    }
                  console.log(e.target)}}



                  placeholder="Input up to 140 characters..."
        />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button type="button"
              className="btn btn-primary mt-1"
              onClick={() => alert(text)}>
          Tweet
        </button>
        <small className="text-muted">
          {140 - text.length}
        </small>
      </div>
    </div>
  </div>
}

export default Tweet
