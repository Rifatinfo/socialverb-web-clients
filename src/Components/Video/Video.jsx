import { useState } from "react";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Video = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal and pause the video
    const closeModal = () => {
        const video = document.getElementById('popupVideo');
        if (video) {
            video.pause(); // Pause the video when modal is closed
            video.currentTime = 0; // Reset video playback to the start (optional)
        }
        setIsModalOpen(false);
    };

    return (
        <div className="mt-10">
            <div
                style={{ backgroundImage: `url('https://miboozwp.pixydrops.com/wp-content/uploads/2021/11/design-studio-bg.jpg')` }}
                className="relative bg-cover bg-center h-96 w-full"
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative flex flex-col justify-center items-center h-full">
                    <p className="text-white text-center font-federo mb-4 text-7xl">
                        Design Studio that gets <br/> excited about
                    </p>
                    <p onClick={openModal}
                        className="text-7xl px-4 py-2 bg-[#DD0429] text-white font-semibold rounded-full"><TbBrandYoutubeFilled /></p>
                    
                </div>
            </div>

            {/* Modal structure */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl bg-white p-4 rounded-md shadow-lg">
                        {/* Close button */}
                        <span
                            onClick={closeModal}
                            className="absolute top-2 right-4 text-black text-2xl cursor-pointer"
                        >
                            &times;
                        </span>

                        {/* Video element */}
                        <video id="popupVideo" controls className="w-full h-auto">
                            <source
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Video;
