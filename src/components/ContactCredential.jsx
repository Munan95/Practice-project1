import {Mail,Calendar,Phone} from "lucide-react";

const ContactCredential = ({iconName,credential})=>{
    return(
        <div className="flex items-center gap-2">

            {iconName==="mail" && <Mail size={18} className="text-gray-500"/>}
            {iconName==="calendar" && <Calendar size={18} className="text-gray-500"/>}
            {iconName==="phone" && <Phone size={18} className="text-gray-500"/>}

            <p className="text-sm">{credential}</p>
        </div>
    );
};

export default ContactCredential;