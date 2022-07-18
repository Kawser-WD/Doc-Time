import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailabelAppoinments from '../AvailabelAppoinments/AvailabelAppoinments';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
          <Navbar/>
          <AppoinmentHeader  date={date} setDate={setDate}></AppoinmentHeader>
          <AvailabelAppoinments date={date}></AvailabelAppoinments>
          <Footer></Footer>  
        </div>
    );
};

export default Appoinment;