export default function Account(){
    return(
        <>
         <div style={{'width':"100%",'position':"absolute",'top':"80px", padding: "20px" }}>
      <h2 style={{color:"maroon"}}>Account Info</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
        </>
    )
}

const user = {
  name: "Jane Doe",
  email: "jane@example.com",
  role: "Admin"
};