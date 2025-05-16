export default function Timetable(){
    return(
        <>
        <div style={{ 'width':"100%",'position':"absolute",'top':"80px", padding: "20px" }}>
      <h2>Time Table</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>08.15 a.m</td>
            <td style={tdStyle}>- Teachers arrive</td>
          </tr>
          <tr>
            <td style={tdStyle}>08.20 a.m</td>
            <td style={tdStyle}>- Students arrive</td>
          </tr>
          <tr>
            <td style={tdStyle}>08.25 a.m</td>
            <td style={tdStyle}>- Ist bell</td>
          </tr>
            <tr>
            <td style={tdStyle}>08.30 a.m - 08.50 a.m</td>
            <td style={tdStyle}>- Assembly & Attendance</td>
          </tr>
            <tr>
            <td style={tdStyle}>08.50 a.m - 09.30 a.m</td>
            <td style={tdStyle}>- Ist Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>09.30 a.m - 10.10 a.m</td>
            <td style={tdStyle}>- 2nd Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>10.10 a.m - 10.20 a.m</td>
            <td style={tdStyle}>----------------Short Break---------------</td>
          </tr>
            <tr>
            <td style={tdStyle}>10.20 a.m - 11.00 a.m</td>
            <td style={tdStyle}>-3rd Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>11.00 a.m - 11.40 a.m</td>
            <td style={tdStyle}>-4th Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>11.40 a.m - 12.20 a.m</td>
            <td style={tdStyle}>- 5th Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>12.20 p.m - 12.50 p.m</td>
            <td style={tdStyle}>---------------- Lunch Break--------------</td>
          </tr>
            <tr>
            <td style={tdStyle}>12.50 p.m - 01.30 p.m</td>
            <td style={tdStyle}>-6th Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>01.30 p.m - 02.10 p.m</td>
            <td style={tdStyle}>-7th Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>02.10 p.m - 03.00 p.m</td>
            <td style={tdStyle}>-8th Period</td>
          </tr>
            <tr>
            <td style={tdStyle}>03.00 p.m - 03.45 p.m</td>
            <td style={tdStyle}>Special classes/ Club Activities</td>
          </tr>
            <tr>
            <td style={tdStyle}>Saturday's working Hours
8.30 a.m - 12.20 p.m. Second & Fourth Saturday is a Holiday</td>
            <td style={tdStyle}></td>
          </tr>
        </tbody>
      </table>
    </div>

        </>
    )
}
const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#f4f4f4",
  textAlign: "left"
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px"
};