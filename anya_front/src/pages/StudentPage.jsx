import Sidebar from '../components/SideBar Section/Sidebar';
import Body from '../components/Body Section/Body';


const StudentPage = () => {

    //custom hook para saber si el usuario esta logeado

    return (
        <div className='container'>
            <Sidebar />
            <Body />

        </div>

    );
}

export default StudentPage;