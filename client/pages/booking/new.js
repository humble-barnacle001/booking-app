import withAuth from "../../components/PrivateRoute";

const NewBooking = () => {
    return (
        <div className='m-auto'>
            <h1 className='text-center p-10'>Booking Page</h1>
        </div>
    );
};

export default withAuth(NewBooking);
