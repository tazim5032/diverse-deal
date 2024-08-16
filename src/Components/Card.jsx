import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import useAuth from "../Hook/useAuth";

const Card = ({ item, items, setItems }) => {

    const { user } = useAuth();

    const { _id, title, difficulty, description, marks, deadline, photo, username, email } = item;

    const handleDelete = id => {

        if (!user) {
            return Swal.fire({
                title: "Not Permitted",
                text: "You can not delete this assignment",
                icon: "error"
            });
        }

        if (user.email !== email) {
            return Swal.fire({
                title: "Not Permitted",
                text: "You can not delete this assignment",
                icon: "error"
            });
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/delete/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Craft item has been deleted!",
                                icon: "success"
                            });
                            // console.log('deleted');
                            const remaining = items.filter(cof => cof._id != _id);
                            setItems(remaining);
                        }
                    });


            }
        });
    };

    const getDifficultyClass = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                return 'bg-green-400';
            case 'medium':
                return 'bg-red-200';
            case 'hard':
                return 'bg-red-500';
            default:
                return '';
        }
    };

    return (
        <motion.div
            // initial={{ scale: 0 }}
            // animate={{ rotate: 360, scale: 1 }}
            // transition={{
            //     type: "spring",
            //     stiffness: 250,
            //     damping: 100
            // }}
            className="w-full max-w-xs mx-auto"
        >
            <div className="shadow-2xl rounded-lg overflow-hidden h-full">
                <img className="w-full h-48 object-cover object-center" src={photo} alt={title} />
                <div className="py-1 px-6">
                    <h2 className="text-xl font-semibold ">{title}</h2>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm mr-2">
                                Marks: {marks}
                            </span>
                            <span className="text-sm  mr-2">
                                Deadline: {new Date(deadline).toLocaleDateString()}
                            </span>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 uppercase rounded ${getDifficultyClass(difficulty)}`}>
                            {difficulty}
                        </span>
                    </div>
                </div>
                <div className="px-6 pb-4 pt-2">
                    <div className="flex justify-between">
                        <Link to={`/update/${_id}`} className="text-sm text-gray-600 hover:text-gray-900 mr-2">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="bg-red-500
                             hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            {/* <button className="bg-red-500
                             hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> */}
                            Delete
                            {/* </button> */}
                        </button>
                    </div>
                </div>
                <div className="px-6 flex justify-end pb-2">
                    <Link to={`/details/${_id}`} className="text-sm text-gray-600 hover:text-gray-900">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;