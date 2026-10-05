import ProfileCard from "./components/ProfileCard";
import ProfileData from "./dummy-data/contacts.json";

const App = ()=>{
  return(
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-gray-300">

      {
        ProfileData.map((profile)=>(
          <ProfileCard key={profile.id} profile={profile} />
        ))
      }

    </div>
  );
}

export default App;