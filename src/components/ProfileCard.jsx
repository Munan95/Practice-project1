import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Calendar } from "lucide-react";
import { Phone } from "lucide-react";
import { Globe } from "lucide-react";
import { HatGlasses } from "lucide-react";
import { Brain } from "lucide-react";

const ProfileCard = () => {
    return (
        <div className="flex flex-col border-3 border-white w-135 bg-white rounded-xl">

            <div className="flex">
                <img
                    src="https://images.pexels.com/photos/28494634/pexels-photo-28494634.jpeg?
                    cs=srgb&dl=pexels-steve-28494634.jpg&fm=jpg"
                    alt="Banner image"
                    className="w-full h-50 rounded-t-xl"
                />
            </div>

            <div className="w-full max-w-xl p-6">

                {/* Name and Job */}
                <div>
                    <h1 className="text-2xl font-bold">
                        John Doe
                    </h1>

                    <p className="text-base text-gray-800 py-1">
                        Product Designer | Senior User Experience Designer
                    </p>

                    <div className="flex items-center gap-1 py-1">
                        <MapPin size={18} className="text-gray-600" />

                        <p className="text-sm text-gray-800">
                            Los Angeles, California, United States Of America
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-800 py-4">
                    As a product designer with UX experience, I am passionate
                    about creating products that meet the needs of users while
                    delivering a beautiful and intuitive experience. I understand
                    that design goes beyond aesthetics and must be rooted in
                    user needs and behavior.
                </p>

                {/* Contact Information */}
                <div className="flex flex-col">

                    <div className="flex items-center gap-2 py-2">
                        <Mail size={20} className="text-gray-600" />
                        <p className="text-sm">
                            example@gmail.com
                        </p>
                    </div>

                    <div className="flex items-center gap-2 py-2">
                        <Calendar size={20} className="text-gray-600" />
                        <p className="text-sm">
                            12 December, 1992
                        </p>
                    </div>

                    <div className="flex items-center gap-2 py-2">
                        <Phone size={20} className="text-gray-600" />
                        <p className="text-sm">
                            (842) 335-6577
                        </p>
                    </div>

                </div>

                {/* Join date + Social icons */}
                <div className="flex items-center justify-between pt-8">

                    <p className="text-xs text-gray-800">
                        Join on 12 Jan 2025
                    </p>

                    <div className="flex items-center gap-2">

                        <div className="flex items-center justify-center bg-gray-100 rounded-full h-9 w-9">
                            <Globe size={18} />
                        </div>

                        <div className="flex items-center justify-center bg-gray-100 rounded-full h-9 w-9">
                            <HatGlasses size={18} />
                        </div>

                        <div className="flex items-center justify-center bg-gray-100 rounded-full h-9 w-9">
                            <Brain size={18} />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProfileCard;