function AddBlog() {
  return (
    <div className="App">
      <div className="wrrapper " id="addblog">
        <form>
          <label>Blog titel :</label>
          <input type="text" className=""></input>
          <label>Blog body :</label>
          <input type="text" className=""></input>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
