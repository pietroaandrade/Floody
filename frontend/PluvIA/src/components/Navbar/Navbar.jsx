    
import AccountToggle from "./AccountToggle"
import SearchBar from "./SearchBar";
import RouteSelect from "./RouteSelect";
import Plan from "./Plan";

export default function Navbar(){
    return(
        <div>
            <div className=" sticky top-4 h-[calc(100vh-32x-48px)] min-w-[220px]">
                <AccountToggle />
                <SearchBar />
                <RouteSelect />
                

            </div>
            <Plan />
        </div>
    );

};