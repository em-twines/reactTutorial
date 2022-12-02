const DisplayEntries = (props) => {
    return (  
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>Weight</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry, index) => {
            return(
              <tr>
                <td>{index+1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
              )
            })
          }
          <tr>
            <td>1</td>
            <td>175</td>
            <td>11-25-2021</td>
        </tr>
        </tbody>
      </table>
    );
}
 
export default DisplayEntries;