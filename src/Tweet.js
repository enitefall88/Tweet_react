import React from "react";

function Tweet() {
  return <form onSubmit={(event) => {
  event.preventDefault()
  let popUp = event.target.elements.tweet.value
  window.alert(popUp)
  }}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Your tweet</label>
      <input name="tweet"  className="form-control"
             aria-describedby="emailHelp"
             placeholder="Enter tweet"/>
    </div>
    <button type="submit"> Submit </button>
  </form>
}

export default Tweet
