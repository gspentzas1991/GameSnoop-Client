function Filter(){
    return (
    <div>
        Server Filters
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
      );
}
 
export default Filter;
