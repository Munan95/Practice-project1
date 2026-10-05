import { MapPin } from "lucide-react";
import { Globe } from "lucide-react";
import { HatGlasses } from "lucide-react";
import { Brain } from "lucide-react";
import { Pencil } from "lucide-react";
import ContactCredential from "./ContactCredential";

const ProfileCard = ({profile}) => {
    return (
        <div className="font-google flex flex-col border-2 border-white w-110 bg-white rounded-xl gap-10">

            {/* Banner + Profile Photo */}
            <div className="relative">

                {/* Banner Image */}
                <img
                    src={profile.bannerImage}
                    alt="Banner image"
                    className="w-full h-50 rounded-t-xl"
                />

                {/* Profile Photo */}
                <div className="absolute left-6 -bottom-12">
                    <img
                        src={profile.profileImage}
                        alt="Profile image"
                        className="w-28 h-28 rounded-full object-cover border-4 border-white"
                    />
                </div>

                {/* Edit Button */}
                <div className="absolute right-2 top-2 flex items-center justify-center bg-gray-500 rounded-full h-9 w-9">
                    <Pencil size={18} className="text-white" />
                </div>

            </div>

            {/* Profile Content */}
            <div className="p-6">

                {/* Name and Job */} 
                <div>
                    <h1 className="text-2xl font-bold">
                        {profile.name}
                    </h1>

                    <p className="text-md text-gray-800 py-1">
                        {profile.job}
                    </p>

                    <div className="flex items-center gap-1 py-1">
                        <MapPin size={16} className="text-gray-600" />

                        <p className="text-sm text-gray-700">
                            {profile.location}
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 py-4 pr-8">
                    {profile.description}
                </p>

                {/* Contact Information */}
                <div className="flex">

                    <div className="flex flex-col gap-2">
                        <ContactCredential
                            iconName="mail"
                            credential={profile.email}
                        />
                        <ContactCredential
                            iconName="calendar"
                            credential={profile.birthDate}
                        />
                        <ContactCredential
                            iconName="phone"
                            credential={profile.phone}
                        />
                    </div>

                </div>

                {/* Join date + Social icons */}
                <div className="flex items-center justify-between pt-8">

                    <p className="text-xs text-gray-700">
                        {profile.joinDate}
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