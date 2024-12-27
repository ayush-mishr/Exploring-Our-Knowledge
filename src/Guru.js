import Card from './Card';
import Date from './Date'
   
function Guru({gurus,removeGuru}){

    
    return(
    <div className='guruji'>
        <div className='heading'><h1>Our Spritual Guru</h1></div>
        <div className='cards'>
            {
             Array.isArray(gurus)&&gurus?.map((value)=>{
                return <Card {...value} removeGuru={removeGuru} ></Card>
                
             })
            }
        </div>
    </div>
    );
}
export default Guru;