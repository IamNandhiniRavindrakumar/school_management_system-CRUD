export default function Booklist(){
    return(
        <>
        <div className="booklist-wrapper" 
        style={{'width':"100%",'min-height':"100vh",'position':"relative",'top':"70px",'left':"10px",'color':'rgb(75, 74, 74)'}}>
            <h1>Book-List</h1>
            <h3>Here are the list of the books that we offer in this school. </h3>
            <div>
                <iframe
                    src="./src/assets/IMG_20250516_125707.pdf"
                    width="98%"
                    height="600px"
                    title="PDF Viewer"
                    style={{ border: 'none' }}
                ></iframe>
            </div>
        </div>
        </>
    )
}