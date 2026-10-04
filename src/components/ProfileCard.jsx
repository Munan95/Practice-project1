import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Calendar } from "lucide-react";
import { Phone } from "lucide-react";
import { Globe } from "lucide-react";
import { HatGlasses } from "lucide-react";
import { Brain } from "lucide-react";

const ProfileCard = () => {
    return (
        <div className="flex flex-col border-3 border-white w-135 bg-white rounded-xl p-6">

            <div className="flex">banner image</div>

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <p className="text-2xl font-bold">
                        John Doe
                    </p>
                    <p className="text-base text-gray-800 py-1">
                        Product Designer | Senior User Experience Designer
                    </p>
                    <div className="flex items-center gap-1 py-1">
                        <MapPin size={18} className="text-gray-600" />
                        <p className="text-sm text-gray-800">
                            Los Angels,California,United States Of America
                        </p>
                    </div>
                </div>

                <div className="flex w-115">
                    <p className="text-sm text-gray-800 py-4">
                        As a product designer with UX experience, I am passionate
                        about creating products that meet the needs of users while
                        delivering a beautiful and intuitive experience.I understand
                        that design goes beyond aesthetics and must be rooted in
                        user needs and behavior.
                    </p>
                </div>

                <div className="flex flex-col">
                    <div className="flex items-center gap-1 py-2">
                        <Mail size={20} className="text-gray-600" />
                        <p className="text-sm">
                            example@gmail.com
                        </p>
                    </div>
                    <div className="flex items-center gap-1 py-2">
                        <Calendar size={20} className="text-gray-600" />
                        <p className="text-sm">
                            12 December,1992
                        </p>
                    </div>
                    <div className="flex items-center gap-1 py-2">
                        <Phone size={20} className="text-gray-600" />
                        <p className="text-sm">
                            (842) 335-6577
                        </p>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-60 pt-8">
                    <div>
                        <p className="text-gray-800 text-[12px]">Join on 12 Jan 2025</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex items-center justify-center bg-gray-100 rounded-[50%] h-9 w-9">
                            <Globe />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 rounded-[50%] h-9 w-9">
                            <HatGlasses />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 rounded-[50%] h-9 w-9">
                            <Brain />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfileCard;