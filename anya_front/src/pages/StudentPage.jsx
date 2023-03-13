import Sidebar from '../components/SideBar Section/Sidebar';
import Body from '../components/Body Section/Body';
import useUser from '../hooks/useUser'


const StudentPage = () => {

    //custom hook para saber si el usuario esta logeado
    const { user } = useUser();

    return (
        <div className='container'>
            <Sidebar />
            <Body />

        </div>

    );
}

export default StudentPage;